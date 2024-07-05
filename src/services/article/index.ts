import { QueryKeys } from '@/components/constants/query-key';
import { IArticle, IArticleListResponse } from '@/interfaces/IArticle';
import { getRequest } from '@/utils/fetch-client';
import { useQuery } from '@tanstack/react-query';

const articleUrl = 'article';

export const getArticleListAPI = async () => {
  const result = await getRequest(
    `http://localhost:3000/api`, {cache: 'no-store', next: {revalidate: 0}}
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

export const getArticleByIdAPI = async (id:string) => {
  const result: {data: IArticle} = await getRequest(
    `http://localhost:3000/blog/${id}/api`, {cache: 'no-store', next: {revalidate: 0}}
  );
  return result.data as IArticle;
};

// export const useGetArticleList = () => {
//   return useQuery({queryKey:[QueryKeys.ARTICLE], queryFn: getArticleListAPI, 
//     refetchOnWindowFocus: false,
//     refetchOnMount: false,
//     refetchInterval: false,
//   });
// };