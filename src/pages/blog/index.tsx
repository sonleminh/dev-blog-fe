import SkeletonImage from '@/components/common/SkeletonImage';
import LayoutContainer from '@/components/sharing/layout-container';
import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { truncateTextByLine } from '@/utils/css-helper.util';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

const Blog = () => {
  return (
    <LayoutContainer>
      {/* <Grid container spacing={4}>
        <Grid item xs={8}>
          <Typography sx={{ mb: 2, fontSize: 18, fontWeight: 600 }}>
            Blog
          </Typography>
          <Grid container spacing={2}>
            {[1, 2, 3, 4].map((item, index) => (
              <Grid key={index} item xs={6}>
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: { xs: '250px', sm: '250px', md: '250px' },
                    mb: 1,
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
                <Typography
                  sx={{
                    fontSize: 20,
                    fontWeight: 600,
                    ...truncateTextByLine(2),
                  }}>
                  Front-end developer lên trình như thế nào? Bạn đã thực sự hiểu
                  về Front-End?
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid
          item
          xs={4}
          sx={{ position: 'sticky', top: '0', height: '500px' }}>
          <Typography sx={{ mb: 2, fontSize: 18, fontWeight: 600 }}>
            Latest
          </Typography>
          {[1, 2, 3, 4].map((item, index) => (
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
          <Box>
            <Typography sx={{ mb: 2, fontSize: 18, fontWeight: 600 }}>
              Categories
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
      </Grid> */}
      cc
      <Swiper
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        autoHeight={true}
        modules={[Pagination]}
        className='mySwiper4'>
        {/* {[1, 2, 3, 4, 5].map((item, index) => (
          <SwiperSlide key={index}>
            <Box sx={{ bgcolor: 'pink' }}>Slide 1</Box>
          </SwiperSlide>
        ))} */}
        <SwiperSlide>
          <Box sx={{ height: 300, bgcolor: 'pink' }}>Slide 1</Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={{ height: 300, bgcolor: 'pink' }}>Slide 2</Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={{ height: 300, bgcolor: 'pink' }}>Slide 3</Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={{ height: 300, bgcolor: 'pink' }}>Slide 4</Box>
        </SwiperSlide>
      </Swiper>
    </LayoutContainer>
  );
};

export default Blog;
