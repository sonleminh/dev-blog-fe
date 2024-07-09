import { IArticlesByTagResponse } from '@/interfaces/IArticle';
import React from 'react';

const List = ({ data }: { data: IArticlesByTagResponse }) => {
  console.log(data);
  return <div>List</div>;
};

export default List;
