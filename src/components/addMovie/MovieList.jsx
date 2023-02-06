import styled from "styled-components";
export const MovieList = ({ title, img, rating,deleteBtnHandler, id}) => {
  return (
    <ContainerDivHandler> 
      <CardH2handler id={id}>{title}</CardH2handler>
      <CardTagImg  src={img} />
      <CardTagPHandler>{rating}</CardTagPHandler>
      <div>
      <DeleteBtnHandler onClick={deleteBtnHandler}>Delete</DeleteBtnHandler>
      </div>
      </ContainerDivHandler>
  );
};
const CardTagPHandler = styled.p`
  text-align: center;
  background-color: rgb(255, 144, 80);
  border-radius: 10px;
  width: 7rem;
  font-size: 1rem;
  position: relative;
  left: 15rem;
  top: -4rem;
`;
const CardTagImg = styled.img`
  width: 12rem;
 max-height: 10rem;
  margin-top: 0px;
`;
const CardH2handler = styled.h2`
  /* margin-left: 10rem; */
  position: absolute;
  left: 40rem;
`;
const DeleteBtnHandler = styled.button`
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 2px solid red;
  background-color: rgb(224, 33, 33);
  color: white;
  border-radius: 6px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.26);
  cursor: pointer;
  position: relative;
  left: 30rem;
  top: -7rem;
`;
const ContainerDivHandler = styled.div`
  margin: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  width: 40rem;
  height: 10rem;
  margin-left: 25rem;
  display: flex;
  flex-direction: column;
`;