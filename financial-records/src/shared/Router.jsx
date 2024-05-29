import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Record from "../pages/Record.jsx";

const Router = () => {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchFakeRecords = async () => {
      try {
        const response = await fetch("/Fake.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setRecords(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchFakeRecords();
  }, []);

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
        <Route
          path="/record/:id"
          element={<Record records={records} setRecords={setRecords} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
