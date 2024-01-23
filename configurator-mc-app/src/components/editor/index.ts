import { ClassicPreset, NodeEditor } from 'rete';
import { AreaPlugin, AreaExtensions } from 'rete-area-plugin';
import {
  ConnectionPlugin,
  Presets as ConnectionPresets,
} from 'rete-connection-plugin';
import { ReactPlugin, Presets } from 'rete-react-plugin';
import {
  AutoArrangePlugin,
  Presets as ArrangePresets,
  ArrangeAppliers,
} from 'rete-auto-arrange-plugin';
import { DataflowEngine } from 'rete-engine';
import {
  ContextMenuExtra,
  ContextMenuPlugin,
  Presets as ContextMenuPresets,
} from 'rete-context-menu-plugin';
import { ProductNode } from './nodes/ProductNode';
import {
  EditorExtraOptions,
  Schemes,
  AreaExtra,
  Connection,
  Node,
  ConnProps,
} from './types';
import { JSONObejctNode } from './nodes/JSONObejctNode';
import { QueryNode } from './nodes/QueryNode';
import { ArrayNode } from './nodes/ArrayNode';
import { FinalNode } from './nodes/FinalNode';
import { QueryDropdownElement } from './elements/QueryDropDown';
import { QueryDropdownControl } from './controls/QueryDropdownControl';
import { ButtonControl } from './controls/ButtonControl';
import { ButtonElement } from './elements/Button';

export async function createEditor(
  options: EditorExtraOptions,
  container: HTMLElement
) {
  const editor = new NodeEditor<Schemes>();
  const area = new AreaPlugin<Schemes, AreaExtra>(container);
  const connection = new ConnectionPlugin<Schemes, AreaExtra>();
  const render = new ReactPlugin<Schemes, AreaExtra>();
  const arrange = new AutoArrangePlugin<Schemes>();
  const engine = new DataflowEngine<Schemes>();

  function extractByPaths2(json: any, paths: string[]) {
    const result = {};

    function extract(currentPart: any, currentResult: any, remainingPath: string[]) {
        if (remainingPath.length === 0) {
            return;
        }

        let nextKey = remainingPath[0];
        let nextPath = remainingPath.slice(1);

        if (Array.isArray(currentPart)) {
            currentPart.forEach((item, index) => {
                if (!currentResult[index]) currentResult[index] = {};
                extract(item, currentResult[index], remainingPath);
            });
        } else if (typeof currentPart[nextKey] !== 'undefined') {
            if (nextPath.length === 0) {
                currentResult[nextKey] = currentPart[nextKey];
            } else {
                currentResult[nextKey] = currentResult[nextKey] || (Array.isArray(currentPart[nextKey]) ? [] : {});
                extract(currentPart[nextKey], currentResult[nextKey], nextPath);
            }
        }
    }

    paths.forEach(path => {
        const parts = path.split('.');
        extract(json, result, parts);
    });

    return result;
}

  // function extractByPaths(json: any, paths: string[]) {
  //   const result: any = {};
  //   paths.forEach((path) => {
  //     const parts = path.split('.');
  //     let currentPart = json;
  //     let currentResult = result;

  //     for (let i = 0; i < parts.length; i++) {
  //       if (currentPart[parts[i]] === undefined) {
  //         break;
  //       }
  //       currentPart = currentPart[parts[i]];

  //       if (i < parts.length - 1) {
  //         currentResult[parts[i]] = currentResult[parts[i]] || {};
  //         currentResult = currentResult[parts[i]];
  //       } else {
  //         currentResult[parts[i]] = currentPart;
  //       }
  //     }
  //   });
  //   return result;
  // }
  const getParentPath = (node: Node, allConnections: ConnProps[]): string => {
    const connectionsToCurrentNode = allConnections.filter(
      (c) => c.target === node.id
    );

    let currentPath = node.path + '.';

    if (node instanceof QueryNode) {
      return '';
    }

    if (node instanceof ArrayNode) {
      currentPath = '';
    }

    if (connectionsToCurrentNode.length === 0) {
      return currentPath;
    }
    const parent = editor.getNode(connectionsToCurrentNode[0].source);

    return getParentPath(parent, allConnections) + currentPath;
  };

  const doAMap = (n: FinalNode, allConnections: ConnProps[]): string[] => {
    const paths: string[] = [];
    const connectionsToCurrentNode = allConnections
      .filter((c) => c.target === n.id)
      .forEach((c) => {
        const parent = editor.getNode(c.source);
        const paretnPath = getParentPath(parent, allConnections);

        paths.push(paretnPath + c.sourceOutput);
      });
    return paths;
  };
  async function process() {
    engine.reset();

    editor.getNodes().forEach((n) => engine.fetch(n.id));

    const allConnections = editor.getConnections();
    try {
      const all = await Promise.all(
        editor
          .getNodes()
          .filter((n) => n instanceof FinalNode)
          .map((n) => doAMap(n as FinalNode, allConnections))
      );
      console.log(all);

      const aaa: QueryNode = editor
          .getNodes()
          .find((n) => n instanceof QueryNode);
          console.log(aaa);
          

      console.log(extractByPaths2(aaa.returningObject, all.reduce((a, b) => [...a, ...b], [])));
      
    } catch (e) {
      console.log('happend in process', e);
    }
  }

  AreaExtensions.selectableNodes(area, AreaExtensions.selector(), {
    accumulating: AreaExtensions.accumulateOnCtrl(),
  });

  const contextMenu = new ContextMenuPlugin<Schemes>({
    items: ContextMenuPresets.classic.setup([
      ['JSON', () => new JSONObejctNode({ editor, area }, process)],
      ['Array', () => new ArrayNode({ editor, area }, process)],
      ['Product', () => new ProductNode(undefined, process)],
    ]),
  });

  area.use(contextMenu);
  render.addPreset(
    // @ts-ignore
    Presets.classic.setup({
      customize: {
        // node(context) {

        //   if (context.payload.label === 'Query') {
        //     return CustomNode;
        //   }
        //   return Presets.classic.Node;
        // },
        control(data) {
          if ((data.payload as unknown) instanceof QueryDropdownControl) {
            return QueryDropdownElement as any;
          } else if ((data.payload as unknown) instanceof ButtonControl) {
            return ButtonElement as any;
          } else {
            return Presets.classic.Control;
          }
        },
      },
    })
  );
  render.addPreset(Presets.contextMenu.setup());
  render.addPreset(Presets.classic.setup());

  connection.addPreset(ConnectionPresets.classic.setup());

  arrange.addPreset(ArrangePresets.classic.setup());

  editor.use(engine);
  editor.use(area);
  area.use(connection);
  area.use(render);
  area.use(arrange);
  area.use(contextMenu);

  AreaExtensions.simpleNodesOrder(area);
  AreaExtensions.showInputControl(area);

  editor.addPipe((context) => {
    if (context.type === 'connectioncreate') {
      if (
        editor.getNode(context.data.source) instanceof JSONObejctNode &&
        editor.getNode(context.data.target) instanceof JSONObejctNode
      ) {
        if (
          typeof (editor.getNode(context.data.source) as JSONObejctNode)
            .returningObject?.[context.data.sourceOutput] === 'object'
        ) {
          return context;
        }
        return;
      }
    }
    if (context.type === 'connectioncreated') {
      if (editor.getNode(context.data.target) instanceof FinalNode) {
        (editor.getNode(context.data.target) as FinalNode).connectionAdded(
          context.data
        );
      }
    }
    if (context.type === 'connectionremoved') {
      if (editor.getNode(context.data.target) instanceof FinalNode) {
        (editor.getNode(context.data.target) as FinalNode).connectionRemoved(
          context.data
        );
      }
    }
    if (['connectioncreated', 'connectionremoved'].includes(context.type)) {
      process();
    }
    return context;
  });

  const query = new QueryNode(
    { ...options, initial: 'product', area },
    process
  );
  const arrayN = new ArrayNode({ editor, area }, process);
  const json = new JSONObejctNode({ area, editor }, process);
  const final = new FinalNode({ editor, area }, process);

  await editor.addNode(query);
  await editor.addNode(arrayN);
  await editor.addNode(json);
  await editor.addNode(final);

  // TODO: fix this
  // try {
  //   await editor.addConnection(new ClassicPreset.Connection(query, "results", arrayN, "array"));
  // } catch (e) {
  //   console.log('todo: fix this');
  // }

  const applier = new ArrangeAppliers.TransitionApplier<Schemes, never>({
    duration: 500,
    timingFunction: (t) => t,
    async onTick() {
      await AreaExtensions.zoomAt(area, editor.getNodes());
    },
  });

  await arrange.layout({ applier });
  AreaExtensions.zoomAt(area, editor.getNodes());

  return {
    destroy: () => area.destroy(),
  };
}
