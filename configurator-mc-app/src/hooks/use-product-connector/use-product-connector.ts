import {
  useMcQuery,
} from '@commercetools-frontend/application-shell';
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
  } = useMcQuery<any>(FetchAssetsQuery, {
    variables: {
      where,
    },
    context: {
      target: GRAPHQL_TARGETS.COMMERCETOOLS_PLATFORM,
    },
  });


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

  useEffect(() => {
    if (productId) {
      refetch();
    }
  }, [productId])

  return {
    product: result,
    version,
    error: fetchError,
    loading: fetchLoading,
  };
};
