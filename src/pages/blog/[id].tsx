import Sidebar from '@/components/_pages/trang-chu/sidebar';
import Breadcrumbs, {
  IBreadcrumbOption,
} from '@/components/common/Breadcrumbs';
import SkeletonImage from '@/components/common/SkeletonImage';
import Layout from '@/components/sharing/layout';
import LayoutContainer from '@/components/sharing/layout-container';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Box, Grid, Typography } from '@mui/material';

const BlogDetail = () => {
  const breadcrumbList: IBreadcrumbOption[] = [
    { link: '/', label: 'HOME' },
    { link: '', label: '1' },
  ];
  return (
    <LayoutContainer>
      <Box sx={{ py: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={8}>
            <Breadcrumbs options={breadcrumbList} />
            <Typography sx={{ mt: 2, mb: 2, fontSize: 28, fontWeight: 700 }}>
              Mistakes You Might Be Making With Your Watch
            </Typography>
            <Box
              sx={{
                display: 'flex',
                mb: 3,
                '& p': {
                  display: 'flex',
                  alignItems: 'center',
                  marginRight: 1,
                  color: '#999',
                  fontSize: 11,
                  fontWeight: 400,
                  textTransform: 'uppercase',
                  ':after': {
                    content: '""',
                    display: 'inline-block',
                    backgroundColor: 'currentColor',
                    width: '3px',
                    height: '3px',
                    marginLeft: '5px',
                    mb: 0.1,
                    borderRadius: '50%',
                  },
                  ':last-child': {
                    ':after': {
                      display: 'none',
                    },
                  },
                },
              }}>
              <Box
                sx={{
                  position: 'relative',
                  width: '25px',
                  height: { xs: '25px', sm: '25px', md: '25px' },
                  mr: 1,
                  borderRadius: '50%',
                  overflow: 'hidden',
                  '& img': {
                    objectFit: 'cover',
                  },
                }}>
                <SkeletonImage
                  src={
                    'https://firebasestorage.googleapis.com/v0/b/dev-blog-7a694.appspot.com/o/cau-hoi-cho-nha-tuyen-dung-it-534x462.png?alt=media&token=cae6b033-a0cd-4a06-a24f-f5a60c0691ac'
                  }
                  alt='cc'
                  fill
                />
              </Box>
              <Typography>Son Le</Typography>
              <Typography>2 DAYS AGO</Typography>
              <Typography>22 VIEWS</Typography>
              <Typography>2 COMMENTS</Typography>
            </Box>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: { xs: '25px', sm: '25px', md: '400px' },
                mr: 1,
                borderRadius: '10px',
                overflow: 'hidden',
                '& img': {
                  objectFit: 'cover',
                },
              }}>
              <SkeletonImage
                src={
                  'https://firebasestorage.googleapis.com/v0/b/dev-blog-7a694.appspot.com/o/cau-hoi-cho-nha-tuyen-dung-it-534x462.png?alt=media&token=cae6b033-a0cd-4a06-a24f-f5a60c0691ac'
                }
                alt='cc'
                fill
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={4}
            sx={{ position: 'sticky', top: '0', height: '100%' }}>
            <Sidebar />
          </Grid>
        </Grid>
      </Box>
    </LayoutContainer>
  );
};

BlogDetail.Layout = Layout;

export default BlogDetail;
