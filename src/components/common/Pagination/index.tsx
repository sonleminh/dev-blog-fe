'use client';

import { IArticlesByTagResponse } from '@/interfaces/IArticle';
import { Pagination as BasePagination } from '@mui/material';
import { useRouter } from 'next/navigation';

const Pagination = ({
  data,
  page,
}: {
  data: IArticlesByTagResponse;
  page: number;
}) => {
  const router = useRouter();

  return (
    <BasePagination
      count={Math.ceil((data?.total ?? 0) / 2)}
      onChange={(e, newPage) => {
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
