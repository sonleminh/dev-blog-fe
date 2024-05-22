'use client';

import { useSessionContext } from '@/contexts/SessionContext';
import { ISignInPayload } from '@/interfaces/ISignIn';
import { ISignInResponse, IWhoIAmResponse } from '@/interfaces/IUser';
import { getRequest, postRequest } from '@/utils/fetch-client';
import { useMutation } from '@tanstack/react-query';
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
  const { sessionToken, setSessionToken } = useSessionContext();
  console.log('sstk:', sessionToken);
  return useMutation({
    mutationFn: signInAPI,
    onSuccess: (data: ISignInResponse) => {
      console.log('data:', data);
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
