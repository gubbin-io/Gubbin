import User from "../models/user";

const userResolvers = {
  Query: {
    users: async () => {
      const users = await User.find();
      return users.map(({ username, _id }: any) => ({
        username,
        id: _id,
      }));
    },
  },

  Mutation: {
    register: async (_: any, { userInfo: { username } }: any) => {
      const newUser = new User({ username });
      const { _id, username: newUsername } = await newUser.save();

      return {
        user: {
          id: _id,
          username: newUsername,
        },
      };
    },
  },

  User: {
    firstLetterOfUsername: (parent: any) => parent.username[0],
  },
};

export default userResolvers;
