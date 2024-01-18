import { Product } from '@commercetools/platform-sdk';
import { ClassicPreset, GetSchemes } from 'rete';
import { ProductNode } from './Nodes/ProductNode';
import { ReactArea2D } from 'rete-react-plugin';
import { ContextMenuExtra } from 'rete-context-menu-plugin';
import { JSONObejctNode } from './Nodes/JSONObejctNode';
import { QueryNode } from './Nodes/QueryNode';
import { SampleDataResult } from '../../hooks/sampler-connection/types';
import { ArrayNode } from './Nodes/ArrayNode';
import { FinalNode } from './Nodes/FinalNode';
export type TProductNode = {
  [Property in keyof Product]: ClassicPreset.Socket;
};

export interface EditorExtraOptions {
  // TODO: fix type
  // getProductData: (productId: string) => Promise<any>;
  getSampleData: (entity: string) => Promise<SampleDataResult>;
  initial?: any;
}

export type Node = QueryNode | ProductNode | JSONObejctNode | ArrayNode | FinalNode;
export class Connection<
  A extends Node,
  B extends Node
> extends ClassicPreset.Connection<A, B> {}

export type ConnProps =
  | Connection<QueryNode, JSONObejctNode>
  | Connection<QueryNode, ProductNode>
  | Connection<QueryNode, ArrayNode>
  | Connection<ProductNode, ArrayNode>
  | Connection<JSONObejctNode, ArrayNode>
  | Connection<ProductNode, JSONObejctNode>
  | Connection<QueryNode, FinalNode>
  | Connection<ProductNode, FinalNode>
  | Connection<JSONObejctNode, FinalNode>
  | Connection<ArrayNode, FinalNode>;

export type Schemes = GetSchemes<Node, ConnProps>;

export type AreaExtra = ReactArea2D<any> | ContextMenuExtra;
