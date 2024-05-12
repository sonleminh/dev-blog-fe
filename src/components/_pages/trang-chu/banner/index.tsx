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

const fakeNews = [
  {
    title:
      'Front-end developer lên trình như thế nào? Bạn đã thực sự hiểu về Front-End?',
    thumbnail:
      'https://firebasestorage.googleapis.com/v0/b/dev-blog-7a694.appspot.com/o/cau-hoi-cho-nha-tuyen-dung-it-534x462.png?alt=media&token=cae6b033-a0cd-4a06-a24f-f5a60c0691ac',
  },
  {
    title: 'bien-chatgpt-thanh-chuyen',
    thumbnail:
      'https://firebasestorage.googleapis.com/v0/b/dev-blog-7a694.appspot.com/o/bien-chatgpt-thanh-chuyen-gia-compressed-356x364.jpg?alt=media&token=85900f45-672b-41a4-9e38-7e4977b95722',
  },
  {
    title: 'co-che-layer-caching',
    thumbnail:
      'https://firebasestorage.googleapis.com/v0/b/dev-blog-7a694.appspot.com/o/co-che-layer-caching-khi-build-docker-image-1-356x364.png?alt=media&token=5f3d578d-334b-4a61-a162-426d0e0999a3',
  },
  {
    title: 'Cách xử lý conflict khi git merge – Vấn nạn đau đầu của mọi Dev',
    thumbnail:
      'https://firebasestorage.googleapis.com/v0/b/dev-blog-7a694.appspot.com/o/cach-xu-ly-conflict-khi-git-merge-534x462.png?alt=media&token=f95e80b3-de44-4c29-abb5-fbedf1054ac3',
  },
  {
    title: 'ionic-hay-react-native',
    thumbnail:
      'https://firebasestorage.googleapis.com/v0/b/dev-blog-7a694.appspot.com/o/ionic-hay-react-native-1.jpg?alt=media&token=845771ff-23c7-4ddf-a6bb-e7e835619a2d',
  },
];

const Banner = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <Box sx={BannerContainer}>
      <MainSwiper data={fakeNews} thumbsSwiper={thumbsSwiper} />
      <ThumbSwiper data={fakeNews} setThumbsSwiper={setThumbsSwiper} />
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
