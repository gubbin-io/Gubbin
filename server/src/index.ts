import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    users: [String!]!
  }
`;

const resolvers = {
  Query: {
    users: () => ["John Vuuton", "Gregg Eggington"],
  },
};

// Use port from environment variables and 5000 as fallback
const PORT = process.env.PORT || 5000;

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(PORT).then(({ url }) => {
  console.log(`server started at ${url}`);
});
