'use client';

import React from 'react';

import Footer from '../footer';
import Header from '../header';

import { ColorModeContext } from '@/contexts/ColorModeContext';

import Brightness3Icon from '@mui/icons-material/Brightness3';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Box, useTheme } from '@mui/material';

type LayoutType = {
  children?: React.ReactNode;
};

const Layout = ({ children }: LayoutType) => {
  const theme = useTheme();
  const context = React.useContext(ColorModeContext);
  return (
    <>
      <Header />
      <Box
        sx={{
          position: 'fixed',
          bottom: '3%',
          right: '3%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '32px',
          height: '32px',
          bgcolor: theme.palette.mode === 'light' ? '#000' : '#fff',
          color: theme.palette.mode === 'light' ? '#fff' : '#000',
          borderRadius: 2,
          cursor: 'pointer',
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
