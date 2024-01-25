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
  
      const nextKey = remainingPath[0];
      const nextPath = remainingPath.slice(1);
      
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