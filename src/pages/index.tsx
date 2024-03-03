import Banner from '@/components/_pages/trang-chu/banner';
import Latest from '@/components/_pages/trang-chu/latest';
import Programming from '@/components/_pages/trang-chu/programming';
import Sidebar from '@/components/_pages/trang-chu/sidebar';
import Layout from '@/components/sharing/layout';
import LayoutContainer from '@/components/sharing/layout-container';
import { Box, Grid } from '@mui/material';
import { useSession } from 'next-auth/react';

export default function Home() {
  const { data, status } = useSession();
  return (
    <LayoutContainer>
      <Box sx={{ py: 4 }}>
        <Banner />
        <Box sx={{ mt: 3 }}>
          <Grid container spacing={4}>
            <Grid item xs={8}>
              <Latest />
              <Programming />
            </Grid>
            <Grid
              item
              xs={4}
              sx={{ position: 'sticky', top: '0', height: '100%' }}>
              <Sidebar />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </LayoutContainer>
  );
}

Home.Layout = Layout;
