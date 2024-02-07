import { Product } from '@commercetools/platform-sdk';
import { ClassicPreset, GetSchemes } from 'rete';
import { ReactArea2D } from 'rete-react-plugin';
import { ContextMenuExtra } from 'rete-context-menu-plugin';
import { JSONObejctNode } from './nodes/json-object-node';
import { SamplerNode } from './nodes/root-node';
import { SampleDataResult } from '../../hooks/sampler-connection/types';
import { ArrayNode } from './nodes/array-node';
import { FinalNode } from './nodes/final-node';
import { AreaPlugin } from 'rete-area-plugin';
import { DataflowEngine } from 'rete-engine';
import { MinimapExtra } from 'rete-minimap-plugin';
import { NodeEditor } from './editor-node';

export type TProductNode = {
  [Property in keyof Product]: ClassicPreset.Socket;
};

export interface ExportConfigParams {
  entity?: string;
  paths: string[];
  expands?: string[];
  exportData?: {
    nodes: StoredNode[];
    connections: Omit<ConnProps, 'id'>[];
  };
}

export interface EditorExtraOptions {
  getSampleData?: (entity: string, body?: object) => Promise<SampleDataResult>;
  setPreviewData?: (json: string) => void;
  exportConfig?: (config: ExportConfigParams) => void;
  initialData?: { nodes: StoredNode[], connections: Omit<ConnProps, 'id'>[]  };
  area?: AreaPlugin<Schemes, AreaExtra>;
  editor?: NodeEditor;
  engine?: DataflowEngine<Schemes>;
  initial?: any;
  id?: string;
}

export interface StoredNode {
  id?: string;
  label: string;
  path?: string;
  returningObject?: Record<string, string | number | object>;
  width?: number;
  height?: number;
  outputs?: { [key: string]: StoredOutput };
  controls?: { [key: string]: StoredControl };
  inputs?: { [key: string]: StoredInput };
}

interface StoredOutput {
  id: string;
  label: string;
}

interface StoredControl {
  id: string;
  label: string;
}

interface StoredInput {
  id?: string;
  label?: string;
  control: StoredControlEntity;
}

interface StoredControlEntity {
  id?: string;
  _entity?: string;
  label?: string; 
}

export type Node =
  | SamplerNode
  | JSONObejctNode
  | ArrayNode
  | FinalNode;

  export type SourceNodes = SamplerNode | ArrayNode | JSONObejctNode;
  export type TargetNodes = JSONObejctNode | FinalNode | ArrayNode;
export class Connection<
  A extends Node,
  B extends Node
> extends ClassicPreset.Connection<A, B> {}

export type ConnProps =
  | Connection<SamplerNode, JSONObejctNode>
  | Connection<SamplerNode, ArrayNode>
  | Connection<SamplerNode, FinalNode>
  | Connection<JSONObejctNode, FinalNode>
  | Connection<JSONObejctNode, JSONObejctNode>
  | Connection<ArrayNode, JSONObejctNode>
  | Connection<ArrayNode, FinalNode>;

export type Schemes = GetSchemes<Node, ConnProps>;

export type AreaExtra = ReactArea2D<any> | ContextMenuExtra | MinimapExtra;
