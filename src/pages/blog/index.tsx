import SkeletonImage from '@/components/common/SkeletonImage';
import LayoutContainer from '@/components/sharing/layout-container';
import { Box, Grid, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { truncateTextByLine } from '@/utils/css-helper.util';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

const Blog = () => {
  const circleRef = useRef<SVGCircleElement | null>(null);
  const [circumference, setCircumference] = useState<number>(0);
  useEffect(() => {
    if (circleRef.current) {
      const radius = parseFloat(circleRef.current.getAttribute('r') || '0');
      const newCircumference = 2 * Math.PI * radius;
      setCircumference(newCircumference);
    }
  }, []);

  useEffect(() => {
    if (circleRef.current) {
      const offset = circumference / 2;
      circleRef.current.style.strokeDasharray = `${circumference}`;
      circleRef.current.style.strokeDashoffset = `${offset}`;
    }
  }, [circumference]);

  return (
    <LayoutContainer>
      <svg width='72' height='72'>
        <circle
          ref={circleRef}
          cx='36'
          cy='36'
          r='35'
          fill='none'
          stroke='#007bff'
          strokeWidth='3'
          strokeLinecap='round'
        />
      </svg>
      {/* <Box
        sx={{
          position: 'relative',
          width: '72px',
          height: '72px',
          '.progressBar': {
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
              animation: 'progress 20s',
              strokeDasharray: '360px',
              strokeDashoffset: '360',
            },
          },
        }}>
        <svg className='progressBar'>
          <circle r='35' cx='36' cy='36'></circle>
        </svg>
      </Box> */}
    </LayoutContainer>
  );
};

export default Blog;
