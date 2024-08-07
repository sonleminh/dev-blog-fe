'use client';

import React from 'react';

import Footer from '../footer';
import Header from '../header';

import { ColorModeContext } from '@/contexts/ColorModeContext';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Box, useTheme } from '@mui/material';
import { useRouter } from 'next/navigation';

type LayoutType = {
  children?: React.ReactNode;
};

const Layout = ({ children }: LayoutType) => {
  const theme = useTheme();
  const context = React.useContext(ColorModeContext);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const router = useRouter();
  // console.log('router:', router.);

  return (
    <>
      <Header />
      <Box
        sx={{
          position: 'fixed',
          bottom: { xs: '11.5%', lg: '11%' },
          right: '3%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '36px',
          height: '36px',
          bgcolor: '#000',
          color: '#fff',
          border: '1px solid #696969',
          borderRadius: 2,
          cursor: 'pointer',
          zIndex: 69,
        }}
        onClick={handleScrollToTop}>
        <KeyboardArrowUpIcon sx={{ fontSize: 24 }} />
      </Box>
      <Box
        sx={{
          position: 'fixed',
          bottom: '5%',
          right: '3%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '36px',
          height: '36px',
          bgcolor: '#000',
          color: '#fff',
          border: '1px solid #696969',
          borderRadius: 2,
          cursor: 'pointer',
          zIndex: 69,
        }}
        onClick={context.toggleColorMode}>
        {theme.palette.mode === 'light' ? (
          <Brightness3Icon sx={{ fontSize: 13 }} />
        ) : (
          <LightModeIcon sx={{ fontSize: 13 }} />
        )}
      </Box>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
