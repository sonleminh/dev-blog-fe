'use client';

import { IArticleListResponse } from '@/interfaces/IArticle';
import { getArticleListAPI } from '@/services/article';
import { ReactNode, createContext, useContext } from 'react';

interface IGetArticleContext {
  data: IArticleListResponse;
}

const GetArticleContext = createContext<IGetArticleContext | undefined>(
  undefined
);

export const GetArticleProvider = async ({
  children,
}: {
  children: ReactNode;
}) => {
  const data = await getArticleListAPI();

  return (
    <GetArticleContext.Provider value={{ data }}>
      {children}
    </GetArticleContext.Provider>
  );
};

export const useGetArticleContext = () => useContext(GetArticleContext);
