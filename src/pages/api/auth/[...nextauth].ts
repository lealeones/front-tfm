import { ApolloClient, InMemoryCache, useQuery } from "@apollo/client";

import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials"
import login from "src/backend-tfm/query/login";
import { LoginInput, RolUser } from "src/gql/graphql";

import { AuthOptions } from "next-auth/core/types";
export type userLogedIn = {
  id: number;
  username: string;
  mail: string;
  name: string;
  lastname: string;
  rol: RolUser
}
// export type token
export type SessionTFM = {
  expires: string
 token: {
  name: string,
  sub: string,
  id: number,
  username: string,
  mail:string,
  lastname: string,
  rol: string,
  iat: number,
  exp: number,
  jti: string
 }
 user:{
  name: string,
 }
}

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_BACKEND_APP + '/graphql',
  cache: new InMemoryCache(),
});

export const authOptions : AuthOptions = {
  session:{strategy:"jwt"},
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {},
      //@ts-ignore
      async authorize(credentials) {
        const { username, password } = credentials as {
          username: string,
          password: string,
        };

        if (!credentials || !username || !password) {
          return null
        }
        const dataQuery: LoginInput = {
          username: username,
          pwd: password
        }

     
        const { data, error, loading } = await client.query({
          query: login,
          variables: { data: dataQuery }
        })
        console.log("data query",data)
        if (data) {
          const user: userLogedIn = {
            id: data.login.id,
            username: data.login.username,
            mail: data.login.mail,
            name: data.login.name,
            lastname: data.login.lastname,
            rol: data.login.rol,
          }

          return user
        }
        else
          return null
      }
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // the user present here gets the same data as received from DB call  made above -> fetchUserInfo(credentials.opt)
      return { ...token,...user }
     },
      async session({ session, token }) {
      return {...session, token  }
     },
  },
  secret: process.env.NEXTAUTH_SECRET,
  // pages: {
  //   signIn: "/pages/login",
  // }

}
export default NextAuth(authOptions)