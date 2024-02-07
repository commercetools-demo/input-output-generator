import { NodeEditor } from 'rete';
import { ArrayNode } from './nodes/array-node';
import { SamplerNode } from './nodes/root-node';
import { ConnProps, Node, Schemes, StoredNode } from './types';
import { FinalNode } from './nodes/final-node';

export const extractDataByPaths = (
  json: Record<string, unknown>,
  paths: string[]
) => {
  const result = {};

  function extract(
    currentPart: Record<string, unknown>,
    currentResult: Record<string, unknown>,
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
        extract(
          item,
          currentResult[index] as Record<string, unknown>,
          remainingPath
        );
      });
    } else if (typeof currentPart[nextKey] !== 'undefined') {
      if (nextPath.length === 0) {
        currentResult[nextKey] = currentPart[nextKey];
      } else {
        currentResult[nextKey] =
          currentResult[nextKey] ||
          (Array.isArray(currentPart[nextKey]) ? [] : {});
        extract(
          currentPart[nextKey] as Record<string, unknown>,
          currentResult[nextKey] as Record<string, unknown>,
          nextPath
        );
      }
    }
  }

  paths.forEach((path) => {
    const parts = path.split('.');
    extract(json, result, parts);
  });

  return result;
};

const getRootPath = (node: Node, editor: NodeEditor<Schemes>): string => {
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

export const getSamplerRoot = (
  editor: NodeEditor<Schemes>
): SamplerNode | undefined => {
  const allNodes = editor.getNodes();
  return allNodes.filter((node) => {
    return node instanceof SamplerNode;
  })?.[0] as SamplerNode;
};
export function getExportData(nodes: Node[], connections: ConnProps[]) {
  const exportData: {
    nodes: StoredNode[];
    connections: Omit<ConnProps, 'id'>[];
  } = {
    nodes: [],
    connections: [],
  };

  exportData.nodes = nodes.map((node) => {
    return node.getExportData();
  });

  for (const connection of connections) {
    exportData.connections.push({
      source: connection.source,
      sourceOutput: connection.sourceOutput,
      target: connection.target,
      targetInput: connection.targetInput,
    });
  }
  return exportData;
}
export async function getPaths(editor: NodeEditor<Schemes>) {
  const allPaths = await Promise.all(
    editor
      .getNodes()
      .filter((n) => n instanceof FinalNode)
      .map((n) => getAllPaths(n as FinalNode, editor))
  );
  const paths = allPaths.reduce((a, b) => [...a, ...b], []);
  return paths;
}

export async function retryOperation(
  operation: () => Promise<unknown>,
  maxRetries = 10,
  delay = 500
) {
  return new Promise((resolve, reject) => {
    let attempts = 0;

    const execute = () => {
      operation()
        .then(resolve)
        .catch(() => {
          if (attempts < maxRetries) {
            attempts++;
            console.log(`Attempt ${attempts}: Retrying in ${delay}ms`);
            setTimeout(execute, delay);
          } else {
            reject(`Failed after ${attempts} retries.`);
          }
        });
    };

    execute();
  });
}
