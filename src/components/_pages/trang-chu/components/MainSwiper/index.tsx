import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Box, SxProps, Theme } from '@mui/material';
import SkeletonImage from '@/components/common/SkeletonImage';

const MainSwiper = (props: any) => {
  return (
    <Box sx={MainSwiperStyle}>
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper:
            props?.thumbsSwiper && !props?.thumbsSwiper?.destroyed
              ? props?.thumbsSwiper
              : null,
        }}
        loop={true}
        // autoplay={{
        //   delay: 1500,
        //   disableOnInteraction: false,
        // }}
        modules={[Autoplay, FreeMode, Navigation, Thumbs]}
        className='mainSwiper'>
        {props?.data?.map((item: any) => (
          <SwiperSlide key={item}>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: { xs: '160px', sm: '160px', md: '100%' },
                mb: 1,
                // borderRadius: '8px',
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
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default MainSwiper;

const MainSwiperStyle: SxProps<Theme> = {
  '.mainSwiper': {
    height: 400,
  },
};
