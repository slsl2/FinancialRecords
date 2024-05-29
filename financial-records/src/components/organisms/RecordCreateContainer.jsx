import { useState, useEffect } from "react";
import styled from "styled-components";
import StyledContainer from "../../styles/StyledContainer";
import Button from "../atoms/Button";

const RecordCreateContainer = ({ records, handleAddRecord }) => {
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]); // 초기값을 현재 날짜로
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

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

  const AddRecord = (e) => {
    e.preventDefault();
    if (!date || !item.trim() || !amount.trim() || !description.trim()) {
      alert("모두 입력해주세요");
      return;
    }
    const newRecord = {
      id: Date.now(),
      date,
      item,
      amount: +amount,
      description,
    };
    handleAddRecord(newRecord);
    // setRecords((records) => [
    //   ...records,
    //   { id: Date.now(), date, item, amount: +amount, description },
    // ]);
    setDate(new Date().toISOString().split("T")[0]);
    setItem("");
    setAmount("");
    setDescription("");
  };

  console.log(records);

  return (
    <>
      {" "}
      <RecordForm onSubmit={AddRecord}>
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

export default RecordCreateContainer;
