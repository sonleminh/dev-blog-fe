import AppLink from '../AppLink';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Breadcrumbs as BaseBreadcrumbs, Typography } from '@mui/material';

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
      separator={<NavigateNextIcon sx={{ fontSize: 16 }} />}
      aria-label='breadcrumb'
      sx={{
        '.MuiBreadcrumbs-ol': {
          width: '100%',
          flexWrap: 'nowrap',
        },
        '.MuiBreadcrumbs-li': {
          lineHeight: '12px',
          ':last-child': {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          },
        },
      }}>
      {options?.map((item, index) => {
        return (
          <AppLink key={index} href={item.link}>
            <Typography
              sx={{
                fontSize: { xs: 13, lg: 16 },
                textTransform: 'capitalize',
              }}>
              {item.label}
            </Typography>
          </AppLink>
        );
      })}
    </BaseBreadcrumbs>
  );
};

export default Breadcrumbs;
