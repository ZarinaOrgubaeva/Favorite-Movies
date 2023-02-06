import ReactDOM from "react-dom";
import Card from "./Card";
import styled from "styled-components";
import { useRef } from "react";
export const Backdrop = ({ onClick }) => {
  return <BackDropDiv onClick={onClick} />;
};
export const ModalOverlay = ({ onClick, onAddMovie}) => {
  const titleInputRef = useRef();
  const imgInputRef = useRef();
  const ratingInputRef = useRef();
  const addMovieHandler = (event) => {
    event.preventDefault();
    const enteredtitle = titleInputRef.current.value;
    const enteredImg = imgInputRef.current.value;
    const enteredRating = ratingInputRef.current.value;
    const enteredId = Math.random().toString();
    const movieDate = {
      enteredId,
      enteredtitle,
      enteredImg,
      enteredRating,
    };
    onAddMovie(movieDate);
    console.log(movieDate);
  };
  return (
    <Card>
      <LabelName htmlFor="title">Movie Title</LabelName>
      <InputHandler type="text" id="title" ref={titleInputRef} />
      <LabelName htmlFor="img">Image URL</LabelName>
      <InputHandler type="text" id="img" ref={imgInputRef} />
      <LabelName htmlFor="rating">Your Rating </LabelName>
      <InputHandler type="number" id="rating" ref={ratingInputRef} />
      <CancelBtnHandler onClick={onClick}>Cancel</CancelBtnHandler>
      <AddBtnHandler onClick={addMovieHandler}>Add</AddBtnHandler>
    </Card>
  );
};
export const Modal = ({
  onCancel,
  onClick,
  title,
  type,
  onConfirm,
  onAddMovie,
}) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={onCancel} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={title}
          type={type}
          onClick={onClick}
          onConfirm={onConfirm}
          onAddMovie={onAddMovie}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

// style
const LabelName = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;
const InputHandler = styled.input`
  &:focus {
    background-color: #ff9900;
  }
`;
const CancelBtnHandler = styled.button`
  width: 5rem;
  height: 2rem;
  color: blue;
  background-color: #a3a3fd;
  border-radius: 5px;
  border: 1px solid #a3a3fd;
  margin-top: 0.5rem;
  margin-left: 4rem;
`;
const AddBtnHandler = styled.button`
  width: 5rem;
  height: 2rem;
  color: white;
  background-color: blue;
  border-radius: 5px;
  border: 1px solid #0505bd;
  margin-top: -2rem;
  margin-left: 10rem;
`;
const BackDropDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;
