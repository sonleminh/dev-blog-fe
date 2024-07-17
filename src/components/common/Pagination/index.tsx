'use client';

import { useRouter } from 'next/navigation';
import { IArticlesByTagResponse } from '@/interfaces/IArticle';
import { Pagination as BasePagination } from '@mui/material';

const Pagination = ({
  data,
  page,
  type,
}: {
  data: IArticlesByTagResponse;
  page: number;
  type?: string;
}) => {
  const router = useRouter();

  return (
    <BasePagination
      count={Math.ceil((data?.total ?? 0) / 10)}
      onChange={(e, newPage) => {
        useRouter;
        router.push(
          type ? `/tag/${data?.tag?.value}?page=${newPage}` : `?page=${newPage}`
        );
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
