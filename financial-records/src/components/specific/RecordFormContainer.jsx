import { useState, useEffect } from "react";

const RecordFormContainer = ({ records, setRecords }) => {
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]); // 초기값을 현재 날짜로
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

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
  }, [setRecords]);

  const handleDate = (e) => {
    setDate(e.target.value);
  };
  const handleItem = (e) => {
    setItem(e.target.value);
  };
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const addRecord = (e) => {
    e.preventDefault();
    if (!date || !item.trim() || !amount.trim() || !description.trim()) {
      alert("모두 입력해주세요");
      return;
    }
    setRecords((records) => [
      ...records,
      { id: Date.now(), date, item, amount: +amount, description },
    ]);
    setDate(new Date().toISOString().split("T")[0]);
    setItem("");
    setAmount("");
    setDescription("");
  };

  console.log(records);

  return (
    <>
      {" "}
      <form onSubmit={addRecord}>
        <input onChange={handleDate} type="date" value={date}></input>
        <input onChange={handleItem} type="text" value={item}></input>
        <input onChange={handleAmount} type="number" value={amount}></input>
        <input
          onChange={handleDescription}
          type="text"
          value={description}
        ></input>
        <button type="submit">저장</button>
      </form>
    </>
  );
};

export default RecordFormContainer;
