import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Detail from "../pages/Detail.jsx";

const Router = () => {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [records, setRecords] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              selectedMonth={selectedMonth}
              setSelectedMonth={setSelectedMonth}
              records={records}
              setRecords={setRecords}
            />
          }
        />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
