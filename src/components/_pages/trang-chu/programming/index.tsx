import React from 'react';
import SkeletonImage from '@/components/common/SkeletonImage';
import { Box, SxProps, Theme, Typography } from '@mui/material';
import { truncateTextByLine } from '@/utils/css-helper.util';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

const Programming = () => {
  return (
    <Box sx={ProgramingStyle}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mb: 2,
        }}>
        <Typography sx={{ fontSize: 18, fontWeight: 600 }}>
          Lập trình
        </Typography>
        <Box sx={{ display: 'flex' }}>
          <Box className={`arrow-left`}>
            <KeyboardArrowLeftIcon />
          </Box>
          <Box className={`arrow-right`}>
            <KeyboardArrowRightIcon />
          </Box>
        </Box>
      </Box>
      <Swiper
        slidesPerView={3}
        spaceBetween={12}
        navigation={{
          prevEl: '.arrow-left',
          nextEl: '.arrow-right',
        }}
        modules={[Navigation]}
        className='mySwiper'>
        {[1, 2, 3, 4, 5].map((item, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: { xs: '160px', sm: '160px', md: '160px' },
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
            <Typography sx={{ fontWeight: 600, ...truncateTextByLine(2) }}>
              Front-end developer lên trình như thế nào? Bạn đã thực sự hiểu về
              Front-End?
            </Typography>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Programming;

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
