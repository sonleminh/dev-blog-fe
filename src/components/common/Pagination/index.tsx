'use client';

import React, { useEffect, useState } from 'react';
import { Pagination as BasePagination } from '@mui/material';
import { IQuery } from '@/interfaces/IQuery';
import { getArticleByTagAPI } from '@/services/article';
import { useRouter } from 'next/navigation';
import { IArticlesByTagResponse } from '@/interfaces/IArticle';

const Pagination = ({
  data,
  page,
}: {
  data: IArticlesByTagResponse;
  page: number;
}) => {
  const router = useRouter();
  // const [datac, setDatac] = useState<any>();
  // const [query, setQuery] = useState<IQuery>({
  //   limit: 10,
  //   page: 1,
  // });

  // useEffect(() => {
  //   async function getData() {
  //     const data = await getArticleByTagAPI('database');

  //     setDatac(data);
  //   }
  //   getData();
  // }, []);

  return (
    <BasePagination
      count={Math.ceil((data?.total ?? 0) / 2)}
      onChange={(e, newPage) => {
        console.log(newPage);
        useRouter;
        router.push(`/tag/${data?.tag?.value}?page=${newPage}`);
      }}
      defaultPage={1}
      showFirstButton
      showLastButton
      sx={{
        '.MuiPagination-ul': {
          justifyContent: 'center',
        },
      }}
    />
  );
};

export default Pagination;
