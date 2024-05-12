'use client';
import { ThemeProvider, createTheme } from '@mui/material';
import React, { ReactNode } from 'react';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function ColorModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const darkTheme = createTheme({
    palette: {
      mode,
      primary: {
        main: '#000',
        light: '#3d55ef',
      },
    },
    typography: {
      fontFamily: 'unset',
    },
  });

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export { ColorModeContext, ColorModeProvider };
