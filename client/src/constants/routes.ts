import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

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

const httpLink = createHttpLink({
  uri: CONFIG.SERVER_URL,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  let token = sessionStorage.getItem("token") || localStorage.getItem("token");

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token && token !== "undefined" ? `Bearer ${token}` : "",
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
