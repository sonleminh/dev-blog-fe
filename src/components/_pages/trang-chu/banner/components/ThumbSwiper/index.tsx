import SkeletonImage from '@/components/common/SkeletonImage';

import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { IArticle } from '@/interfaces/IArticle';
import { Box, SxProps, Theme } from '@mui/material';

type TSwiperProps = {
  data: IArticle[];
  setThumbsSwiper: any;
};

const ThumbSwiper = (props: TSwiperProps) => {
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
        className='mySwiper'
        breakpoints={{
          0: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}>
        {props?.data?.map((item: IArticle, index: number) => (
          <SwiperSlide key={index}>
            <Box className='thumb-item'>
              <Box
                className='thumb-container'
                sx={{
                  position: 'relative',
                  width: { xs: '100%' },
                  height: { xs: '100%' },
                  mb: { xs: 0, sm: 1 },
                  borderRadius: '50%',
                  overflow: 'hidden',
                  '& img': {
                    objectFit: 'cover',
                  },
                }}>
                <SkeletonImage src={item.thumbnail_image} alt='cc' fill />
              </Box>
              <svg className='progressBar'>
                <circle></circle>
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
    width: { xs: 72, sm: 120 },
    height: { xs: 220, sm: 350 },
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
    width: { xs: '48px', sm: '72px' },
    height: { xs: '48px', sm: '72px' },
    cursor: 'pointer',
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
    width: { xs: '48px', sm: '72px' },
    height: { xs: '48px', sm: '72px' },
    '& circle': {
      fill: 'rgba(255,255,255,0)',
      stroke: '#fff',
      strokeWidth: '3px',
      strokeLinecap: 'round',
      animation: 'progress 5.5s',
      strokeDasharray: { xs: '144.44', sm: '219.8' },
      strokeDashoffset: { xs: '144.44', sm: '219.8' },
      r: { xs: 23, sm: 35 },
      cx: { xs: 24, sm: 36 },
      cy: { xs: 24, sm: 36 },
    },
  },
  '.swiper-slide-thumb-active .progressBar': {
    display: 'block',
  },
  '@keyframes progress': {
    '0%': {
      strokeDashoffset: { xs: '144.44', sm: '219.8' },
    },
    '100%': {
      strokeDashoffset: '0',
    },
  },
};
