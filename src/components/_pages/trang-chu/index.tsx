import { Theme } from '@emotion/react';
import { Box, Grid, SxProps, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

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
              <Image
                src={
                  'https://firebasestorage.googleapis.com/v0/b/dev-blog-7a694.appspot.com/o/cau-hoi-cho-nha-tuyen-dung-it-534x462.png?alt=media&token=cae6b033-a0cd-4a06-a24f-f5a60c0691ac'
                }
                fill
                alt='cc'
              />
            </Link>
          </Box>
          <Box className='article-item-info'>
            <Typography>
              Front-end developer lên trình như thế nào? Bạn đã thực sự hiểu về
              Front-End?
            </Typography>
            <Typography>February 16, 2024</Typography>
          </Box>
        </Grid>
        <Grid item sx={{ bgcolor: 'pink' }} className='article-item'>
          <Box className='article-item-thumb'>
            <Link href={'/'}>
              <Image
                src={
                  'https://firebasestorage.googleapis.com/v0/b/dev-blog-7a694.appspot.com/o/cau-hoi-cho-nha-tuyen-dung-it-534x462.png?alt=media&token=cae6b033-a0cd-4a06-a24f-f5a60c0691ac'
                }
                fill
                alt='cc'
              />
            </Link>
          </Box>
          <Box className='article-item-info'>
            <Typography>
              Top 30+ câu hỏi cho nhà tuyển dụng IT khi phỏng vấn
            </Typography>
            <Typography>February 20, 2024</Typography>
          </Box>
        </Grid>
        <Grid item sx={{ bgcolor: 'pink' }} className='article-item'>
          <Box className='article-item-thumb'>
            <Link href={'/'}>
              <Image
                src={
                  'https://firebasestorage.googleapis.com/v0/b/dev-blog-7a694.appspot.com/o/cau-hoi-cho-nha-tuyen-dung-it-534x462.png?alt=media&token=cae6b033-a0cd-4a06-a24f-f5a60c0691ac'
                }
                fill
                alt='cc'
              />
            </Link>
          </Box>
          <Box className='article-item-info'>
            <Typography>
              Front-end developer lên trình như thế nào? Bạn đã thực sự hiểu về
              Front-End?
            </Typography>
            <Typography>February 16, 2024</Typography>
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
      zIndex: 1,
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
