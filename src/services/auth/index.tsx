import { postRequest } from '@/axios/axios';
import { useAuthContext } from '@/contexts/AuthContext';
import { ISignInPayload } from '@/interfaces/ISignIn';
import { ISignInResponse } from '@/interfaces/IUser';
import { useRouter } from 'next/navigation';
import { useMutation } from 'react-query';

const authUrl = '/auth';

const signInAPI = async (payload: ISignInPayload) => {
  const result = await postRequest(`${authUrl}/signin`, payload);
  return result.data as ISignInResponse;
};

export const useSignInMutate = () => {
  const router = useRouter();
  const auth = useAuthContext();
  return useMutation(['tai-khoan'], signInAPI, {
    onSuccess: (data) => {
      const { accessToken, refreshToken, ...user } = data;
      console.log('data:', user);
      if (auth && auth.signIn) {
        auth?.signIn(user);
      }
      router.push('/');
    },
    onError: () => {
      console.log('Error');
    },
  });
};
