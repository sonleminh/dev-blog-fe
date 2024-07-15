'use client';

import AppLink from '@/components/common/AppLink';
import SkeletonImage from '@/components/common/SkeletonImage';
import { IArticle } from '@/interfaces/IArticle';
import { truncateTextByLine } from '@/utils/css-helper.util';
import { Box, Grid, Typography } from '@mui/material';

const Latest = ({ data }: { data: IArticle[] }) => {
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
        <AppLink href={'/blog'} sx={{ fontSize: 12 }}>
          View all
        </AppLink>
      </Box>
      <Grid container rowSpacing={4} columnSpacing={2.5}>
        {data?.map((item, index) => (
          <Grid key={index} item xs={6}>
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
                  height: { xs: '250px', sm: '250px', md: '250px' },
                  mb: 1,
                  borderRadius: '8px',
                  overflow: 'hidden',
                  '& img': {
                    objectFit: 'cover',
                    transition: 'all 0.5s ease',
                  },
                }}>
                <SkeletonImage src={item.thumbnail_image} alt='cc' fill />
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
