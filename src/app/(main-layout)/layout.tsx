import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';

import { ColorModeProvider } from '@/contexts/ColorModeContext';
import { QueryContextProvider } from '@/contexts/QueryContext';

import Layout from '@/components/sharing/layout';
import { CssBaseline } from '@mui/material';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { GA_ID, NODE_ENV } from '@/constants/env';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Dev Blog',
    template: '%s - Blog kiến thức về lập trình',
  },
  description: 'Blog chia sẻ kiến thức về lập trình',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <QueryContextProvider>
        <ColorModeProvider>
          <body className={inter.className}>
            <CssBaseline />
            <Layout>{children}</Layout>
          </body>
        </ColorModeProvider>
        {NODE_ENV && GA_ID && <GoogleAnalytics gaId={GA_ID} />}
      </QueryContextProvider>
    </html>
  );
}
