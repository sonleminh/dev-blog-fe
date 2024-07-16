import AppLink from '@/components/common/AppLink';
import LayoutContainer from '../layout-container';

import {
  Box,
  Button,
  Divider,
  Grid,
  List,
  ListItem,
  SxProps,
  Theme,
  Typography,
  useTheme,
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';

import NextJSLogo from '@/assests/nextjs-logo';
import HeaderLogo from '../header/HeaderLogo';
import NestLogo from '@/assests/nestjs-logo';
import MUILogo from '@/assests/mui-logo';

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
        <Grid container spacing={3} sx={FooterStyle}>
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
          <Grid item xs={4}>
            <Typography sx={{ mb: 3, fontSize: 20, fontWeight: 600 }}>
              Giới thiệu
            </Typography>
            <Typography className='footer-content'>
              Phát triển bởi Son Le vào năm 2024, là blog cá nhân chia sẻ kiến
              thức IT.
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography sx={{ mb: 2, fontSize: 20, fontWeight: 600 }}>
              Blog
            </Typography>
            <List sx={{ p: 0, li: { px: 0 } }}>
              <ListItem>
                <AppLink href={'/blog'} className='footer-content'>
                  Mới nhất
                </AppLink>
              </ListItem>
              <ListItem>
                <AppLink href={'/tag/develop'} className='footer-content'>
                  Lập trình
                </AppLink>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={3}>
            <Typography sx={{ mb: 3, fontSize: 20, fontWeight: 600 }}>
              Follow me
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
          </Grid>
        </Grid>
        <Divider sx={{ bgcolor: '#696969' }} />
        <Box sx={{ mt: 2, textAlign: 'center' }}>
          <Typography sx={{ mb: 2, fontSize: 14, color: '#e1e1e1' }}>
            Copyright © 2024 Atlas Two | Powered by WordPress .
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <NextJSLogo />
            <NestLogo />
            <MUILogo />
          </Box>
        </Box>
      </LayoutContainer>
    </Box>
  );
};

export default Footer;

const FooterStyle: SxProps<Theme> = {
  pb: 4,
  '.footer-content': {
    fontSize: 14,
    color: '#bdbdbd',
  },
};
