import { createApiRoot } from '../client/create.client';

export const getProducts = async (body: any) => {
  return createApiRoot()
    .products()
    .get({
      queryArgs: {
        expand: body.expands,
        limit: 10,
      },
    })
    .execute();
};

export const getOrders = async (body: any) => {
  return createApiRoot()
    .orders()
    .get({
      queryArgs: {
        expand: body.expands,
        limit: 10,
      },
    })
    .execute();
};

export const getPayments = async (body: any) => {
  return createApiRoot()
    .payments()
    .get({
      queryArgs: {
        expand: body.expands,
        limit: 10,
      },
    })
    .execute();
};
