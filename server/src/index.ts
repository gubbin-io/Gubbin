import { ApolloServer } from "apollo-server-express";
import dotenv from "dotenv";
import express from "express";
import expressJwt from "express-jwt";

import schema from "./schema";
import resolvers from "./resolvers";
import connectDB from "./connect";

dotenv.config();
connectDB(process.env.DB_URI);
const app = express();

app.use(
  expressJwt({
    secret: "SECRET",
    algorithms: ["HS256"],
    credentialsRequired: false,
  })
);

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: ({ req }) => {
    const user = req.user || null;
    return { user };
  },
});

server.applyMiddleware({ app });

// Use port from environment variables and 5000 as fallback
const PORT = process.env.PORT || 5000;

// modify routing here
app.listen(PORT, () => {
  console.log(`server started at http://localhost:5000/graphql`);
});
