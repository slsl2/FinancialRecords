import { useState, useEffect } from "react";
import styled from "styled-components";
import StyledContainer from "../../styles/StyledContainer";
import Button from "../atoms/Button";

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
      <RecordForm onSubmit={addRecord}>
        <input onChange={handleDate} type="date" value={date}></input>
        <input
          onChange={handleItem}
          type="text"
          value={item}
          placeholder="지출 항목"
        ></input>
        <input
          onChange={handleAmount}
          type="number"
          value={amount}
          placeholder="지출 금액"
        ></input>
        <input
          onChange={handleDescription}
          type="text"
          value={description}
          placeholder="지출 내용"
        ></input>
        <Button
          backgroundColor="#4287f5"
          color="white"
          contents="저장"
          type="submit"
        ></Button>
      </RecordForm>
    </>
  );
};

const RecordForm = styled(StyledContainer).attrs({ as: "form" })`
  font-size: 2rem;
`;

export default RecordFormContainer;
