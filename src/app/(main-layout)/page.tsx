import Banner from '@/components/_pages/trang-chu/banner';

import Latest from '@/components/_pages/trang-chu/latest';
import Programming from '@/components/_pages/trang-chu/article-by-tag';
import LayoutContainer from '@/components/sharing/layout-container';
import { Box, Grid } from '@mui/material';
import React from 'react';
// import Cookies from 'js-cookie';
import Sidebar from '@/components/_pages/trang-chu/sidebar';
import { getArticleListAPI, useGetArticleList } from '@/services/article';
import { getRequest } from '@/utils/fetch-client';
import ArticleByTag from '@/components/_pages/trang-chu/article-by-tag';

const Homepage = async () => {
  const data = await getArticleListAPI();
  return (
    <LayoutContainer>
      <Box sx={{ py: 4 }}>
        <Banner data={data.recent_articles.slice(4, 10)} />
        <Box sx={{ mt: 3 }}>
          <Grid container spacing={4}>
            <Grid item xs={8}>
              <Latest data={data.recent_articles.slice(0, 4)} />
              <ArticleByTag data={data.FE_articles} title={'Front-end'} />
              <ArticleByTag data={data.BE_articles} title={'Back-end'} />
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
