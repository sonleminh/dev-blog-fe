import ArticleByTag from '@/components/_pages/trang-chu/article-by-tag';
import LayoutContainer from '@/components/sharing/layout-container';
import Sidebar from '@/components/_pages/trang-chu/sidebar';
import Banner from '@/components/_pages/trang-chu/banner';
import Latest from '@/components/_pages/trang-chu/latest';

import { getArticleListAPI } from '@/services/article';
import { Box, Grid } from '@mui/material';

const Homepage = async () => {
  const data = await getArticleListAPI();

  return (
    <Box sx={{ py: { xs: 2, lg: 4 } }}>
      <Box sx={{ maxWidth: { xs: '100%', lg: 1070 }, margin: '0 auto' }}>
        <Banner data={data?.recent_articles?.slice(4, 10)} />
      </Box>
      <LayoutContainer>
        <Box sx={{ mt: 3 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <Latest data={data?.recent_articles?.slice(0, 4)} />
              <Box sx={{ mb: 3 }}>
                <ArticleByTag data={data?.FE_articles} title={'Front-end'} />
              </Box>
              <ArticleByTag data={data?.BE_articles} title={'Back-end'} />
            </Grid>
            <Grid
              item
              xs={12}
              lg={4}
              sx={{ position: 'sticky', top: '0', height: '100%' }}>
              <Sidebar />
            </Grid>
          </Grid>
        </Box>
      </LayoutContainer>
    </Box>
  );
};

export default Homepage;
