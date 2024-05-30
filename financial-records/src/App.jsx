import React, { useState } from "react";
import GlobalStyle from "./styles/GlobalStyle.jsx";
import Router from "./shared/Router.jsx";
import Layout from "./components/layout/Layout.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <Layout>
          <Router />
        </Layout>
      </Provider>
    </>
  );
};

export default App;
