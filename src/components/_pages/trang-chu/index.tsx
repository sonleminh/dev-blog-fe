import { Theme } from '@emotion/react';
import { Box, Grid, SxProps, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { truncateTextByLine } from '@/utils/css-helper.util';
import SkeletonImage from '@/components/common/SkeletonImage';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ThumbSwiper from './components/ThumbSwiper';
import MainSwiper from './components/MainSwiper';

const Banner = () => {
  // const progressCircle = useRef<SVGSVGElement>(null);
  // const progressContent = useRef<HTMLSpanElement>(null);
  // const onAutoplayTimeLeft = (_, time: any, progress: any) => {
  //   console.log('time:', time);
  //   console.log('progress:', progress);
  //   if (progressCircle.current) {
  //     progressCircle.current.style.setProperty('--progress', `${1 - progress}`);
  //   }
  //   if (progressContent.current) {
  //     progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  //   }
  // };

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <Box sx={BannerContainer}>
      <MainSwiper
        data={[1, 2, 3, 4, 5]}
        thumbsSwiper={thumbsSwiper}></MainSwiper>
      <ThumbSwiper data={[1, 2, 3, 4, 5]} setThumbsSwiper={setThumbsSwiper} />
      {/* <ThumbSwiper data={[1, 2, 3, 4, 5]} /> */}

      {/* <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className='mySwiper'>
        {[1, 2, 3, 4, 5].map((item, index) => (
          <SwiperSlide key={index}>
            <Box>
              <Link href={'/blog/1'}>
                {' '}
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: { xs: '400px', sm: '400px', md: '400px' },
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
              </Link>
            </Box>
            <Link href={'/'}>
              Front-end developer lên trình như thế nào? Bạn đã thực sự hiểu về
              Front-End?
            </Link>
          </SwiperSlide>
        ))}
        <div className='autoplay-progress' slot='container-end'>
          <svg viewBox='0 0 48 48' ref={progressCircle}>
            <circle cx='24' cy='24' r='20'></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper> */}
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
