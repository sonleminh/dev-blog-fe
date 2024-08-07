import LayoutContainer from '@/components/sharing/layout-container';
import { Box, Typography } from '@mui/material';

export default async function NotFound() {
  return (
    <LayoutContainer>
      <Box sx={{ p: 2, textAlign: 'center' }}>
        <Typography sx={{ fontSize: 20 }}>
          <Typography component='span'>404</Typography> |{' '}
          <Typography component='span'>Not found</Typography>
        </Typography>
      </Box>
    </LayoutContainer>
  );
}
