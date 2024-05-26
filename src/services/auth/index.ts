'use client';

import { useAuthContext } from '@/contexts/AuthContext';
import { useSessionContext } from '@/contexts/SessionContext';
import { ISignInPayload } from '@/interfaces/ISignIn';
import { ISignInResponse, IWhoIAmResponse } from '@/interfaces/IUser';
import { getRequest, postRequest } from '@/utils/fetch-client';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

const authUrl = 'auth';

export const signInAPI = async (payload: ISignInPayload) => {
  const result = await postRequest(
    `http://localhost:8080/admin/api/${authUrl}/signin`,
    payload
  );
  return result as ISignInResponse;
};

export function useSignInMutate() {
  const router = useRouter();
  const { setSessionToken } = useSessionContext();
  const auth = useAuthContext();

  return useMutation({
    mutationFn: signInAPI,
    onSuccess: (data) => {
      console.log('data:', data);
      if (data.user) {
        console.log('1');
        const { id, accessToken, refreshToken, ...user } = data.user;
        auth?.login(user);
      }
      postRequest('http://localhost:3000/api/auth', data);
      setSessionToken(data?.user?.accessToken as string);
      // router.push('/');
    },
    onError: (error) => console.log(error),
  });
}

export const whoIAmAPI = async () => {
  const result = await getRequest(
    `http://localhost:8080/admin/api/${authUrl}/profile`
  );
  return result as IWhoIAmResponse;
};

export const useWhoAmI = () => {
  return useQuery(['tai-khoan'], whoIAmAPI, {
    refetchOnWindowFocus: false,
  });
};

// export const publicAPI = async () => {
//   const result = await getRequest(
//     `http://localhost:8080/admin/api/${authUrl}/public`
//   );
//   return result as ;
// };

export const signoutAPI = async () => {
  const result = await getRequest(
    `http://localhost:8080/admin/api/${authUrl}/signout`
  );
  return result;
};
