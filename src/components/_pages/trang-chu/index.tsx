import { Theme } from '@emotion/react';
import { Box, Grid, SxProps, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { truncateTextByLine } from '@/utils/css-helper.util';
import SkeletonImage from '@/components/common/SkeletonImage';

const Banner = () => {
  return (
    <Box sx={BannerContainer}>
      <Grid
        container
        sx={{
          display: 'grid',
          gridTemplateColumns: 'auto auto',
          height: '100%',
          gap: 0.5,
        }}>
        <Grid
          item
          sx={{ gridRow: '1/ span 2', bgcolor: 'pink' }}
          className='article-item'>
          <Box className='article-item-thumb'>
            <Link href={'/'}>
              <Box
                sx={{
                  position: 'relative',
                  height: { xs: '250px', sm: '250px', md: '100%' },
                }}>
                <SkeletonImage
                  src={
                    'https://firebasestorage.googleapis.com/v0/b/dev-blog-7a694.appspot.com/o/cau-hoi-cho-nha-tuyen-dung-it-534x462.png?alt=media&token=cae6b033-a0cd-4a06-a24f-f5a60c0691ac'
                  }
                  priority
                  alt='cc'
                />
              </Box>
            </Link>
          </Box>
          <Box className='article-item-info'>
            <Typography className='info-title'>
              Front-end developer lên trình như thế nào? Bạn đã thực sự hiểu về
              Front-End?
            </Typography>
            <Typography className='info-date'>February 16, 2024</Typography>
          </Box>
        </Grid>
        <Grid item sx={{ bgcolor: 'pink' }} className='article-item'>
          <Box className='article-item-thumb'>
            <Link href={'/'}>
              <Box
                sx={{
                  position: 'relative',
                  height: { xs: '250px', sm: '250px', md: '100%' },
                }}>
                <SkeletonImage
                  src={
                    'https://firebasestorage.googleapis.com/v0/b/dev-blog-7a694.appspot.com/o/cau-hoi-cho-nha-tuyen-dung-it-534x462.png?alt=media&token=cae6b033-a0cd-4a06-a24f-f5a60c0691ac'
                  }
                  priority
                  alt='cc'
                />
              </Box>
            </Link>
          </Box>
          <Box className='article-item-info'>
            <Typography className='info-title'>
              Top 30+ câu hỏi cho nhà tuyển dụng IT khi phỏng vấn
            </Typography>
            <Typography className='info-date'>February 20, 2024</Typography>
          </Box>
        </Grid>
        <Grid item sx={{ bgcolor: 'pink' }} className='article-item'>
          <Box className='article-item-thumb'>
            <Link href={'/'}>
              <Box
                sx={{
                  position: 'relative',
                  height: { xs: '250px', sm: '250px', md: '100%' },
                }}>
                <SkeletonImage
                  src={
                    'https://firebasestorage.googleapis.com/v0/b/dev-blog-7a694.appspot.com/o/cau-hoi-cho-nha-tuyen-dung-it-534x462.png?alt=media&token=cae6b033-a0cd-4a06-a24f-f5a60c0691ac'
                  }
                  priority
                  alt='cc'
                />
              </Box>
            </Link>
          </Box>
          <Box className='article-item-info'>
            <Typography className='info-title'>
              Front-end developer lên trình như thế nào? Bạn đã thực sự hiểu về
              Front-End?
            </Typography>
            <Typography className='info-date'>February 16, 2024</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;

const BannerContainer: SxProps<Theme> = {
  height: 400,
  '.article-item': {
    position: 'relative',
    overflow: 'hidden',
    '.article-item-thumb': {
      height: '100%',
      '& a': {
        ':before': {
          bottom: '0',
          content: '""',
          display: 'block',
          height: '100%',
          width: '100%',
          position: 'absolute',
          WebkitTransition: 'background-color 0.3s ease',
          transition: 'background-color 0.3s ease',
          zIndex: 1,
          background:
            'linear-gradient(to bottom, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.7) 100%)',
        },
        '& img': {
          objectFit: 'cover',
          transition: 'transform 0.3s ease, opacity 0.3s',
          WebkitTransition: '-webkit-transform 0.3s ease, opacity 0.3s',
        },
      },
    },
    '.article-item-info': {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      padding: '0 20px 10px',
      zIndex: 1,
    },
    '.info-title': {
      mb: 1,
      color: '#fff',
      textShadow: '1px 1px 3px rgba(0, 0, 0, 0.2)',
      ...truncateTextByLine(3),
      fontSize: 22,
      lineHeight: '28px',
      fontWeight: 600,
    },
    '.info-date': {
      color: '#fff',
      textShadow: '1px 1px 1px rgba(0, 0, 0, 0.3)',
      fontSize: 12,
    },
    ':hover': {
      bgcolor: 'pink',
      ':before': {
        bgcolor: 'pink',

        backgroundColor: 'rgba(0, 0, 0, 0.1)',
      },
      '.article-item-thumb': {
        '& a': {
          ':before': {
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
          },
          '& img': {
            transform: 'scale3d(1.1, 1.1, 1)',
            WebkitTransform: 'scale3d(1.1, 1.1, 1)',
          },
        },
      },
    },
  },
};
