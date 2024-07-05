import Layout from '@/components/sharing/layout';
import { ColorModeProvider } from '@/contexts/ColorModeContext';
import { QueryContextProvider } from '@/contexts/QueryContext';
import { CssBaseline } from '@mui/material';
import { QueryClient } from '@tanstack/react-query';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const inter = Inter({ subsets: ['latin'] });

const query = new QueryClient();

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryContextProvider>
      <html lang='en'>
        <ColorModeProvider>
          <body className={inter.className}>
            <CssBaseline />
            <Layout>{children}</Layout>
          </body>
        </ColorModeProvider>
      </html>
    </QueryContextProvider>
  );
}
