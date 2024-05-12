import { Box, Grid, Typography } from '@mui/material';
import LayoutContainer from '../layout-container';
import SkeletonImage from '@/components/common/SkeletonImage';
import { truncateTextByLine } from '@/utils/css-helper.util';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box
      sx={{
        padding: '50px 0 30px',
        bgcolor: '#000',
        color: '#fff',
      }}>
      <LayoutContainer>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Typography sx={{ mb: 3, fontSize: 20, fontWeight: 600 }}>
              Daily
            </Typography>
            <Box>
              {[1, 2].map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    mb: 2,
                  }}>
                  <Box
                    sx={{
                      position: 'relative',
                      width: '72px',
                      height: { xs: '72px', sm: '72px', md: '72px' },
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
                  <Box sx={{ width: '75%' }}>
                    <Typography
                      sx={{
                        mb: 1,
                        fontSize: 14,
                        fontWeight: 700,
                        ...truncateTextByLine(2),
                      }}>
                      Front-end developer lên trình như thế nào? Bạn đã thực sự
                      hiểu về Front-End?
                    </Typography>
                    <Typography sx={{ fontSize: 12 }}>
                      February 16, 2024
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Typography sx={{ mb: 3, fontSize: 20, fontWeight: 600 }}>
              Weekly
            </Typography>
            <Box>
              {[1, 2].map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    mb: 2,
                  }}>
                  <Box
                    sx={{
                      position: 'relative',
                      width: '72px',
                      height: { xs: '72px', sm: '72px', md: '72px' },
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
                  <Box sx={{ width: '75%' }}>
                    <Typography
                      sx={{
                        mb: 1,
                        fontSize: 14,
                        fontWeight: 700,
                        ...truncateTextByLine(2),
                      }}>
                      Front-end developer lên trình như thế nào? Bạn đã thực sự
                      hiểu về Front-End?
                    </Typography>
                    <Typography sx={{ fontSize: 12 }}>
                      February 16, 2024
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Typography sx={{ mb: 3, fontSize: 20, fontWeight: 600 }}>
              Subscribe Us
            </Typography>
            <Typography>
              Get the latest creative news from Atlas magazine
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Typography sx={{ fontSize: 14 }}>
            Copyright © 2024 Atlas Two | Powered by WordPress .
          </Typography>
          <Box
            sx={{
              '& svg': {
                m: '0 8px',
                fontSize: 18,
              },
            }}>
            <FacebookIcon />
            <XIcon />
            <InstagramIcon />
            <LinkedInIcon />
          </Box>
        </Box>
      </LayoutContainer>
    </Box>
  );
};

export default Footer;
