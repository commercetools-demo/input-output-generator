import { Product } from '@commercetools/platform-sdk';
import { ClassicPreset, GetSchemes } from 'rete';
import { ProductNode } from './ProductNode';
import { ReactArea2D } from 'rete-react-plugin';
import { ContextMenuExtra } from 'rete-context-menu-plugin';
import { JSONObejctNode } from './JSONObejctNode';
export type TProductNode = {
  [Property in keyof Product]: ClassicPreset.Socket;
};

export interface EditorExtraOptions {
  // TODO: fix type
  getProductData: (productId: string) => Promise<any>;
}

export type Node = ProductNode | JSONObejctNode;
export class Connection<
  A extends Node,
  B extends Node
> extends ClassicPreset.Connection<A, B> {}

export type ConnProps = Connection<ProductNode, JSONObejctNode>;

// export type ConnProps = Connection<Node, Node>;
//   | Connection<ClientNode, ClientNode>;
export type Schemes = GetSchemes<Node, ConnProps>;

export type AreaExtra = ReactArea2D<any> | ContextMenuExtra;
