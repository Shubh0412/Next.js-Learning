import NextAuth from "next-auth";
import GitHubProviders from "next-auth/providers/github";

export default NextAuth({
  providers: [
    GitHubProviders({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async jwt(token, user) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session(session, token) {
      session.user.id = token.id;
      return session;
    },
  },
});
