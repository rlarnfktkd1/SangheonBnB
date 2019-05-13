import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    createAccount: async (_, args) => {
      const { username, email, lastName = "", firstName = "", bio = "" } = args;
      const user = await prisma.createUser({
        email,
        username,
        lastName,
        firstName,
        bio
      });
      return user;
    }
  }
};
