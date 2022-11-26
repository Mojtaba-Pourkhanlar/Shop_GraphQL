import React from "react";
import ReactDOM from "react-dom/client";
import AppContainer from "./AppContainer";
import { BrowserRouter } from "react-router-dom";

// GraphQL
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHCMS_URI,
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <AppContainer />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
);
