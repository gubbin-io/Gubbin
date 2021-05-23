import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";
import dotenv from "dotenv";

import schema from "./schema";
import resolvers from "./resolvers";

dotenv.config();
const mongoURI: any = process.env.DB_URI;
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("mongoDB connected");
});

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
});

// Use port from environment variables and 5000 as fallback
const PORT = process.env.PORT || 5000;

server.listen(PORT).then(({ url }) => {
  console.log(`server started at ${url}`);
});
