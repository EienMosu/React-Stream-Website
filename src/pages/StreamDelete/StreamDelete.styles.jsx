import styled from "styled-components";

export const Container = styled.div `
    z-index: -1;
`

export const PageTitle = styled.h3`
  font-size: 50px;
  margin-top: 50px;
  margin-left: 50px;
  border-bottom: 0.5px solid lightgray;
`;

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