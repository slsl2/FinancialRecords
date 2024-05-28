import React, { useState } from "react";
import RecordFormContainer from "../components/specific/RecordFormContainer.jsx";
import SelectMonthContainer from "../components/specific/SelectMonthContainter.jsx";
import RecordsListContainer from "../components/specific/RecordsListContainer.jsx";

const Home = ({ selectedMonth, setSelectedMonth, records, setRecords }) => {
  const [filteredRecords, setFilteredRecords] = useState([]);
  return (
    <>
      <RecordFormContainer records={records} setRecords={setRecords} />
      <SelectMonthContainer
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
        records={records}
        setFilteredRecords={setFilteredRecords}
      />
      <RecordsListContainer filteredRecords={filteredRecords} />
    </>
  );
};

export default Home;
