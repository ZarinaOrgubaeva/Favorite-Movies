import styled from "styled-components";
const Card = (props) => {
  return <BackDropDivHandler>{props.children}</ BackDropDivHandler>;
};

export default Card;
//style
const BackDropDivHandler = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  padding: 5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  position: absolute;
  top: 45%;
  left: 40%;
  z-index: 20;
`;
