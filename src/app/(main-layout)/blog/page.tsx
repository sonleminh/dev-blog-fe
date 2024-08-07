import LayoutContainer from '@/components/sharing/layout-container';
import { ArticleItem } from '@/components/common/ArticleItem';
import Sidebar from '@/components/_pages/trang-chu/sidebar';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import Pagination from '@/components/common/Pagination';

import { getLatestArticleAPI } from '@/services/article';
import { Box, Grid } from '@mui/material';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Blog mới nhất',
    template: '%s - Blog kiến thức về lập trình',
  },
  description: 'Blog chia sẻ kiến thức về lập trình',
};

const Latest = async ({ searchParams }: { searchParams: { page: string } }) => {
  const data = await getLatestArticleAPI(+searchParams.page);

  const breadcrumbsOptions = [
    { link: '/', label: 'HOME' },
    { link: ``, label: 'Mới nhất' },
  ];
  return (
    <LayoutContainer>
      <Box sx={{ p: '16px 0 28px' }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={8}>
            <Box sx={{ mb: { xs: 2, lg: 3 } }}>
              <Breadcrumbs options={breadcrumbsOptions} />
            </Box>
            <Box sx={{ mb: 3 }}>
              <Grid container spacing={2}>
                {data?.articleList?.map((item) => (
                  <ArticleItem key={item?._id} data={item} />
                ))}
              </Grid>
            </Box>
            <Pagination data={data} page={+searchParams?.page} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Sidebar />
          </Grid>
        </Grid>
      </Box>
    </LayoutContainer>
  );
};

export default Latest;
