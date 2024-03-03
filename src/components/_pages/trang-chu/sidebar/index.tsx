import AppLink from '@/components/common/AppLink';
import SkeletonImage from '@/components/common/SkeletonImage';
import { truncateTextByLine } from '@/utils/css-helper.util';
import {
  Box,
  Button,
  Chip,
  Grid,
  SxProps,
  Theme,
  Typography,
} from '@mui/material';

const Sidebar = () => {
  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mb: 2,
          }}>
          <Typography sx={{ fontSize: 18, fontWeight: 600 }}>
            Mới nhất
          </Typography>
          <Typography sx={{ fontSize: 12 }}>View all</Typography>
        </Box>
        {[1, 2, 3].map((item, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              mb: 2,
            }}>
            <Box
              sx={{
                position: 'relative',
                width: '72px',
                height: { xs: '72px', sm: '72px', md: '72px' },
                borderRadius: '8px',
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
            <Box sx={{ width: '72%' }}>
              <Typography
                sx={{
                  mb: 1,
                  fontSize: 14,
                  fontWeight: 700,
                  ...truncateTextByLine(2),
                }}>
                Front-end developer lên trình như thế nào? Bạn đã thực sự hiểu
                về Front-End?
              </Typography>
              <Typography sx={{ fontSize: 12 }}>February 16, 2024</Typography>
            </Box>
          </Box>
        ))}
      </Box>
      <Box mb={4}>
        <Typography sx={{ mb: 2, fontSize: 18, fontWeight: 600 }}>
          Tags
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
          }}>
          {[1, 2, 3, 4].map((item, index) => (
            <AppLink key={index} href={'/'}>
              <Button
                variant='contained'
                sx={{
                  p: '4px 8px',
                  bgcolor: '#eee',
                  color: '#000',
                  fontSize: 13,
                  borderRadius: '10px',
                  textTransform: 'none',
                  boxShadow: 'none',
                  ':hover': {
                    bgcolor: (theme) => theme.palette.primary.light,
                    color: '#fff',
                  },
                }}>
                Lập trình
              </Button>
            </AppLink>
          ))}
        </Box>
      </Box>
      <Box>
        <Typography sx={{ mb: 2, fontSize: 18, fontWeight: 600 }}>
          Danh mục
        </Typography>
        <Grid container spacing={2}>
          {[1, 2, 3, 4].map((item, index) => (
            <Grid key={index} item xs={6}>
              <Box sx={{ display: 'flex' }}>
                <Box
                  sx={{
                    position: 'relative',
                    width: '60px',
                    height: { xs: '56px', sm: '56px', md: '56px' },
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
                <Box>
                  <Typography>STYLE</Typography>
                  <Typography>4 POSTS</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Sidebar;

const ProgramingStyle: SxProps<Theme> = {
  '.arrow-left, .arrow-right': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '26px',
    height: '26px',
    bgcolor: (theme) => theme.palette.primary.light,
    color: '#fff',
    borderRadius: '10px',
    '& svg': {
      fontSize: 18,
    },
    cursor: 'pointer',
    transition: 'all .2s linear',
  },
  '.arrow-right': {
    ml: 0.5,
  },
  '.swiper-button-disabled': {
    bgcolor: '#F0F2FE',
    color: '#000',
    cursor: 'default',
  },
};
