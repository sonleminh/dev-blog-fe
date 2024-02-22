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
          <Typography>
            Front-end developer lên trình như thế nào? Bạn đã thực sự hiểu về
            Front-End?
          </Typography>
          <Typography>February 16, 2024</Typography>
        </Grid>
        <Grid item sx={{ bgcolor: 'pink' }} className='article-item'>
          <Typography>
            Front-end developer lên trình như thế nào? Bạn đã thực sự hiểu về
            Front-End?
          </Typography>
          <Typography>February 16, 2024</Typography>
        </Grid>
        <Grid item sx={{ bgcolor: 'pink' }} className='article-item'>
          <Typography>
            Front-end developer lên trình như thế nào? Bạn đã thực sự hiểu về
            Front-End?
          </Typography>
          <Typography>February 16, 2024</Typography>
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
      position: 'absolute',
      left: '-9999px',
      right: '-9999px',
      width: 'auto',
      margin: '0 auto',
      objectFit: 'cover',
      transitionTimingFunction: 'ease !important',
      transition: 'transform 0.3s ease, opacity 0.3s',
      WebkitTransition: '-webkit-transform 0.3s ease, opacity 0.3s',
    },
    '&::before': {
      bottom: '0',
      content: '""',
      display: 'block',
      height: '100%',
      width: '100%',
      position: 'absolute',
      // backgroundColor: 'rgba(0, 0, 0, 0.1)',
      WebkitTransition: 'background-color 2s ease',
      transition: 'background-color 2s ease',
      zIndex: 1,
      background:
        'linear-gradient(to bottom, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.7) 100%)',
      // bottom: '0',
      // content: '""',
      // display: 'block',
      // height: '70%',
      // width: '100%',
      // position: 'absolute',
      // WebkitTransition: 'background-color 2s ease',
      // transition: 'background-color 2s ease',
      // zIndex: 1,
      // background:
      //   'linear-gradient(to bottom, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.7) 100%)',
    },
    // '&:hover::before': {
    //   // bottom: '0',
    //   // content: '""',
    //   // display: 'block',
    //   // height: '100%',
    //   // width: '100%',
    //   // position: 'absolute',
    //   backgroundColor: 'rgba(0, 0, 0, 0.1)',
    //   // WebkitTransition: 'background-color 2s ease',
    //   // transition: 'background-color 2s ease',
    // },
    ':hover': {
      bgcolor: 'pink',
      ':before': {
        bgcolor: 'pink',
        // bottom: '0',
        // content: '""',
        // display: 'block',
        // height: '100%',
        // width: '100%',
        // position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        // WebkitTransition: 'background-color 2s ease',
        // transition: 'background-color 2s ease',
      },
      '.article-item-thumb': {
        // transform: 'scale3d(1.1, 1.1, 1)',
        // WebkitTransform: 'scale3d(1.1, 1.1, 1)',
      },
    },
  },
};
