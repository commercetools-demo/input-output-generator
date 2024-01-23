import { Product } from '@commercetools/platform-sdk';
import { ClassicPreset, GetSchemes, NodeEditor } from 'rete';
import { ProductNode } from './nodes/ProductNode';
import { ReactArea2D } from 'rete-react-plugin';
import { ContextMenuExtra } from 'rete-context-menu-plugin';
import { JSONObejctNode } from './nodes/JSONObejctNode';
import { SamplerNode } from './Nodes/SamplerNode';
import { SampleDataResult } from '../../hooks/sampler-connection/types';
import { ArrayNode } from './nodes/ArrayNode';
import { FinalNode } from './nodes/FinalNode';
import { AreaPlugin } from 'rete-area-plugin';
export type TProductNode = {
  [Property in keyof Product]: ClassicPreset.Socket;
};

export interface EditorExtraOptions {
  // TODO: fix type
  // getProductData: (productId: string) => Promise<any>;
  getSampleData?: (entity: string) => Promise<SampleDataResult>;
  area?: AreaPlugin<Schemes, AreaExtra>;
  editor?: NodeEditor<Schemes>;
  initial?: any;
}

export type Node =
  | SamplerNode
  | ProductNode
  | JSONObejctNode
  | ArrayNode
  | FinalNode;
export class Connection<
  A extends Node,
  B extends Node
> extends ClassicPreset.Connection<A, B> {}

export type ConnProps =
  | Connection<SamplerNode, JSONObejctNode>
  | Connection<SamplerNode, ProductNode>
  | Connection<SamplerNode, ArrayNode>
  | Connection<ProductNode, ArrayNode>
  | Connection<ProductNode, JSONObejctNode>
  | Connection<SamplerNode, FinalNode>
  | Connection<ProductNode, FinalNode>
  | Connection<JSONObejctNode, FinalNode>
  | Connection<JSONObejctNode, JSONObejctNode>
  | Connection<ArrayNode, JSONObejctNode>
  | Connection<ArrayNode, FinalNode>;

export type Schemes = GetSchemes<Node, ConnProps>;

export type AreaExtra = ReactArea2D<any> | ContextMenuExtra;
