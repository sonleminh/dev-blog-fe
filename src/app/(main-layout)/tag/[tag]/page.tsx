// 'use client';

import Sidebar from '@/components/_pages/trang-chu/sidebar';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import SkeletonImage from '@/components/common/SkeletonImage';
import LayoutContainer from '@/components/sharing/layout-container';
import { getArticleByTagAPI } from '@/services/article';
import { Box, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { truncateTextByLine } from '@/utils/css-helper.util';
import moment from 'moment';
import { IQuery } from '@/interfaces/IQuery';
import Test from './components';
import Pagination from '@/components/common/Pagination';

const ArticleByTag = async ({
  params,
  searchParams,
}: {
  params: { tag: string };
  searchParams: { [page: string]: string | string[] | undefined };
}) => {
  // function ArticleByTag() {
  // const [query, setQuery] = useState<IQuery>({
  //   limit: 10,
  //   page: 1,
  // });
  console.log('params:', searchParams);

  const handleChangeQuery = (object: Partial<IQuery>) => {
    // setQuery((prev) => ({ ...prev, ...object }));
    console.log(object);
  };

  const data = await getArticleByTagAPI(params.tag);
  console.log(data);
  // const breadcrumbsOptions = [
  //   { link: '/', label: 'HOME' },
  //   { link: `/tag/${data.tag.value}}`, label: data.tag.label },
  // ];

  return (
    <LayoutContainer>
      <Grid container spacing={4}>
        <Grid item xs={8}>
          <Box sx={{ mb: 3 }}>
            {/* <Breadcrumbs options={breadcrumbsOptions} /> */}
            <Pagination data={data} page={searchParams.page} />
          </Box>
          {/* <Test data={data} /> */}
          {/* <Box>
            <Grid container spacing={2}>
              {data?.articleList?.map((item) => (
                <Grid key={item?._id} item xs={12}>
                  <Grid container spacing={2}>
                    <Grid item xs={4}>
                      <Box
                        sx={{
                          position: 'relative',
                          width: '100%',
                          height: 150,
                          borderRadius: '8px',
                          overflow: 'hidden',
                          '& img': {
                            objectFit: 'cover',
                          },
                        }}>
                        <SkeletonImage
                          src={item?.thumbnail_image}
                          alt={item?.title}
                          fill
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography
                        sx={{
                          mb: 0.5,
                          fontSize: 18,
                          fontWeight: 500,
                          ...truncateTextByLine(2),
                        }}>
                        {item?.title}
                      </Typography>
                      <Typography sx={{ mb: 0.5, fontSize: 11 }}>
                        {moment(item?.createdAt).format('MMMM D, YYYY')}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: 13,
                          color: '#767676',
                          ...truncateTextByLine(2),
                        }}>
                        {item?.summary}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Box> */}
        </Grid>
        <Grid item xs={4}>
          <Sidebar />
        </Grid>
      </Grid>
    </LayoutContainer>
  );
};

export default ArticleByTag;
