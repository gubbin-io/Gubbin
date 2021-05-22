const resolvers = {
  Query: {
    users: () => [
      {
        id: 1,
        username: "Gregg Eggington",
      },
      {
        id: 2,
        username: "John Vuuton",
      },
    ],
  },
  Mutation: {
    login: () => true,
    register: (parent: any, { userInfo: { username } }: any, context: any) => ({
      errors: [
        {
          field: "username",
          message: "bad",
        },
      ],
      user: {
        id: 1,
        username,
      },
    }),
  },
  User: {
    firstLetterOfUsername: (parent: any) => parent.username[0],
  },
};

export default resolvers;
