'use client';

import { QueryKeys } from '@/components/constants/query-key';
import { getRequest } from '@/utils/fetch-client';
import { useQuery } from '@tanstack/react-query';

const articleUrl = 'article';

export const getArticleListAPI = async () => {
  const result = await getRequest(
    `http://localhost:8080/admin/api/${articleUrl}`
  );
  return result;
};

export const useGetArticleList = () => {
  return useQuery({queryKey:[QueryKeys.ARTICLE], queryFn: getArticleListAPI, 
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchInterval: false,
  });
};