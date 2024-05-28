import MonthBtn from "../common/MonthBtn.jsx";
const SelectMonthContainer = ({
  selectedMonth,
  setSelectedMonth,
  records,
  setFilteredRecords,
}) => {
  const monthArr = Array(12)
    .fill()
    .map((value, i) => (i + 1).toString().padStart(2, "0"));

  const selectMonth = (month) => {
    setSelectedMonth(month);
    filterRecordsByMonth(month);
  };
  const filterRecordsByMonth = (month) => {
    const filtered = records.filter(
      (record) => record.date.split("-")[1] === month
    );
    setFilteredRecords(filtered);
  };

  return (
    <>
      <ul>
        {monthArr.map((month) => (
          <MonthBtn
            key={month}
            month={month}
            onClick={() => selectMonth(month)}
          />
        ))}
      </ul>
    </>
  );
};

export default SelectMonthContainer;
