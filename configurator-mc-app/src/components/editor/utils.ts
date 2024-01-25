import { NodeEditor } from 'rete';
import { ArrayNode } from './editor-nodes/array-node';
import { SamplerNode } from './editor-nodes/sample-node';
import { ConnProps, Schemes } from './types';
import { FinalNode } from './editor-nodes/final-node';

export const extractDataByPaths = (json: any, paths: string[]) => {
  const result = {};

  function extract(
    currentPart: any,
    currentResult: any,
    remainingPath: string[]
  ) {
    if (remainingPath.length === 0) {
      return;
    }

    let nextKey = remainingPath[0];
    let nextPath = remainingPath.slice(1);

    if (Array.isArray(currentPart)) {
      currentPart.forEach((item, index) => {
        if (!currentResult[index]) currentResult[index] = {};
        extract(item, currentResult[index], remainingPath);
      });
    } else if (typeof currentPart[nextKey] !== 'undefined') {
      if (nextPath.length === 0) {
        currentResult[nextKey] = currentPart[nextKey];
      } else {
        currentResult[nextKey] =
          currentResult[nextKey] ||
          (Array.isArray(currentPart[nextKey]) ? [] : {});
        extract(currentPart[nextKey], currentResult[nextKey], nextPath);
      }
    }
  }

  paths.forEach((path) => {
    const parts = path.split('.');
    extract(json, result, parts);
  });

  return result;
};
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

const getRootPath = (node: any, editor: NodeEditor<Schemes>): string => {
  const allConnections = editor.getConnections();
  const connectionsToCurrentNode = allConnections.filter(
    (c) => c.target === node.id
  );

  let currentPath = node.path + '.';

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

  return getRootPath(parent, editor) + currentPath;
};

export const getAllPaths = (
  n: FinalNode,
  editor: NodeEditor<Schemes>
): string[] => {
  const paths: string[] = [];
  const allConnections = editor.getConnections();

  allConnections
    .filter((c) => c.target === n.id)
    .forEach((c) => {
      const parent = editor.getNode(c.source);
      const paretnPath = getRootPath(parent, editor);

      paths.push(paretnPath + c.sourceOutput);
    });
  return paths;
};

export const getFullPath = (
  id: string,
  editor: NodeEditor<Schemes>
): string => {
  const allConnections = editor.getConnections();
  return getParentPath(editor, editor.getNode(id), allConnections);
};

export const getFullPathExceptRoot = (
  id: string,
  editor: NodeEditor<Schemes>
): string => {
  const fullPath = getFullPath(id, editor);
  const list = fullPath.split('.');
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
