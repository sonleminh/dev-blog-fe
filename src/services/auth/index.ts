'use client';

import { useSessionContext } from '@/contexts/SessionContext';
import { ISignInPayload } from '@/interfaces/ISignIn';
import { ISignInResponse } from '@/interfaces/IUser';
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
  const { setSessionToken } = useSessionContext();

  return useMutation({
    mutationFn: signInAPI,
    onSuccess: (data: ISignInResponse) => {
      console.log('success:', data);
      postRequest('http://localhost:3000/api', data);
      setSessionToken(data.accessToken);
      router.push('/');
    },
    onError: (error) => console.log(error),
  });
}

export const whoIAmAPI = async () => {
  const result = await getRequest(
    `http://localhost:8080/admin/api/${authUrl}/profile`
  );
  return result as ISignInResponse;
};

export const publicAPI = async () => {
  const result = await getRequest(
    `http://localhost:8080/admin/api/${authUrl}/public`
  );
  return result as ISignInResponse;
};

export const signoutAPI = async () => {
  const result = await getRequest(
    `http://localhost:8080/admin/api/${authUrl}/signout`
  );
  return result;
};
