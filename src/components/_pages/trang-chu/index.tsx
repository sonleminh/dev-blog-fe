import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

const Banner = () => {
  return (
    <Box>
      <Grid
        container
        sx={{ display: 'grid', gridTemplateColumns: 'auto auto' }}>
        <Grid item sx={{ gridRow: '1/ span 2', bgcolor: 'pink' }}>
          <Typography>
            Front-end developer lên trình như thế nào? Bạn đã thực sự hiểu về
            Front-End?
          </Typography>
          <Typography>February 16, 2024</Typography>
        </Grid>
        <Grid item sx={{ bgcolor: 'pink' }}>
          <Typography>
            Front-end developer lên trình như thế nào? Bạn đã thực sự hiểu về
            Front-End?
          </Typography>
          <Typography>February 16, 2024</Typography>
        </Grid>
        <Grid item sx={{ bgcolor: 'pink' }}>
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
