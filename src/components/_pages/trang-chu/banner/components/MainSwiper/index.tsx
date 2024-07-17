import React from 'react';

import SkeletonImage from '@/components/common/SkeletonImage';
import AppLink from '@/components/common/AppLink';

import { truncateTextByLine } from '@/utils/css-helper.util';
import { IArticle } from '@/interfaces/IArticle';
import { Box, SxProps, Theme, Typography } from '@mui/material';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Thumbs } from 'swiper/modules';

import moment from 'moment';

type TSwiperProps = {
  data: IArticle[];
  thumbsSwiper: any;
};

const MainSwiper = (props: TSwiperProps) => {
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
        {props?.data?.map((item: IArticle, index: number) => (
          <SwiperSlide key={index}>
            <AppLink
              href={`blog/${item._id}`}
              sx={{
                position: 'relative',
                ':before': {
                  position: 'absolute',
                  content: "''",
                  bottom: 0,
                  zIndex: 1,
                  width: '100%',
                  height: '100%',
                  background:
                    'linear-gradient(to bottom, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.7) 100%)',
                },
                ':hover': {
                  '& img': {
                    transform: 'scale(1.05)',
                  },
                },
              }}>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: { xs: '160px', sm: '160px', md: '100%' },
                  mb: 1,
                  overflow: 'hidden',
                  '& img': {
                    objectFit: 'cover',
                    transition: 'all 0.5s ease',
                  },
                }}>
                <SkeletonImage
                  src={item.thumbnail_image}
                  alt={item.summary}
                  fill
                />
              </Box>
              <Box
                sx={{
                  position: 'absolute',
                  bottom: '0',
                  zIndex: 2,
                  p: '0 120px 24px 24px',
                  color: '#fff',
                }}>
                <Typography
                  sx={{
                    mb: 1,
                    fontSize: 24,
                    fontWeight: 600,
                    ...truncateTextByLine(2),
                  }}>
                  {item?.title}
                </Typography>
                <Typography sx={{ fontSize: 15, fontWeight: 500 }}>
                  {moment(item.createdAt).format('MMMM D, YYYY')}
                </Typography>
              </Box>
            </AppLink>
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
    borderRadius: '8px',
  },
};
