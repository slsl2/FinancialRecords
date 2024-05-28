import React from "react";
import RecordFormContainer from "../components/specific/RecordFormContainer.jsx";
import SelectMonthContainer from "../components/specific/SelectMonthContainter.jsx";
import RecordsListContainer from "../components/specific/RecordsListContainer.jsx";

const Home = ({ selectedMonth, setSelectedMonth, records, setRecords }) => {
  return (
    <>
      <RecordFormContainer records={records} setRecords={setRecords} />
      <SelectMonthContainer />
      <RecordsListContainer records={records} />
    </>
  );
};

export default Home;
