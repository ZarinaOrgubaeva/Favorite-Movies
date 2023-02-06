import { useEffect, useState } from "react";
import styled from "styled-components";
import { Modal } from "../modal/Modal";
import React from "react";
const Header = ({ onAddMovie }) => {
  const [addMovie, setAddMovie] = useState(false);
  const [cancel, setCancel] = useState(false);
  const onCancelHadler = () => {
    setCancel((prevState) => !prevState);
  };
  const onConfirmHadler = () => {
    setCancel((prevState) => !prevState);
  };

  const addMovieBtnHandler = () => {
    // event.preventDefault();
    setAddMovie((prevState) => !prevState);
  };
  useEffect(()=>{
    addMovieBtnHandler()
},[cancel])
  return (
    <React.Fragment>
      <HeaderHandler className="header">
        <TitleH1Handler>Favorite Movies</TitleH1Handler>
        {addMovie && <Modal onAddMovie={onAddMovie} onClick={onCancelHadler} onConfirm={onConfirmHadler} />}
        <AddBtnHandler onClick={addMovieBtnHandler}>Add movie</AddBtnHandler>
      </HeaderHandler>
    </React.Fragment>
  );
};
export default Header;
//style
const HeaderHandler = styled.header`
  box-sizing: border-box;
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5rem;
  background: #00329e;
`;
const TitleH1Handler = styled.h1`
  margin: 0;
  color: white;
  font-size: 1.5rem;
`;

const AddBtnHandler = styled.button`
  font: inherit;
  padding: 0.5rem 1rem;
  background: #f67722;
  border: 1px solid #f67722;
  color: white;
  border-radius: 6px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.26);
  cursor: pointer;
`;
