const MonthBtn = ({ month, onClick }) => {
  return (
    <li key={month}>
      <button onClick={onClick}>
        <span>{month}</span>
        <span>월</span>
      </button>
    </li>
  );
};

export default MonthBtn;
