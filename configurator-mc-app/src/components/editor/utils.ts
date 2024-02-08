export const extractFromPath = (
  currentPart: Record<string, unknown>,
  currentResult: Record<string, unknown>,
  remainingPath: string[]
) => {
  if (remainingPath.length === 0) {
    return;
  }

  let nextKey = remainingPath[0];
  let nextPath = remainingPath.slice(1);

  if (Array.isArray(currentPart)) {
    currentPart.forEach((item, index) => {
      if (!currentResult[index]) currentResult[index] = {};
      extractFromPath(
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
      extractFromPath(
        currentPart[nextKey] as Record<string, unknown>,
        currentResult[nextKey] as Record<string, unknown>,
        nextPath
      );
    }
  }
};

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
