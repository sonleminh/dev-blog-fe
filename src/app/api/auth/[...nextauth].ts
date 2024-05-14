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
      credentials: {
        username: {
          label: 'Username',
          type: 'text',
          placeholder: 'Enter your username',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Enter your password',
        },
      },
      authorize: async (credentials, req) => {
        try {
          if (!credentials) return null;
          const user = await signInAPI({
            username: credentials.username,
            password: credentials.password,
          });

          if (user && user.name) {
            return { name: user.name, id: '1' };
          } else {
            return null;
          }
        } catch (error) {
          throw new Error('Invalid username or password');
        }
        // const user = { id: '1', name: 'J Smith', email: 'jsmith@example.com' };

        // if (!user) {
        //   throw new Error('No user found with the entered username');
        // }

        // return user;
      },
      //     const user = { id: '1', name: 'J Smith', email: 'jsmith@example.com' };
      //     const { username, password } = credentials as {
      //       username: string;
      //       password: string;
      //     };

      //     const result = await signInAPI({
      //       username: username,
      //       password: password,
      //     });

      //     if (user) {
      //       // Any object returned will be saved in `user` property of the JWT
      //       return {
      //         id: '1234',
      //         name: 'John Doe',
      //         email: 'john@gmail.com',
      //         role: 'admin',
      //       };
      //     } else {
      //       // If you return null then an error will be displayed advising the user to check their details.
      //       return {
      //         id: '1234',
      //         name: 'John Doe',
      //         email: 'john@gmail.com',
      //         role: 'admin',
      //       };

      //       // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
      //     }
      //     // if (!result.name) {
      //     //   throw new Error('invalid credentials');
      //     // }

      //     // return { id: '1', name: 'c' };
      //   },
    }),
  ],
  pages: {
    signIn: '/dang-nhap',
    error: '/',
    // signOut: '/auth/signout'
  },
};

export default NextAuth(authOptions);
