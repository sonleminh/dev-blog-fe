import { QueryKeys } from '@/components/constants/query-key';
import { IArticle, IArticlesByTagResponse, IArticlesResponse, IHomeArticlesResponse } from '@/interfaces/IArticle';
import { getRequest } from '@/utils/fetch-client';
import { useQuery } from '@tanstack/react-query';

const articleUrl = 'article';

export const getArticleListAPI = async () => {
  const result: {data: IHomeArticlesResponse} = await getRequest(
    `http://localhost:3000/api`, {cache: 'no-store', next: {revalidate: 0}}
  );
  return result.data as IHomeArticlesResponse;
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

export const getArticleByTagAPI = async (tag:string, page: number) => {
  const result: {data: IArticlesByTagResponse} = await getRequest(
    `http://localhost:3000/tag/${tag}/api?page=${page}`, {cache: 'no-store', next: {revalidate: 0}}
  );
  return result.data as IArticlesByTagResponse;
};

// export const useGetArticleList = () => {
//   return useQuery({queryKey:[QueryKeys.ARTICLE], queryFn: getArticleListAPI, 
//     refetchOnWindowFocus: false,
//     refetchOnMount: false,
//     refetchInterval: false,
//   });
// };