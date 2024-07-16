'use client';

import SkeletonImage from '@/components/common/SkeletonImage';
import AppLink from '@/components/common/AppLink';

import { IArticle } from '@/interfaces/IArticle';
import { truncateTextByLine } from '@/utils/css-helper.util';

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Box, SxProps, Theme, Typography } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export const RelatedArticle = ({ data }: { data: IArticle[] }) => {
  return (
    <Box sx={ArticleByTagStyle}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mb: 2,
        }}>
        <Typography sx={{ fontSize: 18, fontWeight: 600 }}>
          Bài viết liên quan
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
        modules={[Navigation]}
        navigation={{
          prevEl: `.arrow-left`,
          nextEl: `.arrow-right`,
        }}
        slidesPerView={3}
        spaceBetween={20}>
        {data?.map((item: IArticle, index: number) => (
          <SwiperSlide key={index}>
            <AppLink href={`blog/${item._id}`}>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: { xs: '160px', sm: '160px', md: '200px' },
                  mb: 1,
                  borderRadius: 2,
                  overflow: 'hidden',
                  '& img': {
                    objectFit: 'cover',
                  },
                }}>
                <SkeletonImage src={item.thumbnail_image} alt='cc' fill />
              </Box>
              <Box>
                <Typography
                  sx={{
                    mb: 1,
                    fontWeight: 500,
                    ...truncateTextByLine(2),
                  }}>
                  {item?.title}
                </Typography>
              </Box>
            </AppLink>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

const ArticleByTagStyle: SxProps<Theme> = {
  '.arrow-left, .arrow-right': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '26px',
    height: '26px',
    bgcolor: '#000',
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
    bgcolor: '#eee',
    color: '#000',
    cursor: 'default',
  },
};
