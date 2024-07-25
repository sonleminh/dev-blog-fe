'use client';

import AppLink from '@/components/common/AppLink';
import { Button, useTheme } from '@mui/material';
import React from 'react';

export const TagItem = ({
  data,
}: {
  data: { value: string; label: string };
}) => {
  const theme = useTheme();
  return (
    <AppLink href={`/tag/${data?.value}`}>
      <Button
        variant='contained'
        sx={{
          p: '4px 8px',
          bgcolor: '#000',
          color: '#fff',
          fontSize: 13,
          border:
            theme.palette.mode === 'light'
              ? '1px solid #eee'
              : '1px solid #696969',
          borderRadius: '4px',
          textTransform: 'none',
          boxShadow: 'none',
          ':hover': {
            bgcolor: (theme) =>
              theme.palette.mode === 'light' ? '#000' : '#fff',
            color: (theme) =>
              theme.palette.mode === 'light' ? '#fff' : '#000',
          },
        }}>
        #{data.label}
      </Button>
    </AppLink>
  );
};
