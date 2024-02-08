import {
  ProductPagedQueryResponse,
  OrderPagedQueryResponse,
  PaymentPagedQueryResponse,
} from '@commercetools/platform-sdk';

export type SampleDataResult = (
  | ProductPagedQueryResponse
  | OrderPagedQueryResponse
  | PaymentPagedQueryResponse
) &
  Record<string, any>;
