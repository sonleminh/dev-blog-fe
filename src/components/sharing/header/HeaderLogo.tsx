import React from 'react';
import { Dosis } from 'next/font/google';
import AppLink from '@/components/common/AppLink';
import { Box, Typography } from '@mui/material';

const dosis = Dosis({ subsets: ['latin'] });

const HeaderLogo = () => {
  return (
    <Box
      component={AppLink}
      href={'/'}
      sx={{
        p: '12px 14px',
        bgcolor: '#000',
        color: '#fff',
        fontSize: 18,
        fontWeight: 700,
        borderRadius: '8px',
      }}
      className={dosis.className}>
      <span> &lt; devblog / &gt;</span>
    </Box>
  );
};

export default HeaderLogo;
