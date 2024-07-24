'use client';

import SkeletonImage from '@/components/common/SkeletonImage';
import AppLink from '@/components/common/AppLink';

import { truncateTextByLine } from '@/utils/css-helper.util';
import { IArticle } from '@/interfaces/IArticle';

import { Box, Button, Grid, Typography, useTheme } from '@mui/material';
import { useViewport } from '@/hooks/useViewPort';
import { Breakpoint } from '@/constants/break-point';

const Latest = ({ data }: { data: IArticle[] }) => {
  const theme = useTheme();
  const { width } = useViewport();
  return (
    <Box sx={{ mb: 3 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 2,
        }}>
        <Typography sx={{ fontSize: 18, fontWeight: 600 }}>Mới nhất</Typography>
        <AppLink href={'/blog'}>
          <Button
            sx={{
              color: theme.palette.mode === 'light' ? '' : '#fff',
              fontSize: 13,
              textTransform: 'capitalize',
            }}>
            View all
          </Button>
        </AppLink>
      </Box>
      <Grid container rowSpacing={4} columnSpacing={2.5}>
        {data
          ?.slice(0, (width as number) < Breakpoint.Desktop ? 3 : 4)
          .map((item, index) => (
            <Grid key={index} item xs={12} lg={6}>
              <Box
                component={AppLink}
                href={`blog/${item._id}`}
                sx={{
                  ':hover': {
                    '& img': {
                      transform: 'scale(1.05)',
                    },
                    '& span': {
                      textDecoration: 'underline',
                    },
                  },
                }}>
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: { xs: '220px', lg: '220px' },
                    mb: 1,
                    border: '1px solid #eee',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    '& img': {
                      objectFit: 'cover',
                      transition: 'all 0.5s ease',
                    },
                  }}>
                  <SkeletonImage
                    src={item.thumbnail_image}
                    alt={item.summary}
                    fill
                  />
                </Box>
                <Typography
                  component={'span'}
                  sx={{
                    fontSize: 16,
                    fontWeight: 500,
                    ...truncateTextByLine(2),
                  }}>
                  {item.title}
                </Typography>
              </Box>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default Latest;
