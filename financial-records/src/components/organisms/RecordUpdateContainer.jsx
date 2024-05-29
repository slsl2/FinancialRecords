import styled from "styled-components";
import StyledContainer from "../../styles/StyledContainer.jsx";
import Button from "../atoms/Button.jsx";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const RecordUpdateContainer = ({ records, setRecords }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const record = records.find((record) => record.id === id);

  const [date, setDate] = useState(record ? record.date : "");
  const [item, setItem] = useState(record ? record.item : "");
  const [amount, setAmount] = useState(record ? record.amount : "");
  const [description, setDescription] = useState(
    record ? record.description : ""
  );

  useEffect(() => {
    if (record) {
      setDate(record.date);
      setItem(record.item);
      setAmount(record.amount);
      setDescription(record.description);
    }
  }, [record]);

  const updateRecord = (e) => {
    e.preventDefault();
    const updatedRecords = records.map((record) =>
      record.id === id
        ? { ...record, date, item, amount: +amount, description }
        : record
    );
    setRecords(updatedRecords);
    // navigate("/");
  };

  const deleteRecord = (e) => {
    e.preventDefault();
    const updatedRecords = records.filter((record) => record.id !== Number(id));
    setRecords(updatedRecords);
    navigate("/");
  };

  //   const goBack = (e) => {
  //     e.preventDefault();
  //     navigate("/");
  //   };
  //   console.log(record);

  return (
    <>
      <RecordUpdateForm onSubmit={updateRecord}>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        ></input>
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        ></input>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        ></input>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <BtnsDiv>
          <Button
            backgroundColor="#4287f5"
            color="white"
            contents="수정"
            type="submit"
          ></Button>
          <Button
            backgroundColor="#ff4d4d"
            color="white"
            contents="삭제"
            type="button"
            onClick={deleteRecord}
          ></Button>
          <Link to="/">
            <Button
              backgroundColor="#6c757d"
              color="white"
              contents="뒤로 가기"
              type="button"
              // onClick={goBack}
            ></Button>
          </Link>
        </BtnsDiv>
      </RecordUpdateForm>
    </>
  );
};

const RecordUpdateForm = styled(StyledContainer).attrs({ as: "form" })`
  font-size: 2rem;
`;

const BtnsDiv = styled.div`
  display: flex;
`;

export default RecordUpdateContainer;
