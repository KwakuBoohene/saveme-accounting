import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../lib/prisma";
import { compare } from "bcrypt";

export default NextAuth({
  // Configure one or more authentication providers
  session: {
    jwt: true,
    maxAge: 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "username", type: "text", placeholder: " " },
        password: { label: "Password", type: "password", placeholder: " " },
      },

      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        try {
          const user = await prisma.user.findFirst({
            where: {
              OR: [
                { username: credentials?.username },
                { email: credentials?.username },
              ],
            },
          });

          if (user) {
            // Any object returned will be saved in `user` property of the JWT

            //Check hased password with DB password
            const checkPassword = await compare(
              credentials.password,
              user.password
            );

            //Incorrect password - send response
            if (!checkPassword) {
              prisma.$disconnect();
              throw Error("Password does not match");
            }
            //Else send success response

            prisma.$disconnect();
            return user;
          } else {
            // If you return null then an error will be displayed advising the user to check their details.
            prisma.$disconnect();
            return Promise.reject(new Error("Invalid Credentials"));

            // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
          }
        } catch (error) {
          console.log(error);
          throw error;
        } finally {
          prisma.$disconnect();
        }
      },
    }),
  ],
  pages: {
    signIn: "/sign-in",
  },
  secret: process.env.JWT_SECRET,
});
