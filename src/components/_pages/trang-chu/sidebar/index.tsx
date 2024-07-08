import AppLink from '@/components/common/AppLink';
import SkeletonImage from '@/components/common/SkeletonImage';
import { IArticle } from '@/interfaces/IArticle';
import { getArticleListAPI } from '@/services/article';
import { truncateTextByLine } from '@/utils/css-helper.util';
import { Box, Button, Grid, SxProps, Theme, Typography } from '@mui/material';
import moment from 'moment';

const Sidebar = async () => {
  const { trending_articles, tags } = await getArticleListAPI();
  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mb: 2,
          }}>
          <Typography sx={{ fontSize: 18, fontWeight: 600 }}>
            Thịnh hành
          </Typography>
          <Typography sx={{ fontSize: 12 }}>View all</Typography>
        </Box>
        {trending_articles?.map((item) => (
          <Box
            key={item._id}
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
              <SkeletonImage src={item.thumbnail_image} alt={item.title} fill />
            </Box>
            <Box sx={{ width: '72%' }}>
              <Typography
                sx={{
                  mb: 1,
                  fontSize: 14,
                  fontWeight: 700,
                  ...truncateTextByLine(2),
                }}>
                {item.title}
              </Typography>
              <Typography sx={{ fontSize: 12 }}>
                {moment(item.createdAt).format('MMMM D, YYYY')}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
      <Box mb={4}>
        <Typography sx={{ mb: 2, fontSize: 18, fontWeight: 600 }}>
          Tags
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
          }}>
          {tags?.map((item, index) => (
            <AppLink key={index} href={'/'}>
              <Button
                variant='contained'
                sx={{
                  p: '4px 8px',
                  bgcolor: '#eee',
                  color: '#000',
                  fontSize: 13,
                  borderRadius: '4px',
                  textTransform: 'none',
                  boxShadow: 'none',
                  ':hover': {
                    // bgcolor: (theme) => theme.palette.primary.light,
                    color: '#fff',
                  },
                }}>
                {item.label}
              </Button>
            </AppLink>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;

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
