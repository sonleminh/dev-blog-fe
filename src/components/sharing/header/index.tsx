import WindowIcon from '@mui/icons-material/Window';
import LayoutContainer from '../layout-container';
import HeaderLogo from './HeaderLogo';
import { Box, List, ListItem } from '@mui/material';
import AppLink from '@/components/common/AppLink';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
  return (
    <>
      <LayoutContainer>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 80,
            fontWeight: 600,
          }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              '& ul': {
                '& li': {
                  ':before': {
                    transform: 'scaleX(1)',
                  },
                },
              },
            }}>
            <Box
              sx={{
                height: '20px',
                mr: 3,
                svg: { width: '20px', fontSize: 16 },
              }}>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'>
                <path
                  fill='currentColor'
                  d='M4 1h1s3 0 3 3v1s0 3-3 3H4S1 8 1 5V4s0-3 3-3m0 10h1s3 0 3 3v1s0 3-3 3H4s-3 0-3-3v-1s0-3 3-3M14 1h1s3 0 3 3v1s0 3-3 3h-1s-3 0-3-3V4s0-3 3-3m0 10h1s3 0 3 3v1s0 3-3 3h-1s-3 0-3-3v-1s0-3 3-3'></path>
              </svg>
            </Box>
            <HeaderLogo />
            <List
              sx={{
                display: 'flex',
                alignItems: 'center',
                ml: 2,
                whiteSpace: 'nowrap',
                '& li': {
                  position: 'relative',
                  // ':hover': {
                  ':before': {
                    position: 'absolute',
                    content: '""',
                    height: '3px',
                    right: '0',
                    bottom: '0',
                    width: '100%',
                    bgcolor: '#000',
                    transition: 'transform .2s',
                    transform: 'scaleX(0)',
                    transformOrigin: 'top right',
                  },
                  // },
                },
              }}>
              <ListItem>
                <AppLink href={'/'}>Blog</AppLink>
              </ListItem>
              <ListItem>
                <AppLink href={'/'}>Liên hệ</AppLink>
              </ListItem>
            </List>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}>
            <Box
              sx={{
                display: 'flex',
                p: '4px 8px',
                alignItems: 'center',
                border: '2px solid #000',
                borderRadius: 2,
              }}>
              <AccountCircleIcon sx={{ mr: 0.5 }} />
              Đăng nhập
            </Box>
            <SearchIcon sx={{ ml: 2 }} />
          </Box>
        </Box>
      </LayoutContainer>
    </>
  );
};

export default Header;
