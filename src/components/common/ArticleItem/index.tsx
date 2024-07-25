'use client';

import { IArticle } from '@/interfaces/IArticle';
import React from 'react';
import AppLink from '../AppLink';
import { Box, Grid, Typography, useTheme } from '@mui/material';
import SkeletonImage from '../SkeletonImage';
import moment from 'moment';
import { truncateTextByLine } from '@/utils/css-helper.util';

export const ArticleItem = ({ data }: { data: IArticle }) => {
  const theme = useTheme();
  return (
    <Grid item xs={12}>
      <AppLink
        href={`/blog/${data?._id}`}
        sx={{
          ':hover': {
            '.article-title': {
              textDecoration: 'underline',
            },
          },
        }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: { xs: 80, lg: 150 },
                border:
                  theme.palette.mode === 'light'
                    ? '1px solid #eee'
                    : '1px solid #363636',
                borderRadius: '8px',
                overflow: 'hidden',
                '& img': {
                  objectFit: 'cover',
                },
              }}>
              <SkeletonImage
                src={data?.thumbnail_image}
                alt={data?.title}
                fill
              />
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Typography
              className='article-title'
              sx={{
                mb: 0.5,
                fontSize: { xs: 15, lg: 18 },
                fontWeight: 600,
                ...truncateTextByLine(2),
              }}>
              {data?.title}
            </Typography>
            <Typography sx={{ mb: 0.5, fontSize: { xs: 11, lg: 11 } }}>
              {moment(data?.createdAt).format('MMMM D, YYYY')}
            </Typography>
            <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
              <Typography
                sx={{
                  fontSize: 13,
                  color: '#767676',
                  ...truncateTextByLine(2),
                }}>
                {data?.summary}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </AppLink>
    </Grid>
  );
};
