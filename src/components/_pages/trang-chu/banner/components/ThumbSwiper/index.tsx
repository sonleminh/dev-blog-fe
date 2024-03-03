import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';
import SkeletonImage from '@/components/common/SkeletonImage';
import { Box, SxProps, Theme } from '@mui/material';

const ThumbSwiper = (props: any) => {
  return (
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
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, FreeMode, Navigation, Thumbs]}
        className='mySwiper'>
        {props?.data?.map((item: any, index: number) => (
          <SwiperSlide key={index}>
            <Box className='thumb-item'>
              <Box
                className='thumb-container'
                sx={{
                  position: 'relative',
                  width: { xs: '100%' },
                  height: { xs: '100%' },
                  mb: 1,
                  borderRadius: '50%',
                  overflow: 'hidden',
                  '& img': {
                    objectFit: 'cover',
                  },
                }}>
                <SkeletonImage src={item.thumbnail} alt='cc' fill />
              </Box>
              <svg className='progressBar'>
                <circle r='35' cx='36' cy='36'></circle>
              </svg>
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
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  zIndex: 2,
  borderLeft: '1px solid rgba(255,255,255,.1)',
  '.mySwiper': {
    width: 120,
    height: 350,
  },
  '.swiper-slide': {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  '.thumb-item': {
    position: 'relative',
    width: '72px',
    height: '72px',
  },
  '.thumb-container': {
    ':before': {
      content: '""',
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      boxShadow: '0 0 0 3px inset rgba(255,255,255,.28)',
      zIndex: '9',
      borderRadius: '50%',
    },
  },
  '.progressBar': {
    display: 'none',
    position: 'absolute',
    top: '0',
    right: '0',
    width: '72px',
    height: '72px',
    '& circle': {
      fill: 'rgba(255,255,255,0)',
      stroke: '#fff',
      strokeWidth: '3px',
      strokeLinecap: 'round',
      animation: 'progress 5.5s',
      strokeDasharray: '219.8',
      strokeDashoffset: '219.8',
    },
  },
  '.swiper-slide-thumb-active .progressBar': {
    display: 'block',
  },
  '@keyframes progress': {
    '0%': {
      strokeDashoffset: '219.8',
    },
    '100%': {
      strokeDashoffset: '0',
    },
  },
};
