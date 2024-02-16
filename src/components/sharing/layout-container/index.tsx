import { Box } from '@mui/material';
import React, { ReactNode } from 'react';

const LayoutContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Box px={{ xs: '4%', sm: '5%', md: '6%', lg: '7%', xl: '21%' }}>
      {children}
    </Box>
  );
};

export default LayoutContainer;
