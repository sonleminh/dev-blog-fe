'use client';

import SkeletonImage from '@/components/common/SkeletonImage';
import { Box, SxProps, Theme, Typography } from '@mui/material';
import { truncateTextByLine } from '@/utils/css-helper.util';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { IArticle } from '@/interfaces/IArticle';

const ArticleByTag = ({ data, title }: { data: IArticle[]; title: string }) => {
  return (
    <Box sx={ArticleByTagStyle}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mb: 2,
        }}>
        <Typography sx={{ fontSize: 18, fontWeight: 600 }}>
          Front-end
        </Typography>
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
        {data?.map((item, index) => (
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
              <SkeletonImage src={item.thumbnail_image} alt='cc' fill />
            </Box>
            <Typography sx={{ fontWeight: 600, ...truncateTextByLine(2) }}>
              {item.title}
              {/* cc */}
            </Typography>
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
    bgcolor: '#3d55ef',
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
