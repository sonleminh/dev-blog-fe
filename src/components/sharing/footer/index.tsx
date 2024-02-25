import { Box, Grid, Typography } from '@mui/material';
import LayoutContainer from '../layout-container';

const Footer = () => {
  return (
    <Box
      sx={{
        padding: '50px 0 30px',
        bgcolor: '#000',
        color: '#fff',
      }}>
      <LayoutContainer>
        <Grid container>
          <Grid item xs={4}>
            <Typography>Daily</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography>Weekly</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography>Subscribe Us</Typography>
          </Grid>
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography>
            Copyright © 2024 Atlas Two | Powered by WordPress .
          </Typography>
          <Box>Copyright © 2024 Atlas Two | Powered by WordPress .</Box>
        </Box>
      </LayoutContainer>
    </Box>
  );
};

export default Footer;
