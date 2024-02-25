import Banner from '@/components/_pages/trang-chu';
import SkeletonImage from '@/components/common/SkeletonImage';
import LayoutContainer from '@/components/sharing/layout-container';
import { Box, Grid, Typography } from '@mui/material';
import { truncateTextByLine } from '@/utils/css-helper.util';

export default function Home() {
  return (
    <LayoutContainer>
      <Banner />
      <Box>
        <Grid container>
          <Grid item xs={8}>
            <Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography>Picked</Typography>
                <Typography>Picked</Typography>
              </Box>
              <Grid container spacing={3}>
                {[1, 2, 3, 4].map((item, index) => (
                  <Grid key={index} item xs={6}>
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
                    <Typography
                      sx={{
                        color: '#000',
                        fontSize: 20,
                        fontWeight: 600,
                        ...truncateTextByLine(2),
                      }}>
                      Front-end developer lên trình như thế nào? Bạn đã thực sự
                      hiểu về Front-End?
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={4}>
            c
          </Grid>
        </Grid>
      </Box>
    </LayoutContainer>
  );
}
