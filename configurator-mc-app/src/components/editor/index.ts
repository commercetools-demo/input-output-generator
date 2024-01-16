import { NodeEditor, GetSchemes, ClassicPreset } from 'rete';
import { AreaPlugin, AreaExtensions } from 'rete-area-plugin';
import {
  ConnectionPlugin,
  Presets as ConnectionPresets,
} from 'rete-connection-plugin';
import { ReactPlugin, Presets, ReactArea2D } from 'rete-react-plugin';
import {
  AutoArrangePlugin,
  Presets as ArrangePresets,
} from 'rete-auto-arrange-plugin';
import { DataflowEngine } from 'rete-engine';
import { ContextMenuExtra } from 'rete-context-menu-plugin';
import { Product } from '@commercetools/platform-sdk';
import { ProductNode } from './ProductNode';

export type TProductNode = {
  [Property in keyof Product]: ClassicPreset.Socket;
};

export interface EditorExtraOptions {
  getProductData: (productId: string) => Promise<any>;
}

class Connection<
  A extends Node,
  B extends Node
> extends ClassicPreset.Connection<A, B> {}

type Node = ProductNode;
type ConnProps = Connection<ProductNode, ProductNode>;
//   | Connection<ClientNode, ClientNode>;
type Schemes = GetSchemes<Node, ConnProps>;

type AreaExtra = ReactArea2D<any> | ContextMenuExtra;

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

  function process() {
    engine.reset();

    editor
      .getNodes()
      .filter((n) => n instanceof ProductNode)
      .forEach((n) => engine.fetch(n.id));
  }

  AreaExtensions.selectableNodes(area, AreaExtensions.selector(), {
    accumulating: AreaExtensions.accumulateOnCtrl(),
  });

  render.addPreset(Presets.contextMenu.setup());
  render.addPreset(Presets.classic.setup());

  connection.addPreset(ConnectionPresets.classic.setup());

  arrange.addPreset(ArrangePresets.classic.setup());

  editor.use(engine);
  editor.use(area);
  area.use(connection);
  area.use(render);
  area.use(arrange);

  AreaExtensions.simpleNodesOrder(area);
  AreaExtensions.showInputControl(area);

  editor.addPipe((context) => {
    if (['connectioncreated', 'connectionremoved'].includes(context.type)) {
      process();
    }
    return context;
  });

  const product = new ProductNode(options, process);

  await editor.addNode(product);

  await arrange.layout();
  AreaExtensions.zoomAt(area, editor.getNodes());

  return {
    destroy: () => area.destroy(),
  };
}
