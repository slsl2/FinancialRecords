const RecordsListContainer = ({ records }) => {
  return (
    <ul>
      {records.map((record) => (
        <li key={record.id}>
          <p>{record.date}</p>
          <p>{record.item}</p>
          <p>{record.amount}</p>
          <p>{record.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default RecordsListContainer;
