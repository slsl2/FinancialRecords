const filterdRecordsListContainer = ({ filteredRecords }) => {
  return (
    <ul>
      {filteredRecords.map((filteredRecord) => (
        <li key={filteredRecord.id}>
          <p>{filteredRecord.date}</p>
          <p>{filteredRecord.item}</p>
          <p>{filteredRecord.amount}</p>
          <p>{filteredRecord.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default filterdRecordsListContainer;
