import { AreaExtensions, AreaPlugin } from 'rete-area-plugin';
import {
  ArrangeAppliers,
  Presets as ArrangePresets,
  AutoArrangePlugin,
} from 'rete-auto-arrange-plugin';
import {
  ConnectionPlugin,
  Presets as ConnectionPresets,
} from 'rete-connection-plugin';
import {
  ContextMenuPlugin,
  Presets as ContextMenuPresets,
} from 'rete-context-menu-plugin';
import { DataflowEngine } from 'rete-engine';
import { Presets, ReactPlugin } from 'rete-react-plugin';
import { ButtonControl } from './controls/ButtonControl';
import { CheckboxControl } from './controls/CheckboxControl';
import { QueryDropdownControl } from './controls/QueryDropdownControl';
import { ButtonElement } from './elements/Button';
import { CheckboxElement } from './elements/Checkbox';
import { QueryDropdownElement } from './elements/QueryDropDown';
import { ArrayNode } from './nodes/array-node';
import { FinalNode } from './nodes/final-node';
import { JSONObejctNode } from './nodes/json-object-node';
import {
  AreaExtra,
  ConnProps,
  EditorExtraOptions,
  Node,
  Schemes,
  StoredNode,
} from './types';
import { MinimapPlugin } from 'rete-minimap-plugin';
import { NodeEditor } from './editor-node';

export function getExportData(nodes: Node[], connections: ConnProps[]) {
  const exportData: {
    nodes: StoredNode[];
    connections: Omit<ConnProps, 'id'>[];
  } = {
    nodes: [],
    connections: [],
  };

  exportData.nodes = nodes.map((node) => {
    return node.getExportData();
  });

  for (const connection of connections) {
    exportData.connections.push({
      source: connection.source,
      sourceOutput: connection.sourceOutput,
      target: connection.target,
      targetInput: connection.targetInput,
    });
  }
  return exportData;
}

export async function createEditor(
  options: EditorExtraOptions,
  container: HTMLElement
) {
  let editor = new NodeEditor();
  const area = new AreaPlugin<Schemes, AreaExtra>(container);
  const connection = new ConnectionPlugin<Schemes, AreaExtra>();
  const render = new ReactPlugin<Schemes, AreaExtra>();
  const arrange = new AutoArrangePlugin<Schemes>();
  const engine = new DataflowEngine<Schemes>();

  async function updateParentComponent(paths: string[]) {
    const nodes = editor.getNodes();
    const connections = editor.getConnections();
    const root = editor.getRoot();
    const exportData = getExportData(nodes, connections);

    options.exportConfig?.({
      entity: root?.selectedEntity,
      exportData,
      expands: root?.expands,
      paths,
    });
  }

  async function updatePreview(paths: string[]) {
    const root = editor.getRoot();
    if (root) {
      options.setPreviewData?.(
        JSON.stringify(
          root.extractDataFromReturningObjectByPaths(paths),
          null,
          2
        )
      );
    }
  }

  async function process() {
    const nodes = editor.getNodes();
    for await (const n of nodes) {
      await engine.fetch(n.id);
    }
    engine.reset();
    const paths = await editor.getAllPaths();

    updateParentComponent(paths);
    updatePreview(paths);
  }

  AreaExtensions.selectableNodes(area, AreaExtensions.selector(), {
    accumulating: AreaExtensions.accumulateOnCtrl(),
  });

  const contextMenu = new ContextMenuPlugin<Schemes>({
    items: ContextMenuPresets.classic.setup([
      ['Json', () => new JSONObejctNode({ editor, area }, false, process)],
      ['Array', () => new ArrayNode({ editor, area }, process)],
      ['Output', () => new FinalNode({ editor, area }, process)],
    ]),
  });

  const minimap = new MinimapPlugin<Schemes>({
    boundViewport: true,
    ratio: 0.8,
  });

  area.use(contextMenu);
  render.addPreset(
    // @ts-ignore
    Presets.classic.setup({
      customize: {
        control(data) {
          if ((data.payload as unknown) instanceof QueryDropdownControl) {
            return QueryDropdownElement as any;
          } else if ((data.payload as unknown) instanceof CheckboxControl) {
            return CheckboxElement as any;
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
  render.addPreset(Presets.minimap.setup({ size: 200 }));

  connection.addPreset(ConnectionPresets.classic.setup());

  arrange.addPreset(ArrangePresets.classic.setup());

  editor.use(engine);
  editor.use(area);
  area.use(connection);
  area.use(render);
  area.use(arrange);
  area.use(contextMenu);
  area.use(minimap);

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
  await editor.populate(options, area, engine, process);
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
