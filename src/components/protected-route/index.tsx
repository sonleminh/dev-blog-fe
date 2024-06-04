'use client';

import { useAuthContext } from '@/contexts/AuthContext';
import { useWhoAmI } from '@/services/auth';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';
const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const { data: userData, isFetching } = useWhoAmI();
  const auth = useAuthContext();
  console.log('user:', auth?.user);
  // console.log('user:', userData);
  useEffect(() => {
    if (!isFetching) {
      if (userData) {
        auth?.login(userData);
      }
    }
  }, [userData, isFetching]);
  // console.log(2);
  return <>{children}</>;
};

export default ProtectedRoute;
