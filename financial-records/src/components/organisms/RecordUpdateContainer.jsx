import styled from "styled-components";
import StyledContainer from "../../styles/StyledContainer.jsx";
import { useDispatch, useSelector } from "react-redux";
import Button from "../atoms/Button.jsx";
import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { editRecord, deleteRecord } from "../../redux/slices/recordsSlice.js";

const RecordUpdateContainer = () => {
  const records = useSelector((state) => state.records);
  const dispatch = useDispatch();

  const { id } = useParams();
  const navigate = useNavigate();
  const dateRef = useRef(null);
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
      dateRef.current.focus();
    }
  }, [record]);

  const handleEditRecord = () => {
    const newRecord = {
      id: id,
      date: date,
      item: item,
      amount: amount,
      description: description,
    };
    dispatch(editRecord(newRecord));
    navigate("/");
  };

  const handleDeleteRecord = () => {
    if (!confirm("정말로 삭제하시겠습니까?")) {
      return false;
    }
    dispatch(deleteRecord({ id }));
    navigate("/");
  };

  const goBack = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <>
      <RecordUpdateDiv>
        <RecordUpdateForm onSubmit={handleEditRecord}>
          <span>날짜</span>
          <Input
            ref={dateRef}
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <span>항목</span>
          <Input
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <span>금액</span>
          <Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <span>내용</span>
          <Input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button
            backgroundColor="#4287f5"
            color="white"
            contents="수정"
            type="submit"
          ></Button>
        </RecordUpdateForm>
        <BtnsDiv>
          <Button
            backgroundColor="#ff4d4d"
            color="white"
            margin="0 1rem 0 0"
            contents="삭제"
            type="button"
            onClick={() => handleDeleteRecord()}
          ></Button>
          <Button
            backgroundColor="#6c757d"
            color="white"
            contents="뒤로 가기"
            type="button"
            onClick={goBack}
          ></Button>
        </BtnsDiv>
      </RecordUpdateDiv>
    </>
  );
};

const RecordUpdateDiv = styled(StyledContainer).attrs({ as: "div" })`
  font-size: 1.4rem;
`;
const RecordUpdateForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  font-size: 1.4rem;
  margin: 1rem 0 1rem 0;
  padding: 1rem;
`;

const BtnsDiv = styled.div`
  display: flex;
  margin-top: 1rem;
`;

export default RecordUpdateContainer;
