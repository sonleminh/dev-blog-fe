'use client';

import { Theme } from '@emotion/react';
import { Box, Grid, SxProps, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { truncateTextByLine } from '@/utils/css-helper.util';
import SkeletonImage from '@/components/common/SkeletonImage';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import MainSwiper from './components/MainSwiper';
import ThumbSwiper from './components/ThumbSwiper';
import { IArticle } from '@/interfaces/IArticle';

const Banner = ({ data }: { data: IArticle[] }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <Box sx={BannerContainer}>
      <MainSwiper data={data} thumbsSwiper={thumbsSwiper} />
      <ThumbSwiper data={data} setThumbsSwiper={setThumbsSwiper} />
    </Box>
  );
};

export default Banner;

const BannerContainer: SxProps<Theme> = {
  position: 'relative',
  '.swiper-slide': {
    width: '100%',
  },

  '.autoplay-progress': {
    position: 'absolute',
    right: '16px',
    bottom: '16px',
    zIndex: '10',
    width: '48px',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    color: 'green',
    '& svg': {
      '--progress': 0,
      position: 'absolute',
      left: '0',
      top: '0px',
      zIndex: '10',
      width: '100%',
      height: '100%',
      strokeWidth: '4px',
      stroke: 'green',
      fill: 'none',
      strokeDashoffset: 'calc(125.6 * (1 - var(--progress)))',
      strokeDasharray: '125.6',
      transform: 'rotate(-90deg)',
    },
  },
};
