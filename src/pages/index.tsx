import Banner from '@/components/_pages/trang-chu/banner';
import SkeletonImage from '@/components/common/SkeletonImage';
import LayoutContainer from '@/components/sharing/layout-container';
import { Box, Grid, SxProps, Theme, Typography } from '@mui/material';
import { truncateTextByLine } from '@/utils/css-helper.util';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Latest from '@/components/_pages/trang-chu/latest';
import Programming from '@/components/_pages/trang-chu/programming';

export default function Home() {
  return (
    <LayoutContainer>
      <Box sx={{ py: 4 }}>
        <Banner />
        <Box sx={{ mt: 3 }}>
          <Grid container spacing={4}>
            <Grid item xs={8}>
              <Latest />
              <Programming />
            </Grid>
            <Grid
              item
              xs={4}
              sx={{ position: 'sticky', top: '0', height: '500px' }}>
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
                        Front-end developer lên trình như thế nào? Bạn đã thực
                        sự hiểu về Front-End?
                      </Typography>
                      <Typography sx={{ fontSize: 12 }}>
                        February 16, 2024
                      </Typography>
                    </Box>
                  </Box>
                ))}
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
            </Grid>
          </Grid>
        </Box>
      </Box>
    </LayoutContainer>
  );
}
