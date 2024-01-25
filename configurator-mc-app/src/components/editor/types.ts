import { Product } from '@commercetools/platform-sdk';
import { ClassicPreset, GetSchemes, NodeEditor } from 'rete';
import { ProductNode } from './editor-nodes/ProductNode';
import { ReactArea2D } from 'rete-react-plugin';
import { ContextMenuExtra } from 'rete-context-menu-plugin';
import { JSONObejctNode } from './editor-nodes/json-object-node';
import { SamplerNode } from './editor-nodes/sample-node';
import { SampleDataResult } from '../../hooks/sampler-connection/types';
import { ArrayNode } from './editor-nodes/array-node';
import { FinalNode } from './editor-nodes/final-node';
import { AreaPlugin } from 'rete-area-plugin';
import { DataflowEngine } from 'rete-engine';
import { MinimapExtra } from 'rete-minimap-plugin';

export type TProductNode = {
  [Property in keyof Product]: ClassicPreset.Socket;
};

export interface EditorExtraOptions {
  getSampleData?: (entity: string, body?: any) => Promise<SampleDataResult>;
  setPreviewData?: (json: string) => void;
  setPaths?: (paths: string[]) => void;
  area?: AreaPlugin<Schemes, AreaExtra>;
  editor?: NodeEditor<Schemes>;
  engine?: DataflowEngine<Schemes>;
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

export type AreaExtra = ReactArea2D<any> | ContextMenuExtra | MinimapExtra;
