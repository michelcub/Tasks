import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@auth/prisma-adapter";
//import { PrismaClient } from "@prisma/client";
import checkCredentials from "../../../../services/checkCredentials";
import { useRouter } from "next/navigation";

//const prisma = new PrismaClient();


const handler = NextAuth({
    //adapter: PrismaAdapter(prisma),
    secret: process.env.SECRET,
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
        CredentialsProvider({
            id: "domain-login",
            name: "Domain Account",
            async authorize(credentials, req) {
              try{
                console.log("credentials", credentials)
              const { email, password } = credentials
              if(email && password) {
                const response = await fetch("http://localhost:3000/api/auth/login", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ email, password }),
                })
                console.log("response", response.json())
              const user = await response
              return user
            }
            return null
              }catch(error){
                console.log(error)
              }
              },
            credentials: {
              email: { label: "email", type: "email", placeholder: "example@email.com" },
              password: { label: "Password", type: "password" },
            },
          }),
    ],
})

export {handler as GET, handler as POST}