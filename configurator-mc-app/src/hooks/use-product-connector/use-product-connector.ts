import { useMcQuery } from '@commercetools-frontend/application-shell';
import { GRAPHQL_TARGETS } from '@commercetools-frontend/constants';
import FetchAssetsQuery from './fetch-product.ctp.graphql';
import { useEffect, useMemo } from 'react';

export const useProduct = ({ productId }: { productId: string }) => {
  const where = `id="${productId}"`;
  const {
    refetch,
    data,
    error: fetchError,
    loading: fetchLoading,
    // TODO: define a type for this. try to see if you can use  CT GraphQL schema
  } = useMcQuery<any>(FetchAssetsQuery, {
    variables: {
      where,
    },
    context: {
      target: GRAPHQL_TARGETS.COMMERCETOOLS_PLATFORM,
    },
  });

  const getProduct = async () => {
    const { data } = await refetch();
    // TODO: remove all __typename
    return data?.products?.results?.[0];
  };

  const version = useMemo(() => {
    if (!fetchLoading && !!data?.products?.results?.[0]) {
      return parseInt(data.products.results[0].version, 10);
    }
    return null;
  }, [data, fetchLoading]);

  const result = useMemo(() => {
    if (!fetchLoading && !!data?.products?.results?.[0]) {
      return data.products.results[0];
    }
    return null;
  }, [fetchLoading, data]);

  return {
    product: result,
    getProduct,
    version,
    error: fetchError,
    loading: fetchLoading,
  };
};
