import styled from "styled-components";
const Modal2 = ({onCancel,deleteMovie}) => {
  return (
    <>  
    <BackDropDiv onClick={onCancel}/>
    <ModalDivHandler>
      <h3>Do you really want to DELETE?</h3>
      <NoBtnHandler onClick={onCancel}>NO</NoBtnHandler>
      <YesBtnHandler onClick={deleteMovie}>YES</YesBtnHandler>
    </ModalDivHandler>
    </>
  );
};
const ModalDivHandler = styled.div`
  background: white;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  position: absolute;
  top: 45%;
  left: 40%;
  z-index: 20;
`;
const NoBtnHandler = styled.button`
  color: blue;
  background-color: white;
  border: 1px solid white;
  margin-left: 8rem;
`;
const YesBtnHandler = styled.button`
  width: 5rem;
  height: 2rem;
  color: white;
  background-color: blue;
  border-radius: 5px;
  border: 1px solid #0505bd;
  margin-top: -2rem;
 margin-left: 1rem;
`;
const BackDropDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.7);
`;
export default Modal2;
