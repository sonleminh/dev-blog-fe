import React, { ReactNode } from 'react';
import { Box } from '@mui/material';

const LayoutContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Box sx={{ maxWidth: { lg: 1070 }, margin: '0 auto' }}>{children}</Box>
  );
};

export default LayoutContainer;
