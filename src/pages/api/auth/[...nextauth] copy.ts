// NEXTAUTH
import { ApolloClient, InMemoryCache, useLazyQuery, useQuery } from '@apollo/client';
import { auto } from '@popperjs/core';
import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import login from 'src/backend-tfm/query/login';
import { LoginInput, RolUser, User } from 'src/gql/graphql';

// const prisma = new PrismaClient

export type userLogedIn = {
  id: number;
  username: string;
  mail: string;
  name: string;
  lastname: string;
  rol: RolUser
}

export type SessionTFM = {
  user: User
  expiuser: string
}

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_BACKEND_APP + '/graphql',
  cache: new InMemoryCache(),
});

export const authOptions = {
  //adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: "credentials",
      type: "credentials",
      credentials: undefined,
      //@ts-ignore
      async authorize(credentials) {
        if (!credentials.username || !credentials.password) {
          console.log("no hay credenciales")
          return null
        }

        const dataQuery: LoginInput = {
          username: credentials.username,
          pwd: credentials.password
        }
        const { data, error, loading } = await client.query({
          query: login,
          variables: { data: dataQuery }
        })

        if (data) {
          return data.login
        console.log("llegueee")
        }
        else {
          console.log("Error en la consulta", error)
          return null
        }



        // const credentialsObj = Object.assign({},credentials)
        // console.log(" credentialsObj",credentialsObj)
        //  if ( !credentialsObj.username || !credentialsObj.password) {
        //   console.log("no hay credenciales")
        //    return null
        //  }
        //return {username: credentialsObj.username, password: credentialsObj.password}
        // const dataQuery: LoginInput = {
        //   username: credentials.username,
        //   pwd: credentials.password
        // }
        // await client.query({
        //   query: login,
        //   variables: { data: {username:'asd',pwd:"asd"} }
        // }).then((data) =>{return data} ).catch((error) => {return null})
        // console.log("entreeeeeeee", credentials.password)
        //const [QueryLogin, { loading, error, data }] = useLazyQuery(login);
        // const dataUser = await QueryLogin({ variables: { data: dataQuery } })
        // console.log("aaaaaaaaaaaaaa", dataUser)
        // if (dataUser.data) {
        //   const userL: userLogedIn = {
        //     id: dataUser.data.login.id,
        //     username: dataUser.data.login.username,
        //     mail: dataUser.data.login.mail,
        //     name: dataUser.data.login.name,
        //     lastname: dataUser.data.login.lastname,
        //     rol: dataUser.data.login.rol
        //   }
        //   console.log("tengo userL", userL)
        //   return userL
        // }
        // console.log("Error en la consulta", error)
        // return null
      },

    }
    )
  ],
  pages: { signIn: "/pages/login/" },
  session: { strategy: "jwt" },
  secret: "secret",
  callbacks: {
    signIn: async (user) => {

      return user ? true : false
    },

    jwt: async ({ token, user }) => {

      // at login, save user token to jwt token
      
  
    
      // return the token
      return Promise.resolve(user);
    },
    session: async ({ user , session, token }) => {
      session.user = user;
      return session
    },

  },

}
//@ts-ignore
export default NextAuth(authOptions)


