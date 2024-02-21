import { Theme } from '@emotion/react';
import { Box, Grid, SxProps, Typography } from '@mui/material';
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
        }}>
        <Grid
          item
          sx={{ gridRow: '1/ span 2', bgcolor: 'pink' }}
          className='article-item'>
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
  height: 300,
  '.article-item': {
    background:
      'url("https://topdev.vn/blog/wp-content/uploads/2020/08/Thumnail-324x235.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
};
