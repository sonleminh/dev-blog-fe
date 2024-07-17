'use client';

import React, { ReactNode, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function ColorModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = React.useState<'light' | 'dark'>(
    (localStorage.getItem('THEME_MODE') as 'light' | 'dark') || 'light'
  );
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );
  console.log(mode);

  useEffect(() => {
    localStorage.setItem('THEME_MODE', mode);
  }, [mode]);

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
