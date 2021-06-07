import { ApolloServer } from "apollo-server";
import dotenv from "dotenv";

import schema from "./schema";
import resolvers from "./resolvers";
import connectDB from "./connect";

dotenv.config();
connectDB(process.env.DEV_DB_URI);

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
});

// Use port from environment variables and 5000 as fallback
const PORT = process.env.PORT || 5000;

server.listen(PORT).then(({ url }) => {
  console.log(`server started at ${url}`);
});
