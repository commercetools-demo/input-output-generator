import { createApiRoot } from '../client/create.client';

export const getProducts = async (body: any) => {
  return createApiRoot()
    .products()
    .get({
      queryArgs: body,
    })
    .execute();
};

export const getOrders = async (body: any) => {
  return createApiRoot()
    .orders()
    .get({
      queryArgs: body,
    })
    .execute();
};

export const getPayments = async (body: any) => {
  return createApiRoot()
    .payments()
    .get({
      queryArgs: body,
    })
    .execute();
};
