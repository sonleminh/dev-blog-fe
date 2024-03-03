import Latest from '@/components/_pages/trang-chu/latest';
import Sidebar from '@/components/_pages/trang-chu/sidebar';
import Breadcrumbs, {
  IBreadcrumbOption,
} from '@/components/common/Breadcrumbs';
import SkeletonImage from '@/components/common/SkeletonImage';
import Layout from '@/components/sharing/layout';
import LayoutContainer from '@/components/sharing/layout-container';
import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

const Blog = () => {
  const breadcrumbList: IBreadcrumbOption[] = [
    { link: '/', label: 'HOME' },
    { link: '', label: 'Lập trình' },
  ];
  return (
    <LayoutContainer>
      <Box sx={{ py: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={8}>
            <Latest />
          </Grid>
          <Grid
            item
            xs={4}
            sx={{ position: 'sticky', top: '0', height: '100%' }}>
            <Sidebar />
          </Grid>
        </Grid>
      </Box>
    </LayoutContainer>
  );
};

Blog.Layout = Layout;

export default Blog;
