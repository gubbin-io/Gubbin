import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { ApolloProvider } from "@apollo/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "react-jss";
import { client } from "./constants/routes";
import theme from "./constants/theme";
import { BrowserRouter as Router } from "react-router-dom";
// import LoginScreen from "./components/LoginScreen";

ReactDOM.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <Router>
        <App />
        {/* <LoginScreen /> */}
      </Router>
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
