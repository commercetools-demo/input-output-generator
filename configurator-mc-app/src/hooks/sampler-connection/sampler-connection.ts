import { useApplicationContext } from '@commercetools-frontend/application-shell-connectors';
import { SampleDataResult } from './types';
import {
  useAsyncDispatch,
  actions as sdkActions,
  TSdkAction,
} from '@commercetools-frontend/sdk';
import { MC_API_PROXY_TARGETS } from '@commercetools-frontend/constants';

function buildUrlWithParams(
  baseUrl: string,
  options: Record<string, string | string[]>
) {
  const queryParams = new URLSearchParams();
  if (!options) {
    return baseUrl;
  }

  for (const [key, value] of Object.entries(options)) {
    if (Array.isArray(value)) {
      value.forEach((item) => queryParams.append(key, item));
    } else {
      queryParams.append(key, value);
    }
  }

  return `${baseUrl}?${queryParams}`;
}

export const useSampler = () => {
  const dispatch = useAsyncDispatch<TSdkAction, SampleDataResult>();

  const project = useApplicationContext((context) => context.project);

  const getData = async (
    entity: string,
    body?: any
  ): Promise<SampleDataResult> => {
    console.log('getData', entity, body);

    return dispatch(
      sdkActions.get({
        uri: buildUrlWithParams(`/${project?.key}/${entity}`, body),
        mcApiProxyTarget: MC_API_PROXY_TARGETS.COMMERCETOOLS_PLATFORM,
      })
    );
  };

  return {
    getData,
  };
};
