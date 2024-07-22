import LayoutContainer from '@/components/sharing/layout-container';
import SkeletonImage from '@/components/common/SkeletonImage';
import Sidebar from '@/components/_pages/trang-chu/sidebar';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import Pagination from '@/components/common/Pagination';
import AppLink from '@/components/common/AppLink';

import { truncateTextByLine } from '@/utils/css-helper.util';
import { getArticleByTagAPI } from '@/services/article';
import { Box, Grid, Typography } from '@mui/material';
import moment from 'moment';

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
          <Grid item xs={8}>
            <Box sx={{ mb: 3 }}>
              <Breadcrumbs options={breadcrumbsOptions} />
            </Box>
            <Box sx={{ mb: 3 }}>
              <Grid container spacing={2}>
                {data?.articleList?.map((item) => (
                  <Grid key={item?._id} item xs={12}>
                    <AppLink
                      href={`/blog/${item?._id}`}
                      sx={{
                        ':hover': {
                          '.article-title': {
                            textDecoration: 'underline',
                          },
                        },
                      }}>
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
                            className='article-title'
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
                    </AppLink>
                  </Grid>
                ))}
              </Grid>
            </Box>
            <Pagination data={data} page={+searchParams?.page} type='tag' />
          </Grid>
          <Grid item xs={4}>
            <Sidebar />
          </Grid>
        </Grid>
      </Box>
    </LayoutContainer>
  );
};

export default ArticleByTag;
