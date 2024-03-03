import React, { ReactNode } from 'react';
import { Stack } from '@mui/material';
import { Breadcrumbs as BaseBreadcrumbs } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import AppLink from '../AppLink';

interface IBreadcrumbsProps {
  options: IBreadcrumbOption[];
}

export interface IBreadcrumbOption {
  link: string;
  label: string;
}

const Breadcrumbs = ({ options }: IBreadcrumbsProps) => {
  return (
    <BaseBreadcrumbs
      separator={<NavigateNextIcon sx={{ fontSize: 14 }} />}
      aria-label='breadcrumb'
      sx={{
        '.MuiBreadcrumbs-separator': {
          margin: '0 2px',
        },
        '.MuiBreadcrumbs-li': {
          lineHeight: '24px',
        },
      }}>
      {options?.map((item, index) => {
        return (
          <AppLink key={index} href={item.link} sx={{ fontSize: 12 }}>
            {item.label}
          </AppLink>
        );
      })}
    </BaseBreadcrumbs>
  );
};

export default Breadcrumbs;
