import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 60%;
  height: 45%;
  border: 1px solid black;
  border-radius: 30px;
`;

export const ModalTitle = styled.h3`
  font-size: 30px;
  font-weight: 600;
  margin: 20px;
`;

export const Span = styled.span`
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  margin: 10px;
`;

export const StreamInfo = styled.span `
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  margin: 10px;
`

export const ButtonContainer = styled.div``;

export const Button = styled.button`
  margin: 15px 5px;
  border-radius: 10px;
  border: 1px solid #000;
  padding: 15px;
  font-size: 20px;
  background-color: ${(props) => props.color};
  color: white;
  cursor: pointer;
`;
