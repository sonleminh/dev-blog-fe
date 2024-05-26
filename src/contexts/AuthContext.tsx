'use client';

import { IUser } from '@/interfaces/IUser';
import { ReactNode, createContext, useContext, useState } from 'react';

interface IAuthContext {
  user?: IUser;
  login: (user: IUser) => void;
}

const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | undefined>(undefined);

  const login = (user: IUser) => {
    setUser(user);
  };

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
