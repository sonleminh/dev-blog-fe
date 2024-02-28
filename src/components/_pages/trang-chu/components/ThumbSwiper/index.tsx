import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Autoplay,
  FreeMode,
  Navigation,
  Pagination,
  Thumbs,
} from 'swiper/modules';
import SkeletonImage from '@/components/common/SkeletonImage';
import { Box, SxProps, Theme } from '@mui/material';

const ThumbSwiper = (props: any) => {
  return (
    // <Box sx={SwiperStyle}>
    //   <Swiper
    //     direction={'vertical'}
    //     // autoHeight={true}
    //     slidesPerView={2}
    //     pagination={{
    //       clickable: true,
    //     }}
    //     modules={[Pagination]}
    //     className='mySwiper'>
    //     <SwiperSlide>
    //       <Box sx={{ width: '100%', height: 300, bgcolor: 'pink' }}>
    //         Slide 1
    //       </Box>
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <Box sx={{ width: '100%', height: 300, bgcolor: 'green' }}>
    //         Slide 2
    //       </Box>
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <Box sx={{ width: '100%', height: 300, bgcolor: 'pink' }}>
    //         Slide 3
    //       </Box>
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <Box sx={{ width: '100%', height: 300, bgcolor: 'green' }}>
    //         Slide 4
    //       </Box>
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <Box sx={{ width: '100%', height: 300, bgcolor: 'red' }}>Slide 5</Box>
    //     </SwiperSlide>
    //   </Swiper>
    // </Box>
    <Box sx={SwiperStyle}>
      <Swiper
        onSwiper={props?.setThumbsSwiper}
        direction={'vertical'}
        autoHeight={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        loop={true}
        // autoplay={{
        //   delay: 1500,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        // modules={[Pagination]}
        // modules={[FreeMode, Navigation, Thumbs]}
        modules={[Autoplay, FreeMode, Navigation, Thumbs]}
        className='mySwiper'>
        {props?.data?.map((item: any) => (
          <SwiperSlide key={item}>
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
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ThumbSwiper;

const SwiperStyle: SxProps<Theme> = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  right: 0,
  zIndex: 2,
  '.mySwiper': {
    width: 100,
    height: 300,
  },
};
