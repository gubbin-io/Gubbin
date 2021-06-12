import { ApolloClient, InMemoryCache } from "@apollo/client";

interface Config {
  SERVER_URL: string;
}

const dev: Config = {
  SERVER_URL: `http://${window.location.hostname}:5000/graphql`,
};

const prod: Config = {
  SERVER_URL: "https://api.gubbin.io/graphql",
};

const CONFIG: Config = process.env.NODE_ENV === "production" ? prod : dev;

export const client = new ApolloClient({
  uri: CONFIG.SERVER_URL,
  cache: new InMemoryCache(),
});
