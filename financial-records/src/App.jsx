import React, { useState } from "react";
import "./App.css";
import { Router } from "react-router-dom";
import Layout from "./components/layout/Layout";

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
