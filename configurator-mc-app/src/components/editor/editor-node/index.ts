import { NodeEditor as BaseNodeEditor, ClassicPreset } from 'rete';
import {
  AreaExtra,
  ConnProps,
  EditorExtraOptions,
  Schemes,
  SourceNodes,
  StoredNode,
  TargetNodes,
} from '../types';
import { SamplerNode } from '../nodes/root-node';
import { AreaPlugin } from 'rete-area-plugin';
import { DataflowEngine } from 'rete-engine';
import { FinalNode } from '../nodes/final-node';
import { JSONObejctNode } from '../nodes/json-object-node';
import { ArrayNode } from '../nodes/array-node';
import { retryOperation } from '../utils';

export class NodeEditor extends BaseNodeEditor<Schemes> {
  getRoot(): SamplerNode {
    return this.getNodes().find((n) => n instanceof SamplerNode) as SamplerNode;
  }

  async populate(
    options: EditorExtraOptions,
    area: AreaPlugin<Schemes, AreaExtra>,
    engine: DataflowEngine<Schemes>,
    process: () => Promise<void>
  ) {
    if (options.initialData) {
      const nodes = options.initialData.nodes;
      const connections = options.initialData.connections;
      await this.populateWithStoredData(
        nodes,
        connections,
        options,
        area,
        engine,
        process
      );
    } else {
      await this.populateWithDefaultNodes(options, area, engine, process);
    }
  }

  private async populateWithStoredData(
    nodes: StoredNode[],
    connections: Omit<ConnProps, 'id'>[],
    options: EditorExtraOptions,
    area: AreaPlugin<Schemes, AreaExtra>,
    engine: DataflowEngine<Schemes>,
    process: () => Promise<void>
  ) {
    await this.createNodes(nodes, options, area, engine, process);
    const root = this.getRoot();

    await root?.checkRoot();
    await this.traverseConnections(
      options,
      area,
      engine,
      process,
      nodes,
      connections,
      root.id
    );
  }

  private async populateWithDefaultNodes(
    options: EditorExtraOptions,
    area: AreaPlugin<Schemes, AreaExtra>,
    engine: DataflowEngine<Schemes>,
    process: () => Promise<void>
  ) {
    const query = new SamplerNode(
      { ...options, initial: 'products', area, editor: this, engine },
      process
    );
    const arrayN = new ArrayNode({ editor: this, area }, process);
    const json = new JSONObejctNode({ area, editor: this }, process);
    const final = new FinalNode({ editor: this, area }, process);

    await this.addNode(query);
    await this.addNode(arrayN);
    await this.addNode(json);
    await query.checkRoot();
    await this.addConnection(
      new ClassicPreset.Connection(query, 'results', arrayN, 'array')
    );
    await arrayN.updateNode();
    await engine.fetch(arrayN.id);
    await this.addConnection(
      new ClassicPreset.Connection(arrayN, 'results', json, 'jsonObject')
    );
    await json.updateNode();
    await this.addNode(final);
  }

  private async createNodes(
    nodes: StoredNode[],
    options: EditorExtraOptions,
    area: AreaPlugin<Schemes, AreaExtra>,
    engine: DataflowEngine<Schemes>,
    process: () => Promise<void>
  ) {
    for await (const node of nodes) {
      switch (node.label?.toLowerCase()) {
        case 'sampler':
          const samplerNode = new SamplerNode({
            ...options,
            id: node.id,
            initial: node.inputs?.entity.control._entity,
            area,
            editor: this,
            engine,
          });
          await this.addNode(samplerNode);
          area?.update('node', node.id!);
          break;
        case 'output':
          const finalNode = new FinalNode(
            {
              id: node.id,
              area,
              editor: this,
            },
            process
          );
          await this.addNode(finalNode);
          break;
        case 'json object':
          const jsonNode = new JSONObejctNode(
            {
              id: node.id,
              area,
              editor: this,
            },
            process
          );
          await this.addNode(jsonNode);
          break;
        case 'array':
          const arrayNode = new ArrayNode(
            {
              id: node.id,
              area,
              editor: this,
            },
            process
          );
          await this.addNode(arrayNode);

          break;
      }
      area?.update('node', node.id!);
    }
  }

  private async traverseConnections(
    options: EditorExtraOptions,
    area: AreaPlugin<Schemes, AreaExtra>,
    engine: DataflowEngine<Schemes>,
    process: () => Promise<void>,
    nodeList: StoredNode[],
    connections: Omit<ConnProps, 'id'>[],
    parentId: string = ''
  ) {
    const nodes = this.getAllChildNodes(nodeList, connections, parentId);
    await this.createConnections(parentId, nodes, connections, area, process);

    for await (const node of nodes) {
      await this.traverseConnections(
        options,
        area,
        engine,
        process,
        nodeList,
        connections,
        node.id
      );
    }
  }

  private getAllChildNodes(
    nodes: StoredNode[],
    connections: Omit<ConnProps, 'id'>[],
    parentId: string
  ): StoredNode[] {
    const connectionsToNode = connections.filter(
      (connection) => connection.source === parentId
    );
    return connectionsToNode
      .map((connection) => {
        return nodes.find((node) => node.id === connection.target);
      })
      .filter(Boolean)
      .filter(
        (node, i, list) => list.findIndex((n) => n?.id === node?.id) === i
      )
      .sort((a, b) => {
        return a?.label?.toLowerCase() === 'output'
          ? 1
          : b?.label?.toLowerCase() === 'output'
          ? -1
          : -1;
      }) as StoredNode[];
  }

  private async createConnections(
    nodeId: string,
    nodes: StoredNode[],
    connections: Omit<ConnProps, 'id'>[],
    area: AreaPlugin<Schemes, AreaExtra>,
    process: () => Promise<void>
  ) {
    if (!nodes.length) {
      return;
    }

    const connectionsFromThisNode = connections
      .filter((connection) => connection.source === nodeId)
      .filter((connection) =>
        nodes.find((node) => node.id === connection.target)
      );

    for await (const connection of connectionsFromThisNode) {
      const source = this.getNode(connection.source) as SourceNodes;
      const target = this.getNode(connection.target) as TargetNodes;

      await retryOperation(async () => {
        console.log('source', source, 'target', target);

        if (source.hasOutput(connection.sourceOutput)) {
          // @ts-ignore
          if (!target.hasInput(connection.targetInput)) {
            if (target instanceof FinalNode) {
              (target as FinalNode).addInputControl(process);
            }
            throw new Error('not filled yet');
          }
          return true;
        }
        throw new Error('not filled yet');
      }, 10);

      try {
        this.addConnection(
          new ClassicPreset.Connection(
            source,
            connection.sourceOutput,
            target,
            // @ts-ignore
            connection.targetInput
          )
        );
      } catch (error) {
        console.log('error', error);
      }
    }
  }
}
