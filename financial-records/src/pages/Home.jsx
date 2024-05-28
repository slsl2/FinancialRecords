import React, { useState } from "react";
import RecordFormContainer from "../components/organisms/RecordFormContainer.jsx";
import SelectMonthContainer from "../components/organisms/SelectMonthContainter.jsx";
import RecordsListContainer from "../components/organisms/RecordsListContainer.jsx";

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
