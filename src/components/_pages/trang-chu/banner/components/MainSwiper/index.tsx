import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Thumbs } from 'swiper/modules';
import { Box, SxProps, Theme } from '@mui/material';
import SkeletonImage from '@/components/common/SkeletonImage';

const MainSwiper = (props: any) => {
  return (
    <Box sx={MainSwiperStyle}>
      <Swiper
        spaceBetween={10}
        thumbs={{
          swiper:
            props?.thumbsSwiper && !props?.thumbsSwiper?.destroyed
              ? props?.thumbsSwiper
              : null,
        }}
        loop={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, FreeMode, Thumbs]}
        className='mainSwiper'>
        {props?.data?.map((item: any, index: number) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: { xs: '160px', sm: '160px', md: '100%' },
                mb: 1,
                overflow: 'hidden',
                '& img': {
                  objectFit: 'cover',
                },
              }}>
              <SkeletonImage src={item.thumbnail} alt='cc' fill />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default MainSwiper;

const MainSwiperStyle: SxProps<Theme> = {
  '.mainSwiper': {
    height: 450,
    borderRadius: '10px',
  },
};
