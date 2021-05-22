import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    users: [User]
  }

  type Mutation {
    register(userInfo: UserInfo!): RegisterResponse!
    login(userInfo: UserInfo!): Boolean!
  }

  type User {
    id: ID!
    username: String!
    firstLetterOfUsername: String!
  }
  type Error {
    field: String!
    message: String!
  }
  type RegisterResponse {
    errors: [Error!]!
    user: User
  }

  input UserInfo {
    username: String!
    password: String!
    age: Int
  }
`;

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

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Use port from environment variables and 5000 as fallback
const PORT = process.env.PORT || 5000;

server.listen(PORT).then(({ url }) => {
  console.log(`server started at ${url}`);
});
