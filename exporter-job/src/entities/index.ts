import { createApiRoot } from '../client/create.client';
import { Config } from '../types/job.types';
import { extractDataByPaths } from '../utils/extractor.utils';
import { webhook } from '../utils/webhook.utils';

export const exportProducts = async (config: Config): Promise<any> => {
  const response = await createApiRoot()
    .products()
    .get({
      queryArgs: {
        expand: config.expands,
        limit: 500,
      },
    })
    .execute();
  const data = extractDataByPaths(response.body, config.paths);
  return webhook(data);
};

export const exportOrders = async (config: Config): Promise<any> => {
  const response = await createApiRoot()
    .orders()
    .get({
      queryArgs: {
        expand: config.expands,
        limit: 500,
      },
    })
    .execute();
  const data = extractDataByPaths(response.body, config.paths);

  return webhook(data);
};

export const exportPayments = async (config: Config): Promise<any> => {
  const response = await createApiRoot()
    .payments()
    .get({
      queryArgs: {
        expand: config.expands,
        limit: 500,
      },
    })
    .execute();
  const data = extractDataByPaths(response.body, config.paths);
  return webhook(data);
};
