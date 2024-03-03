import { Box } from '@mui/material';
import React, { ReactNode } from 'react';

const LayoutContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Box sx={{ maxWidth: { xl: 1070 }, margin: '0 auto' }}>{children}</Box>
  );
};

export default LayoutContainer;
