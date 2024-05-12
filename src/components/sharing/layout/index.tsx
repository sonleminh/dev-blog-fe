'use client';
import React from 'react';
import Header from '../header';
import Footer from '../footer';
import { Box, useTheme } from '@mui/material';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import LightModeIcon from '@mui/icons-material/LightMode';
import { ColorModeContext } from '@/contexts/ColorModeContext';

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
          bgcolor: '#000',
          color: '#fff',
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
