import { Box, Button, Grid, Typography, useTheme } from '@mui/material';
import LayoutContainer from '../layout-container';
import SkeletonImage from '@/components/common/SkeletonImage';
import { truncateTextByLine } from '@/utils/css-helper.util';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HeaderLogo from '../header/HeaderLogo';
import AppLink from '@/components/common/AppLink';

const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        padding: '50px 0 30px',
        bgcolor: theme.palette.mode === 'light' ? '#000' : '#222',
        color: '#fff',
      }}>
      <LayoutContainer>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Button
              component={AppLink}
              href='/'
              sx={{
                p: 0,
                mb: 4,
                border: '1px solid #fff',
              }}>
              <HeaderLogo />
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Typography sx={{ mb: 3, fontSize: 20, fontWeight: 600 }}>
              Giới thiệu
            </Typography>
            <Typography sx={{ fontSize: 14 }}>
              Phát triển bởi Son Le vào năm 2024, là blog cá nhân chia sẻ kiến
              thức IT.
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography sx={{ mb: 3, fontSize: 20, fontWeight: 600 }}>
              Weekly
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography sx={{ mb: 3, fontSize: 20, fontWeight: 600 }}>
              Subscribe Us
            </Typography>
            <Typography>
              Get the latest creative news from Atlas magazine
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Typography sx={{ fontSize: 14 }}>
            Copyright © 2024 Atlas Two | Powered by WordPress .
          </Typography>
          <Box
            sx={{
              '& svg': {
                m: '0 8px',
                fontSize: 18,
              },
            }}>
            <FacebookIcon />
            <XIcon />
            <InstagramIcon />
            <LinkedInIcon />
          </Box>
        </Box>
      </LayoutContainer>
    </Box>
  );
};

export default Footer;
