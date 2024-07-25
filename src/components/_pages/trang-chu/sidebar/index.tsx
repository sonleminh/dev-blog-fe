import AppLink from '@/components/common/AppLink';
import SkeletonImage from '@/components/common/SkeletonImage';
import { TagList } from './components/TagList';

import { getArticleListAPI } from '@/services/article';
import { truncateTextByLine } from '@/utils/css-helper.util';
import { Box, Grid, Typography } from '@mui/material';
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
            mb: '25px',
          }}>
          <Typography sx={{ fontSize: 18, fontWeight: 600 }}>
            Thịnh hành
          </Typography>
        </Box>
        {trending_articles?.map((item) => (
          <AppLink
            href={`/blog/${item._id}`}
            key={item._id}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              mb: 2,
            }}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Box
                  sx={{
                    position: 'relative',
                    height: { xs: '72px', sm: '72px', md: '72px' },
                    borderRadius: '4px',
                    overflow: 'hidden',
                    '& img': {
                      objectFit: 'cover',
                    },
                  }}>
                  <SkeletonImage
                    src={item.thumbnail_image}
                    alt={item.title}
                    fill
                  />
                </Box>
              </Grid>
              <Grid item xs={8}>
                <Typography
                  sx={{
                    mb: 1,
                    fontSize: 14,
                    fontWeight: 500,
                    ...truncateTextByLine(2),
                  }}>
                  {item.title}
                </Typography>
                <Typography sx={{ fontSize: 12 }}>
                  {moment(item.createdAt).format('MMMM D, YYYY')}
                </Typography>
              </Grid>
            </Grid>
          </AppLink>
        ))}
      </Box>
      <Box mb={4}>
        <TagList data={tags} />
      </Box>
    </Box>
  );
};

export default Sidebar;
