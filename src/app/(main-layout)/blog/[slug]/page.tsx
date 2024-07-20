import LayoutContainer from '@/components/sharing/layout-container';
import HtmlRenderBox from '@/components/common/HtmlRenderBox';
import { RelatedArticle } from './components/relatedArticle';
import Sidebar from '@/components/_pages/trang-chu/sidebar';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import AppLink from '@/components/common/AppLink';

// import { getArticleByIdAPI } from '@/services/article';

import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { Box, Button, Grid, Typography } from '@mui/material';
import moment from 'moment';

const ArticleDetail = async ({ params }: { params: { slug: string } }) => {
  // const { data, relatedData } = await getArticleByIdAPI(params?.slug);

  // const breadcrumbsOptions = [
  //   { link: '/', label: 'HOME' },
  //   { link: `/blog/${data._id}`, label: data.title },
  // ];
  return (
    <LayoutContainer>
      <Box sx={{ p: '16px 0 28px' }}>
        {/* <Grid container spacing={4}>
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
                display: 'flex',
                justifyContent: 'space-between',
                mb: 3,
                color: '#696969',
              }}>
              <Typography sx={{ fontSize: 13 }}>
                {moment(data?.createdAt).format('MMMM D, YYYY')}
              </Typography>{' '}
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <VisibilityOutlinedIcon sx={{ mr: 0.5, fontSize: 16 }} />{' '}
                <Typography sx={{ fontSize: 14 }}>{data?.views}</Typography>
              </Box>
            </Box>
            <HtmlRenderBox html={data?.content} />
          </Grid>
          <Grid
            item
            xs={4}
            sx={{ position: 'sticky', top: '0', height: '100%' }}>
            <Sidebar />
          </Grid>
        </Grid>
        <Box sx={{ mt: 2 }}>
          <RelatedArticle data={relatedData?.articleList} />
        </Box> */}
      </Box>
    </LayoutContainer>
  );
};

export default ArticleDetail;
