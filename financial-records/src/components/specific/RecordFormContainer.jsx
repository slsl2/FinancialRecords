import { useState } from "react";

const RecordFormContainer = () => {
  const [records, setRecords] = useState([]);

  const [date, setDate] = useState(new Date()); // 초기값을 현재 날짜로
  const [category, setCategory] = useState("");
  const [cost, setCost] = useState(0);
  const [description, setDescription] = useState("");

  const handleDate = (e) => {
    setDate(e.target.value);
  };
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };
  const handleCost = (e) => {
    setCost(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const addRecord = (e) => {
    e.preventDefault();
    if (!date || !category.trim() || !cost.trim() || !description.trim()) {
      alert("모두 입력해주세요");
      return;
    }
    setRecords((records) => [
      ...records,
      { id: Date.now(), date, category, cost, description },
    ]);
    setDate(new Date());
    setCategory("");
    setCost(0);
    setDescription("");
  };

  return (
    <>
      {" "}
      <form onSubmit={addRecord}>
        <input onChange={handleDate} type="date" value={date}></input>
        <input onChange={handleCategory} type="text" value={category}></input>
        <input onChange={handleCost} type="number" value={cost}></input>
        <input
          onChange={handleDescription}
          type="text"
          value={description}
        ></input>
        <button type="submit">저장</button>
      </form>
      <div>
        {records.map((record) => (
          <div key={record.id}>
            <p>{record.date}</p>
            <p>{record.category}</p>
            <p>{record.cost}</p>
            <p>{record.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default RecordFormContainer;
