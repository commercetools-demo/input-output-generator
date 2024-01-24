import { useApplicationContext } from '@commercetools-frontend/application-shell-connectors';
import { SampleDataResult } from './types';

export const useSampler = () => {
  const { samplerURL } = useApplicationContext<{ samplerURL: string }>(
    (context: any) => context.environment
  );

  const getData = async (
    entity: string,
    body?: any
  ): Promise<SampleDataResult> => {
    const samplerURLWithSlash = samplerURL.endsWith('/')
      ? samplerURL
      : `${samplerURL}/`;
    const options: RequestInit = {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': '',
        'Content-Type': 'application/json',
      },
    };
    if (body) {
      options.body = JSON.stringify(body);
    }
    const response = await fetch(`${samplerURLWithSlash}${entity}`, options);
    const result = await response.json();
    return result.body;
  };

  return {
    getData,
  };
};
