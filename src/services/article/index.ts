import { QueryKeys } from '@/components/constants/query-key';
import { IArticleListResponse } from '@/interfaces/IArticle';
import { getRequest } from '@/utils/fetch-client';
import { useQuery } from '@tanstack/react-query';

const articleUrl = 'article';

export const getArticleListAPI = async () => {
  const result = await getRequest(
    `http://localhost:3000/api`, 
    // {
    //   headers: {
    //     'Cache-Control': 'no-store',
    //     'Pragma': 'no-cache'
    //   }
    // }
  );
  return result as IArticleListResponse;
};

export const useGetArticleList = () => {
  return useQuery({queryKey:[QueryKeys.ARTICLE], queryFn: getArticleListAPI, 
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchInterval: false,
  });
};