import NextAuth from "next-auth"

declare module "next-auth" {
  interface User {
    id: string
    lastname: string
    mail: string
    name: string
    pwd: string
    rol: RolUser;
    username: string
  }

  interface Session {
    user:User
  }
}