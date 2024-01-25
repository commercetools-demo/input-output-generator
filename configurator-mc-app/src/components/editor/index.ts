import { NodeEditor } from 'rete';
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
import { SamplerNode } from './nodes/sample-node';
import { AreaExtra, EditorExtraOptions, Schemes } from './types';
import { MinimapPlugin } from 'rete-minimap-plugin';
import { extractDataByPaths, getAllPaths, getSamplerRoot } from './utils';

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

  async function process() {
    engine.reset();

    editor.getNodes().forEach((n) => engine.fetch(n.id));

    try {
      const all = await Promise.all(
        editor
          .getNodes()
          .filter((n) => n instanceof FinalNode)
          .map((n) => getAllPaths(n, editor))
      );
      const root = getSamplerRoot(editor);
      if (root) {
        options.setPreviewData?.(
          JSON.stringify(
            extractDataByPaths(
              root!.returningObject,
              all.reduce((a, b) => [...a, ...b], [])
            ),
            null,
            2
          )
        );
      }
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

  const query = new SamplerNode(
    { ...options, initial: 'products', area, editor, engine },
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
