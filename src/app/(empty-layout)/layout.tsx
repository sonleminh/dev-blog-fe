import { ColorModeProvider } from '@/contexts/ColorModeContext';
import { QueryContextProvider } from '@/contexts/QueryContext';

import { CssBaseline } from '@mui/material';
import { QueryClient } from '@tanstack/react-query';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const query = new QueryClient();

const inter = Inter({ subsets: ['latin'] });

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
      <ColorModeProvider>
        <html suppressHydrationWarning lang='en'>
          <body className={inter.className}>
            <CssBaseline />
            {children}
          </body>
        </html>
      </ColorModeProvider>
    </QueryContextProvider>
  );
}
