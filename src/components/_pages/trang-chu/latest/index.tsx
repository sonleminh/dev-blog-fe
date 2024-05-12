import React from 'react';
import SkeletonImage from '@/components/common/SkeletonImage';
import { Box, Grid, Typography } from '@mui/material';
import { truncateTextByLine } from '@/utils/css-helper.util';
// import AppLink from '@/components/common/AppLink';

const Latest = () => {
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
        {[1, 2, 3, 4].map((item, index) => (
          <Grid key={index} item xs={6}>
            <Box
            // component={AppLink} href={'/blog/1'}
            >
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
                <SkeletonImage
                  src={
                    'https://firebasestorage.googleapis.com/v0/b/dev-blog-7a694.appspot.com/o/cau-hoi-cho-nha-tuyen-dung-it-534x462.png?alt=media&token=cae6b033-a0cd-4a06-a24f-f5a60c0691ac'
                  }
                  alt='cc'
                  fill
                />
              </Box>
            </Box>
            <Typography
              // component={AppLink}
              // href={'/blog/1'}
              sx={{
                mb: 1,
                fontSize: 20,
                fontWeight: 600,
                ...truncateTextByLine(2),
              }}>
              Front-end developer lên trình như thế nào? Bạn đã thực sự hiểu về
              Front-End?
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Box
                sx={{
                  display: 'flex',
                }}>
                <Box
                  sx={{
                    position: 'relative',
                    width: '40px',
                    height: { xs: '40px', sm: '40px', md: '40px' },
                    mr: 1.5,
                    borderRadius: '50%',
                    overflow: 'hidden',
                    '& img': {
                      objectFit: 'cover',
                    },
                  }}>
                  <SkeletonImage
                    src={
                      'https://firebasestorage.googleapis.com/v0/b/dev-blog-7a694.appspot.com/o/cau-hoi-cho-nha-tuyen-dung-it-534x462.png?alt=media&token=cae6b033-a0cd-4a06-a24f-f5a60c0691ac'
                    }
                    alt='cc'
                    fill
                  />
                </Box>
                <Box>
                  <Typography sx={{ fontSize: 14 }}>Son Le</Typography>
                  <Typography
                    sx={{
                      color: '#999',
                      fontSize: 11,
                      textTransform: 'uppercase',
                    }}>
                    2 day ago
                  </Typography>
                </Box>
              </Box>
              <Typography
                // component={AppLink}
                // href={'/blog/1'}
                sx={{
                  color: (theme) => theme.palette.primary.light,
                  fontSize: 13,
                  lineHeight: '20px',
                }}>
                Đọc thêm
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Latest;
