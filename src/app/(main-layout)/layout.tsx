import Layout from '@/components/sharing/layout';
import { AuthContextProvider, useAuthContext } from '@/contexts/AuthContext';
import { ColorModeProvider } from '@/contexts/ColorModeContext';
import { QueryContextProvider } from '@/contexts/QueryContext';
import { SessionProvider } from '@/contexts/SessionContext';
import { Box, CssBaseline } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
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
  const auth = useAuthContext();

  return (
    <QueryContextProvider>
      <SessionProvider>
        <AuthContextProvider>
          <html lang='en'>
            <ColorModeProvider>
              <body className={inter.className}>
                <CssBaseline />
                <Layout>{children}</Layout>
              </body>
            </ColorModeProvider>
          </html>
        </AuthContextProvider>
      </SessionProvider>
    </QueryContextProvider>
  );
}
