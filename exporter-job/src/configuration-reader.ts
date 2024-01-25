import { createApiRoot } from './client/create.client';
import { Config } from './types/job.types';

export const reader = async (): Promise<Config> => {
  const response = await createApiRoot()
    .customObjects()
    .withContainerAndKey({
      container: process.env.STORAGE_CONTAINER || '',
      key: process.env.STORAGE_KEY || '',
    })
    .get()
    .execute();
  return response.body.value;
};
