// 'use client';

import Banner from '@/components/_pages/trang-chu/banner';

import Latest from '@/components/_pages/trang-chu/latest';
import Programming from '@/components/_pages/trang-chu/programming';
import LayoutContainer from '@/components/sharing/layout-container';
import { Box, Grid } from '@mui/material';
import React from 'react';
// import Cookies from 'js-cookie';
import Sidebar from '@/components/_pages/trang-chu/sidebar';
import { getArticleListAPI, useGetArticleList } from '@/services/article';
import { IArticleListResponse } from '@/interfaces/IArticle';
import { getRequest } from '@/utils/fetch-client';

const Homepage = async () => {
  // Cookies.set('name', 'John');
  // console.log('ck2:', Cookies.get('name'));
  // console.log('homepage', data);
  // const;
  const data: IArticleListResponse = await getArticleListAPI();
  console.log('1:', data);
  // // console.log(datac.data);
  // // console.log(datac);
  // console.log(datac.then((result) => console.log(result)));
  // const result = await getRequest(`http://localhost:3000/api`);
  // console.log('result:', result);
  return (
    <LayoutContainer>
      <Box sx={{ py: 4 }}>
        {/* <Banner data={data.data.articleList} />   */}
        <Box sx={{ mt: 3 }}>
          <Grid container spacing={4}>
            <Grid item xs={8}>
              <Latest />
              <Programming />
            </Grid>
            <Grid
              item
              xs={4}
              sx={{ position: 'sticky', top: '0', height: '100%' }}>
              <Sidebar />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </LayoutContainer>
  );
};

export default Homepage;
