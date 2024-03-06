// import Layout from '@/components/sharing/layout';
import { EmptyLayout } from '@/components/sharing/layout/empty-layout';
import { ColorModeProvider } from '@/contexts/ColorModeContext';
import { AppPropsWithLayout } from '@/models';
import { CssBaseline } from '@mui/material';
import { Roboto } from 'next/font/google';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './index.css';
import { SessionProvider } from 'next-auth/react';
import { AuthContextProvider } from '@/contexts/AuthContext';
import { QueryClient, QueryClientProvider } from 'react-query';

const query = new QueryClient();

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;
  return (
    <QueryClientProvider client={query}>
      <AuthContextProvider>
        <ColorModeProvider>
          <CssBaseline />
          <main className={roboto.className}>
            <SessionProvider session={pageProps.session}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </SessionProvider>
          </main>
        </ColorModeProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}
