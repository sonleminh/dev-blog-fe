import LayoutContainer from '@/components/sharing/layout-container';
import { ArticleItem } from '@/components/common/ArticleItem';
import Sidebar from '@/components/_pages/trang-chu/sidebar';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import Pagination from '@/components/common/Pagination';

import { getArticleByTagAPI } from '@/services/article';
import { Box, Grid } from '@mui/material';

const ArticleByTag = async ({
  params,
  searchParams,
}: {
  params: { tag: string };
  searchParams: { page: string };
}) => {
  const data = await getArticleByTagAPI(params.tag, +searchParams.page);
  const breadcrumbsOptions = [
    { link: '/', label: 'HOME' },
    { link: `/tag/${data?.tag?.value}`, label: data?.tag?.label },
  ];
  return (
    <LayoutContainer>
      <Box sx={{ p: '16px 0 28px' }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={8}>
            <Box sx={{ mb: 3 }}>
              <Breadcrumbs options={breadcrumbsOptions} />
            </Box>
            <Box sx={{ mb: 3 }}>
              <Grid container spacing={2}>
                {data?.articleList?.map((item) => (
                  <ArticleItem key={item?._id} data={item} />
                ))}
              </Grid>
            </Box>
            <Pagination data={data} page={+searchParams?.page} type='tag' />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Sidebar />
          </Grid>
        </Grid>
      </Box>
    </LayoutContainer>
  );
};

export default ArticleByTag;
