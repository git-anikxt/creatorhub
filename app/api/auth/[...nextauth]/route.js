import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

import connectDb from "@/db/connectDb";
import User from "@/models/User";

console.log("GITHUB_ID:", process.env.GITHUB_ID);
console.log(
  "GITHUB_SECRET:",
  process.env.GITHUB_SECRET ? "FOUND" : "MISSING"
);

export const authoptions = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  callbacks: {
    async signIn({ user }) {
      try {
        await connectDb();

        let currentUser = await User.findOne({
          email: user.email,
        });

        if (!currentUser) {
          await User.create({
            email: user.email,
            username: user.email.split("@")[0],
            name: user.name,
          });

          console.log("NEW USER CREATED");
        }

        return true;
      } catch (error) {
        console.error("SIGNIN ERROR:", error);
        return false;
      }
    },

    async session({ session }) {
      try {
        await connectDb();

        const dbUser = await User.findOne({
          email: session.user.email,
        });

        if (dbUser) {
          session.user.name = dbUser.username;
          session.user.username = dbUser.username;
        }

        return session;
      } catch (error) {
        console.error("SESSION ERROR:", error);
        return session;
      }
    },
  },
});

export { authoptions as GET, authoptions as POST };