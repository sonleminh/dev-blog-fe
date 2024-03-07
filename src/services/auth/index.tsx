import { getRequest, postRequest } from '@/axios/axios';
import { useAuthContext } from '@/contexts/AuthContext';
import { ISignInPayload } from '@/interfaces/ISignIn';
import { ISignInResponse, IUser } from '@/interfaces/IUser';
import { useRouter } from 'next/navigation';
import { useMutation, useQuery } from 'react-query';
import Cookies from 'js-cookie';
import { ACCESS_TOKEN_KEY } from '@/constants/const';

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
      Cookies.set(ACCESS_TOKEN_KEY, accessToken, {
        secure: true,
        sameSite: 'strict',
      });
      router.push('/');
    },
    onError: () => {
      console.log('Error');
    },
  });
};

export const whoAmI = () => {
  return getRequest<IUser>(`${authUrl}/whoami`)
    .then((res) => {
      return res.data;
    })
    .catch(() => {
      if (Cookies.get(ACCESS_TOKEN_KEY)) {
        Cookies.remove(ACCESS_TOKEN_KEY);
      }
    });
};

export const useGetWhoAmI = () => {
  return useQuery(['tai-khoan'], whoAmI, {
    refetchOnWindowFocus: false,
    retry: 0,
    cacheTime: 0,
  });
};
