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
  )) as any;
  console.log('rs:', result);
  return result;
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {},
      async authorize(credentials) {
        try {
          const result = await signIn(credentials);
          return result?.user as ISignInResponse;
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
  callbacks: {
    async jwt({ token, user, session }) {
      console.log('jwt:', { token, user, session });
      if (user) {
        return {
          ...token,
          id: user.id,
        };
        // token.id = user.id;
        // token.name = user.name;
        // token.accessToken = user.accessToken;
      }
      return token;
    },
    async session({ session, token, user }) {
      console.log('session:', { session, token, user });

      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
