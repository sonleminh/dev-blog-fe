import Layout from '@/components/sharing/layout';
import { AppProps } from 'next/app';
import { Roboto } from 'next/font/google';
import React from 'react';
import { ColorModeProvider } from '@/contexts/ColorModeContext';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ColorModeProvider>
      <CssBaseline />
      <main className={roboto.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </ColorModeProvider>
  );
}
