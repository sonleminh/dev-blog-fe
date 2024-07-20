import { QueryKeys } from '@/components/constants/query-key';
import { useQuery } from '@tanstack/react-query';

import { IArticleByIdResponse, IArticlesByTagResponse, IArticlesResponse, IHomeArticlesResponse } from '@/interfaces/IArticle';
import { getRequest } from '@/utils/fetch-client';

const PUBLIC_URL = process.env.NEXT_PUBLIC_HOST;
const SERVER_URL = process.env.NEXT_SERVER_HOST;

const articleUrl = 'article';

type TInitDataRes = {
  tags?: { value: string; label: string }[];
};

// GET INITIAL TAG

const getArticleInitial = async () => {
  const result = await getRequest(`https://dev-blog-be-production.up.railway.app/admin/api/${articleUrl}/get-article-initial`);
  return result as TInitDataRes;
};

export const useGetArticleInitial = () => {
  return useQuery({
    queryKey: [QueryKeys.ARTICLE],
    queryFn: () => getArticleInitial(),
    refetchOnWindowFocus: false,
    refetchInterval: false,
  });
};

// GET ARTICLE LIST

export const getArticleListAPI = async () => {
  const result: {data: IHomeArticlesResponse} = await getRequest(
    `https://dev-blog-site.vervel.app/api`
  );
  return result.data as IHomeArticlesResponse;
};

export const getSearchArticleAPI = async (keyword: string) => {
  const result = await getRequest(
    `https://dev-blog-be-production.up.railway.app/admin/api/${articleUrl}?s=${keyword}`,  {cache: 'no-store', next: {revalidate: 0}}
  );
  return result as IArticlesResponse;
};

export const useSearchArticle = (keyword: string) => {
  return useQuery({queryKey:[QueryKeys.ARTICLE, keyword], queryFn: ()=> getSearchArticleAPI(keyword), 
    enabled: !!keyword,
    refetchOnWindowFocus: false,
    // refetchOnMount: false,
    // refetchInterval: false,
  });
};

export const getArticleByIdAPI = async (id:string) => {
  const result = await getRequest(
    `https://dev-blog-site.vervel.app/blog/${id}/api`, {cache: 'no-store', next: {revalidate: 0}}
  );
  return result as IArticleByIdResponse;
};

export const getArticleByTagAPI = async (tag:string, page: number) => {
  const result: {data: IArticlesByTagResponse} = await getRequest(
    `https://dev-blog-site.vervel.app/tag/${tag}/api?page=${page}`, {cache: 'no-store', next: {revalidate: 0}}
  );
  return result.data as IArticlesByTagResponse;
};

export const getLatestArticleAPI = async (tag:string, page: number) => {
  const result: {data: IArticlesByTagResponse} = await getRequest(
    `https://dev-blog-site.vervel.app/blog/api?page=${page}`, {cache: 'no-store', next: {revalidate: 0}}
  );
  return result.data as IArticlesByTagResponse;
};