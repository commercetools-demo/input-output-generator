import { NodeEditor } from 'rete';
import { ArrayNode } from './nodes/array-node';
import { SamplerNode } from './nodes/sample-node';
import { ConnProps, Schemes } from './types';

export const getParentPath = (
  editor: NodeEditor<Schemes>,
  node: any,
  allConnections: ConnProps[]
): string => {
  const connectionsToCurrentNode = allConnections.filter(
    (c) => c.target === node.id
  );
  const connectionsFromCurrentNode = allConnections.filter(
    (c) => c.source === node.id
  );

  const currentDot = connectionsFromCurrentNode.length === 0 ? '' : '.';

  let currentPath = node.path + currentDot;

  if (node instanceof SamplerNode) {
    return '';
  }

  if (node instanceof ArrayNode) {
    currentPath = '';
  }

  if (connectionsToCurrentNode.length === 0) {
    return currentPath;
  }
  const parent = editor.getNode(connectionsToCurrentNode[0].source);
  if (parent instanceof ArrayNode) {
    return (
      getParentPath(editor, parent, allConnections) +
      node.path +
      '[*]' +
      currentDot
    );
  }

  return getParentPath(editor, parent, allConnections) + currentPath;
};

export const getFullPath = (
  id: string,
  editor: NodeEditor<Schemes>
): string => {
  const allConnections = editor.getConnections();
  const path = getParentPath(editor, editor.getNode(id), allConnections);
  const list = path.split('.');
  list.splice(0, 1);

  return list.join('.');
};

export const getSamplerRoot = (
  editor: NodeEditor<Schemes>
): SamplerNode | undefined => {
  const allNodes = editor.getNodes();
  const allConnections = editor.getConnections();
  return allNodes.filter((node) => {
    return (
      allConnections.find((c) => c.source === node.id) &&
      node instanceof SamplerNode
    );
  })?.[0] as SamplerNode;
};
