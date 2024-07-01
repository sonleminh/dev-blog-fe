import { IArticleListResponse } from '@/interfaces/IArticle';
import { getArticleListAPI, useGetArticleList } from '@/services/article';
import { getRequest } from '@/utils/fetch-client';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

export default async function UserPage() {
  //   const result = await getRequest(`http://localhost:3000/api`);
  //   const result = await getArticleListAPI();
  //   const articles = await result.json();
  //   console.log('rs:', result);
  //   console.log('rs:', articleData);
  return <div>page</div>;
}
