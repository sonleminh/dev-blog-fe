'use client';

import AppLink from '@/components/common/AppLink';
import SkeletonImage from '@/components/common/SkeletonImage';
import { IArticle } from '@/interfaces/IArticle';
import { truncateTextByLine } from '@/utils/css-helper.util';
import { Box, Grid, Typography } from '@mui/material';
// import AppLink from '@/components/common/AppLink';

const Latest = ({ data }: { data: IArticle[] }) => {
  return (
    <Box sx={{ mb: 6 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mb: 2,
        }}>
        <Typography sx={{ fontSize: 18, fontWeight: 600 }}>Mới nhất</Typography>
        <Typography sx={{ fontSize: 12 }}>View all</Typography>
      </Box>
      <Grid container rowSpacing={4} columnSpacing={2.5}>
        {data?.map((item, index) => (
          <Grid key={index} item xs={6}>
            <Box component={AppLink} href={`blog/${item._id}`}>
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
                  },
                }}>
                <SkeletonImage src={item.thumbnail_image} alt='cc' fill />
              </Box>
            </Box>
            <Typography
              // component={AppLink}
              // href={'/blog/1'}
              sx={{
                mb: 1,
                fontSize: 16,
                fontWeight: 500,
                ...truncateTextByLine(2),
              }}>
              {item.title}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Latest;
