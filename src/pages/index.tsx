import Banner from '@/components/_pages/trang-chu';
import SkeletonImage from '@/components/common/SkeletonImage';
import LayoutContainer from '@/components/sharing/layout-container';
import { Box, Grid, SxProps, Theme, Typography } from '@mui/material';
import { truncateTextByLine } from '@/utils/css-helper.util';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function Home() {
  return (
    <LayoutContainer>
      <Box sx={{ py: 4 }}>
        <Banner />
        <Box sx={{ mt: 3 }}>
          <Grid container spacing={4}>
            <Grid item xs={8}>
              <Box sx={{ mb: 6 }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    mb: 2,
                  }}>
                  <Typography sx={{ fontSize: 18, fontWeight: 600 }}>
                    Mới nhất
                  </Typography>
                  <Typography sx={{ fontSize: 12 }}>View all</Typography>
                </Box>
                <Grid container rowSpacing={4} columnSpacing={2.5}>
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
                          mb: 1,
                          fontSize: 20,
                          fontWeight: 600,
                          ...truncateTextByLine(2),
                        }}>
                        Front-end developer lên trình như thế nào? Bạn đã thực
                        sự hiểu về Front-End?
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
                            <Typography sx={{ fontSize: 14 }}>
                              Son Le
                            </Typography>
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
              <Box sx={ProgramingStyle}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    mb: 2,
                  }}>
                  <Typography sx={{ fontSize: 18, fontWeight: 600 }}>
                    Lập trình
                  </Typography>
                  <Box sx={{ display: 'flex' }}>
                    <Box className={`arrow-left`}>
                      <KeyboardArrowLeftIcon />
                    </Box>
                    <Box className={`arrow-right`}>
                      <KeyboardArrowRightIcon />
                    </Box>
                  </Box>
                </Box>
                <Swiper
                  slidesPerView={3}
                  spaceBetween={12}
                  navigation={{
                    prevEl: '.arrow-left',
                    nextEl: '.arrow-right',
                  }}
                  modules={[Navigation]}
                  className='mySwiper'>
                  {[1, 2, 3, 4, 5].map((item, index) => (
                    <SwiperSlide key={index}>
                      <Box
                        sx={{
                          position: 'relative',
                          width: '100%',
                          height: { xs: '160px', sm: '160px', md: '160px' },
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
                        sx={{ fontWeight: 600, ...truncateTextByLine(2) }}>
                        Front-end developer lên trình như thế nào? Bạn đã thực
                        sự hiểu về Front-End?
                      </Typography>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Box>
            </Grid>
            <Grid
              item
              xs={4}
              sx={{ position: 'sticky', top: '0', height: '500px' }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  mb: 2,
                }}>
                <Typography sx={{ fontSize: 18, fontWeight: 600 }}>
                  Mới nhất
                </Typography>
                <Typography sx={{ fontSize: 12 }}>View all</Typography>
              </Box>
              {[1, 2, 3].map((item, index) => (
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
                  <Box sx={{ width: '72%' }}>
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
              <Box>
                <Typography sx={{ fontSize: 18, fontWeight: 600 }}>
                  Danh mục
                </Typography>
                <Grid container spacing={2}>
                  {[1, 2, 3, 4].map((item, index) => (
                    <Grid key={index} item xs={6}>
                      <Box sx={{ display: 'flex' }}>
                        <Box
                          sx={{
                            position: 'relative',
                            width: '60px',
                            height: { xs: '56px', sm: '56px', md: '56px' },
                            mr: 1,
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
                          <Typography>STYLE</Typography>
                          <Typography>4 POSTS</Typography>
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </LayoutContainer>
  );
}

const ProgramingStyle: SxProps<Theme> = {
  '.arrow-left, .arrow-right': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '26px',
    height: '26px',
    bgcolor: (theme) => theme.palette.primary.light,
    color: '#fff',
    borderRadius: '10px',
    '& svg': {
      fontSize: 18,
    },
    cursor: 'pointer',
    transition: 'all .2s linear',
  },
  '.arrow-right': {
    ml: 0.5,
  },
  '.swiper-button-disabled': {
    bgcolor: '#F0F2FE',
    color: '#000',
    cursor: 'default',
  },
};
