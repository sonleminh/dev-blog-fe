'use client';

import React from 'react';
import AppLink from '@/components/common/AppLink';
import { Box, Button, Typography, useTheme } from '@mui/material';

export const TagList = ({
  data,
}: {
  data: {
    value: string;
    label: string;
  }[];
}) => {
  const theme = useTheme();
  return (
    <Box>
      <Typography sx={{ mb: 2, fontSize: 18, fontWeight: 600 }}>
        Tags
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
        }}>
        {data?.map((item, index) => (
          <AppLink key={index} href={`/tag/${item?.value}`}>
            <Button
              variant='contained'
              sx={{
                p: '4px 8px',
                bgcolor: theme.palette.mode === 'light' ? '#eee' : '#000',
                color: theme.palette.mode === 'light' ? '#000' : '#fff',
                border:
                  theme.palette.mode === 'light' ? '' : '1px solid #696969',
                fontSize: 13,
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
              #{item.label}
            </Button>
          </AppLink>
        ))}
      </Box>
    </Box>
  );
};
