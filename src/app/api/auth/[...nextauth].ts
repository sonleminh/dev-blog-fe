import { signInAPI, useSignInMutate } from '@/services/auth';
import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import Credentials from 'next-auth/providers/credentials';

const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    Credentials({
      type: 'credentials',
      credentials: {},
      //     username: { label: 'Username', placeholder: 'test' },
      //     password: { label: 'Password',type: 'password' },
      //   },
      authorize: async (credentials, req) => {
        const { username, password } = credentials as {
          username: string;
          password: string;
        };

        const result = await signInAPI({
          username: username,
          password: password,
        });
        if (!result.name) {
          throw new Error('invalid credentials');
        }

        return { id: '1', name: 'c' };
      },
    }),
  ],
  pages: {
    signIn: '/dang-nhap',
    error: '/',
    // signOut: '/auth/signout'
  },
};

export default NextAuth(authOptions);
