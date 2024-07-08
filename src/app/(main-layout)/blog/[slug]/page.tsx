import Latest from '@/components/_pages/trang-chu/latest';
import Sidebar from '@/components/_pages/trang-chu/sidebar';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import HtmlRenderBox from '@/components/common/HtmlRenderBox';
import SkeletonImage from '@/components/common/SkeletonImage';
import LayoutContainer from '@/components/sharing/layout-container';
import { getArticleByIdAPI } from '@/services/article';
import { Link, Grid, Box, Typography } from '@mui/material';

const ArticleDetail = async ({ params }: { params: { slug: string } }) => {
  const data = await getArticleByIdAPI(params?.slug);

  const breadcrumbsOptions = [
    { link: '/', label: 'HOME' },
    { link: `/blog/${data._id}`, label: data.title },
  ];
  return (
    <LayoutContainer>
      <Grid container spacing={4}>
        <Grid item xs={8}>
          <Box sx={{ mb: 3 }}>
            <Breadcrumbs options={breadcrumbsOptions} />
          </Box>
          <Typography
            variant='h3'
            sx={{ mb: 3, fontSize: 28, fontWeight: 700 }}>
            {data?.title}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              mb: 3,
              color: 'rgba(153,153,153,1)',
              fontSize: 13,
            }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                ':after': {
                  content: '""',
                  backgroundColor: 'currentColor',
                  display: 'block',
                  width: 3,
                  height: 3,
                  ml: '5px',
                  borderRadius: '50%',
                },
              }}>
              <Box
                sx={{
                  position: 'relative',
                  width: 20,
                  height: 20,
                  mr: 1,
                  borderRadius: 20,
                  overflow: 'hidden',
                  '& img': {
                    objectFit: 'cover',
                  },
                }}>
                <SkeletonImage
                  src={
                    'https://firebasestorage.googleapis.com/v0/b/dev-blog-7a694.appspot.com/o/ionic-hay-react-native-1.jpg?alt=media&token=845771ff-23c7-4ddf-a6bb-e7e835619a2d'
                  }
                  alt='cc'
                  fill
                />
              </Box>
              <Typography sx={{ fontSize: 13 }}>Son Le</Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                m: '0 4px',
                // ':after': {
                //   content: '""',
                //   backgroundColor: 'currentColor',
                //   display: 'block',
                //   width: 3,
                //   height: 3,
                //   ml: '5px',
                //   borderRadius: '50%',
                // },
              }}>
              2 days ago
            </Box>
          </Box>
          {/* <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: 400,
              borderRadius: 2,
              overflow: 'hidden',
              '& img': {
                objectFit: 'cover',
              },
            }}>
            <SkeletonImage
              src={
                'https://firebasestorage.googleapis.com/v0/b/dev-blog-7a694.appspot.com/o/ionic-hay-react-native-1.jpg?alt=media&token=845771ff-23c7-4ddf-a6bb-e7e835619a2d'
              }
              alt='cc'
              fill
            />
          </Box> */}
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
