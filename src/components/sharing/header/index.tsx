import WindowIcon from '@mui/icons-material/Window';
import LayoutContainer from '../layout-container';
import HeaderLogo from './HeaderLogo';
import {
  Box,
  Divider,
  List,
  ListItem,
  SxProps,
  Theme,
  Typography,
} from '@mui/material';
import AppLink from '@/components/common/AppLink';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { signOut, useSession } from 'next-auth/react';
import SkeletonImage from '@/components/common/SkeletonImage';
import { useEffect, useRef, useState } from 'react';
import { useAuthContext } from '@/contexts/AuthContext';

const Header = () => {
  const auth = useAuthContext();
  console.log(auth);
  const { data, status } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
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
            {data || auth?.user ? (
              <Box
                sx={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  height: 40,
                  p: '4px 8px',
                  bgcolor: '#fff',
                  border: '2px solid #000',
                  borderRadius: 2,
                  cursor: 'pointer',
                }}
                onClick={() => setIsOpen(!isOpen)}>
                <Box
                  sx={{
                    position: 'relative',
                    width: '28px',
                    height: { xs: '28px' },
                    mr: 1,
                    borderRadius: '50%',
                    overflow: 'hidden',
                    '& img': {
                      objectFit: 'cover',
                    },
                  }}>
                  <SkeletonImage
                    src={
                      data
                        ? (data?.user?.image as string)
                        : 'https://firebasestorage.googleapis.com/v0/b/dev-blog-7a694.appspot.com/o/cau-hoi-cho-nha-tuyen-dung-it-534x462.png?alt=media&token=cae6b033-a0cd-4a06-a24f-f5a60c0691ac'
                    }
                    alt='cc'
                    fill
                  />
                </Box>
                <Typography sx={{ fontWeight: 500 }}>
                  {data?.user?.name || auth?.user?.name}
                </Typography>
                {isOpen ? (
                  <Box
                    ref={dropdownRef}
                    sx={{
                      position: 'absolute',
                      top: 50,
                      left: 0,
                      width: '100%',
                      bgcolor: '#fff',
                      borderRadius: '8px',
                      boxShadow: 2,
                      fontWeight: 500,
                      zIndex: 69,
                    }}>
                    <List
                      sx={{
                        '.MuiListItem-root': {
                          p: '0 16px',
                          ':hover': {
                            bgcolor: '#eee',
                          },
                        },
                      }}>
                      <ListItem>
                        <AppLink href={'/profile'}>
                          <Typography sx={{ p: '5px 0', fontWeight: 500 }}>
                            Profile
                          </Typography>
                        </AppLink>
                      </ListItem>
                      <Divider />
                      <ListItem>
                        <Typography
                          sx={{ p: '5px 0', fontWeight: 500 }}
                          onClick={() =>
                            signOut({ callbackUrl: '/dang-nhap' })
                          }>
                          Sign out
                        </Typography>
                      </ListItem>
                    </List>
                  </Box>
                ) : (
                  <></>
                )}
              </Box>
            ) : (
              <Box
                component={AppLink}
                href={'/dang-nhap'}
                sx={{
                  display: 'flex',
                  height: '40px',
                  p: '4px 8px',
                  alignItems: 'center',
                  border: '2px solid #000',
                  borderRadius: 2,
                }}>
                <AccountCircleIcon sx={{ mr: 0.5 }} />
                Đăng nhập
              </Box>
            )}

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
