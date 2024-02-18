import WindowIcon from '@mui/icons-material/Window';
import LayoutContainer from '../layout-container';
import HeaderLogo from './HeaderLogo';
import { Box, List, ListItem, SxProps, Theme } from '@mui/material';
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
            }}>
            <HeaderLogo />
            <List sx={MenuListStyle}>
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

const MenuListStyle: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  ml: 2,
  whiteSpace: 'nowrap',
  '& li': {
    position: 'relative',
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
    ':hover': {
      ':before': {
        transform: 'scaleX(1)',
      },
    },
  },
};
