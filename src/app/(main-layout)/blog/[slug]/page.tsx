import Latest from '@/components/_pages/trang-chu/latest';
import Sidebar from '@/components/_pages/trang-chu/sidebar';
import AppLink from '@/components/common/AppLink';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import HtmlRenderBox from '@/components/common/HtmlRenderBox';
import SkeletonImage from '@/components/common/SkeletonImage';
import LayoutContainer from '@/components/sharing/layout-container';
import { getArticleByIdAPI } from '@/services/article';
import { Link, Grid, Box, Typography, Button } from '@mui/material';
import moment from 'moment';

const ArticleDetail = async ({ params }: { params: { slug: string } }) => {
  const data = await getArticleByIdAPI(params?.slug);

  const breadcrumbsOptions = [
    { link: '/', label: 'HOME' },
    { link: `/blog/${data._id}`, label: data.title },
  ];
  return (
    <LayoutContainer>
      <Grid container spacing={4}>
        <Grid
          item
          xs={8}
          sx={{
            pre: {
              p: 2,
              bgcolor: '#000000',
              color: '#d0d5df',
              borderRadius: '4px',
              overflow: 'auto',
            },
          }}>
          <Box sx={{ mb: 3 }}>
            <Breadcrumbs options={breadcrumbsOptions} />
          </Box>
          <Typography
            variant='h3'
            sx={{ mb: 2, fontSize: 28, fontWeight: 700 }}>
            {data?.title}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              mb: 2,
            }}>
            {data?.tags?.map((item, index) => (
              <AppLink key={index} href={`/tag/${item?.value}`}>
                <Button
                  variant='contained'
                  sx={{
                    p: '4px 8px',
                    bgcolor: '#000',
                    color: '#fff',
                    fontSize: 13,
                    borderRadius: '4px',
                    textTransform: 'none',
                    boxShadow: 'none',
                    ':hover': {
                      // bgcolor: (theme) => theme.palette.primary.light,
                      color: '#fff',
                    },
                  }}>
                  #{item.label}
                </Button>
              </AppLink>
            ))}
          </Box>
          <Box
            sx={{
              mb: 3,
              color: '#696969',
              fontSize: 13,
            }}>
            {moment(data?.createdAt).format('MMMM D, YYYY')}
          </Box>
          <HtmlRenderBox html={data?.content} />
        </Grid>
        <Grid item xs={4}>
          <Sidebar />
        </Grid>
      </Grid>
    </LayoutContainer>
  );
};

export default ArticleDetail;
