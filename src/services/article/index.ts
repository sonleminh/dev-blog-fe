import { QueryKeys } from '@/components/constants/query-key';
import { useQuery } from '@tanstack/react-query';

import { BASE_API_URL, SERVER_API_URL } from '@/constants/env';
import { IArticleByIdResponse, IArticlesByTagResponse, IArticlesResponse, IHomeArticlesResponse } from '@/interfaces/IArticle';
import { getRequest } from '@/utils/fetch-client';

const articleUrl = 'article';

type TInitDataRes = {
  tags?: { value: string; label: string }[];
};

// GET INITIAL TAG

const getArticleInitial = async () => {
  try {
    const result = await getRequest(`${BASE_API_URL}/${articleUrl}/get-article-initial`);
  return result as TInitDataRes;
  } catch (error) {
    throw new Error('Failed to fetch initial article list API') 
  }
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
  try {
    const result: {data: IHomeArticlesResponse} = await getRequest(
      `${SERVER_API_URL}/api`
    );
    return result.data as IHomeArticlesResponse;
  } catch (error) {
    console.error('Error fetching article list API:', error); 
   throw new Error('Failed to fetch article list API') 
  }
};

export const getSearchArticleAPI = async (keyword: string) => {
  try {
    const result = await getRequest(
      `${BASE_API_URL}/${articleUrl}?s=${keyword}`
    );
    return result as IArticlesResponse;
  } catch (error) {
    throw new Error('Failed to fetch search article list API') 
  }
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
  try {
    const result = await getRequest(
      `${SERVER_API_URL}/blog/${id}/api`
    );
  return result as IArticleByIdResponse;
} catch (error) {
   throw new Error('Failed to fetch article list by ID API') 
  }
};

export const getArticleByTagAPI = async (tag:string, page: number) => {
  
  try {
    const result: {data: IArticlesByTagResponse} = await getRequest(
      `${SERVER_API_URL}/tag/${tag}/api?page=${page}`,
    );
  return result.data as IArticlesByTagResponse;
} catch (error) {
  console.error('Error fetching article list by tag API:', error); 
   throw new Error('Failed to fetch article list by tag API') 
  }
};

export const getLatestArticleAPI = async (page: number) => {
  try {
    const result: {data: IArticlesByTagResponse} = await getRequest(
      `${SERVER_API_URL}/blog/api?page=${page}`
    );
    return result.data as IArticlesByTagResponse;
  } catch (error) {
   throw new Error('Failed to fetch latest article list API') 
  }
  
};