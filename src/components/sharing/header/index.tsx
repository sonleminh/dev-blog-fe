'use client';
import WindowIcon from '@mui/icons-material/Window';
import LayoutContainer from '../layout-container';
import HeaderLogo from './HeaderLogo';
import {
  Box,
  Button,
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
// import { signOut, useSession } from 'next-auth/react';
import SkeletonImage from '@/components/common/SkeletonImage';
import { useEffect, useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getRequest } from '@/utils/fetch-client';
import { signoutAPI } from '@/services/auth';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

// import { useAuthContext } from '@/contexts/AuthContext';

const Header = () => {
  // console.log('auth:', auth?.user);
  const router = useRouter();
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

  // console.log('auth:', auth?.user?.name);

  const handleSignout = async () => {
    const result = await getRequest(
      `http://localhost:8080/admin/api/auth/signout`
    );
    // console.log('dangxuated');
    router.push('/dang-nhap');
  };

  return (
    <>
      <LayoutContainer>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 80,
            // fontWeight: 600,
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
