import { ISignInPayload } from '@/interfaces/ISignIn';
import { ISignInResponse } from '@/interfaces/IUser';
import { signInAPI } from '@/services/auth';
import { postRequest } from '@/utils/fetch-client';
import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';

async function signIn(credentials: any) {
  const result = (await postRequest(
    `http://localhost:8080/admin/api/auth/signin`,
    credentials
  )) as ISignInResponse;
  // if (!result.name) {
  //   throw new Error('Wrong credentials');
  // }
  return result;
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {},
      async authorize(credentials) {
        // const user = await signIn(credentials);
        // if (user.name) {
        //   return user as ISignInResponse;
        // } else {
        //   return null;
        // }
        try {
          const user = await signIn(credentials);
          console.log(user);
          if (!user.name) {
            // throw Error('Wrong credentials!!');

            return null;
          }
          return user as ISignInResponse;
        } catch (error) {
          console.log('Error:', error);
          throw new Error('Failed to login');
        }
      },
    }),
  ],
  pages: {
    signIn: '/dang-nhap',
  },
  // callbacks: {
  //   async jwt({ token, user }) {
  //     if (user) {
  //       token.id = user.id;
  //       token.name = user.name;
  //       token.accessToken = user.accessToken;
  //     }
  //     return token;
  //   },
  //   async session({ session,token }) {
  //     if (token) {
  //       session.user.id = token.id;
  //       session.user.name = token.name;
  //       session.user.accessToken = token.accessToken;
  //     }
  //     return session;
  //   },
  // },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
