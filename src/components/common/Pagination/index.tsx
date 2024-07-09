'use client';

import React, { useEffect, useState } from 'react';
import { Pagination as BasePagination } from '@mui/material';
import { IQuery } from '@/interfaces/IQuery';
import { getArticleByTagAPI } from '@/services/article';
import { useRouter } from 'next/navigation';

const Pagination = ({ data, page }: any) => {
  const router = useRouter();
  const [datac, setDatac] = useState<any>();
  const [query, setQuery] = useState<IQuery>({
    limit: 10,
    page: 1,
  });

  useEffect(() => {
    async function getData() {
      const data = await getArticleByTagAPI('database');

      setDatac(data);
    }
    getData();
  }, []);

  return (
    <BasePagination
      count={Math.ceil((data?.total ?? 0) / 1)}
      page={query.page ?? 0}
      onChange={(e, newPage) => {
        console.log(newPage);
        useRouter;
        router.push(`/tag/backend?page=${newPage}`);
      }}
      defaultPage={query.page ?? 0}
      showFirstButton
      showLastButton
    />
  );
};

export default Pagination;
