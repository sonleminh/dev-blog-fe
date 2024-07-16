import React from 'react';

import { Box, List, ListItem, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AppLink from '@/components/common/AppLink';

type TInitDataRes = {
  tags?: { value: string; label: string }[];
};

export const MenuDropDown = ({ data }: { data?: TInitDataRes }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        pb: 1,
        ':hover': {
          '.dropdown-content': {
            display: 'block',
          },
        },
      }}>
      <Box
        className='dropdown-btn'
        sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography sx={{ mr: 0.5 }}>Lập Trình</Typography>{' '}
        <KeyboardArrowDownIcon />
      </Box>
      <List
        className='dropdown-content'
        sx={{
          position: 'absolute',
          top: '32px',
          left: 0,
          zIndex: 69,
          display: 'none',
          bgcolor: '#fff',
          boxShadow: 2,
          borderRadius:
            'box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        }}>
        {data?.tags?.map((item) => (
          <ListItem
            key={item?.value}
            sx={{
              fontSize: 14,
              textTransform: 'capitalize',
              ':hover': {
                bgcolor: '#000',
                color: '#fff',
              },
            }}>
            <AppLink href={`/tag/${item?.value}`}>{item.label}</AppLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
