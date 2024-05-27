import React, { useState } from "react";
import GlobalStyle from "./styles/GlobalStyle.jsx";
import Router from "./shared/Router.jsx";
import Layout from "./components/layout/Layout.jsx";

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Router />
      </Layout>
    </>
  );
}

export default App;
