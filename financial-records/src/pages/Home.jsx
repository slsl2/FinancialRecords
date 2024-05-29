import React, { useState } from "react";
import RecordCreateContainer from "../components/organisms/RecordCreateContainer.jsx";
import SelectMonthContainer from "../components/organisms/SelectMonthContainter.jsx";
import RecordsListContainer from "../components/organisms/RecordsListContainer.jsx";

const Home = ({ selectedMonth, setSelectedMonth, records, setRecords }) => {
  const [filteredRecords, setFilteredRecords] = useState([]);
  return (
    <>
      <RecordCreateContainer records={records} setRecords={setRecords} />
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
