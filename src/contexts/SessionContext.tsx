'use client';

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

const SessionContext = createContext({
  sessionToken: '',
  setSessionToken: (sessionToken: string) => {},
});

export const useSessionContext = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error('useSessionContext must be used within an SessionProvider');
  }
  return context;
};

export const SessionProvider = ({ children }: { children: ReactNode }) => {
  const [sessionToken, setSessionToken] = useState<string>('');
  return (
    <SessionContext.Provider value={{ sessionToken, setSessionToken }}>
      {children}
    </SessionContext.Provider>
  );
};
