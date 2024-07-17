'use client';

import SkeletonImage from '@/components/common/SkeletonImage';
import AppLink from '@/components/common/AppLink';

import { truncateTextByLine } from '@/utils/css-helper.util';
import { IArticle } from '@/interfaces/IArticle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import { Box, SxProps, Theme, Typography } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const ArticleByTag = ({ data, title }: { data: IArticle[]; title: string }) => {
  return (
    <Box sx={ArticleByTagStyle}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mb: 2,
        }}>
        <Typography sx={{ fontSize: 18, fontWeight: 600 }}>{title}</Typography>
        <Box sx={{ display: 'flex' }}>
          <Box className={`arrow-left arrow-left-${title}`}>
            <KeyboardArrowLeftIcon />
          </Box>
          <Box className={`arrow-right arrow-right-${title}`}>
            <KeyboardArrowRightIcon />
          </Box>
        </Box>
      </Box>
      <Swiper
        slidesPerView={3}
        spaceBetween={12}
        navigation={{
          prevEl: `.arrow-left-${title}`,
          nextEl: `.arrow-right-${title}`,
        }}
        modules={[Navigation]}
        className='mySwiper'>
        {data?.map((item) => (
          <SwiperSlide key={item._id}>
            <AppLink
              href={`/blog/${item._id}`}
              sx={{
                ':hover': {
                  '& img': {
                    transform: 'scale(1.05)',
                  },
                  '& span': {
                    textDecoration: 'underline',
                  },
                },
              }}>
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
                    transition: 'all 0.5s ease',
                  },
                }}>
                <SkeletonImage src={item.thumbnail_image} alt='devblog' />
              </Box>
              <Typography
                component={'span'}
                sx={{ fontWeight: 500, ...truncateTextByLine(2) }}>
                {item.title}
              </Typography>
            </AppLink>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ArticleByTag;

const ArticleByTagStyle: SxProps<Theme> = {
  '.arrow-left, .arrow-right': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '26px',
    height: '26px',
    bgcolor: (theme) => (theme.palette.mode === 'light' ? '#000' : '#fff'),
    color: (theme) => (theme.palette.mode === 'light' ? '#fff' : '#000'),
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
    bgcolor: (theme) => (theme.palette.mode === 'light' ? '#eee' : '#363636'),
    color: (theme) => (theme.palette.mode === 'light' ? '#000' : '#eee'),
    cursor: 'default',
  },
};
