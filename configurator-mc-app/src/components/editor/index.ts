import { NodeEditor } from 'rete';
import { AreaPlugin, AreaExtensions } from 'rete-area-plugin';
import {
  ConnectionPlugin,
  Presets as ConnectionPresets,
} from 'rete-connection-plugin';
import { ReactPlugin, Presets } from 'rete-react-plugin';
import {
  AutoArrangePlugin,
  Presets as ArrangePresets,
} from 'rete-auto-arrange-plugin';
import { DataflowEngine } from 'rete-engine';
import {
  ContextMenuExtra,
  ContextMenuPlugin,
  Presets as ContextMenuPresets,
} from 'rete-context-menu-plugin';
import { ProductNode } from './ProductNode';
import { EditorExtraOptions, Schemes, AreaExtra, Connection } from './types';
import { JSONObejctNode } from './JSONObejctNode';
import { QueryNode } from './QueryNode';
import { ArrayNode } from './ArrayNode';
import { FinalNode } from './FinalNode';

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

    editor
      .getNodes()
      .forEach((n) => engine.fetch(n.id));

    const all = await Promise.all(
      editor
        .getNodes()
        .filter((n) => n instanceof FinalNode)
        .map((n) => engine.fetch(n.id))
    );
    console.log(all);
  }

  AreaExtensions.selectableNodes(area, AreaExtensions.selector(), {
    accumulating: AreaExtensions.accumulateOnCtrl(),
  });

  const contextMenu = new ContextMenuPlugin<Schemes>({
    items: ContextMenuPresets.classic.setup([
      ['JSON', () => new JSONObejctNode(undefined, process)],
      ['Array', () => new ArrayNode(undefined, process)],
      ['Final', () => new FinalNode(undefined, process)],
      ['Product', () => new ProductNode(undefined, process)],
    ]),
  });

  area.use(contextMenu);
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
    if (['connectioncreated', 'connectionremoved'].includes(context.type)) {
      process();
    }
    return context;
  });

  const query = new QueryNode({ ...options, initial: 'product' }, process);
  const arrayN = new ArrayNode(undefined, process);
  const json = new JSONObejctNode(undefined, process);

  await editor.addNode(query);
  await editor.addNode(arrayN);
  await editor.addNode(json);

  await arrange.layout();
  AreaExtensions.zoomAt(area, editor.getNodes());

  return {
    destroy: () => area.destroy(),
  };
}
