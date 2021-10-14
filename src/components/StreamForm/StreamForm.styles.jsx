import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
`;

export const Form = styled.form`
  margin: 35px 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 200px;
  padding: 3px 10px;
  border: none;
  border-bottom: 1px solid #000;
  margin-bottom: 5px;
  outline: none;
  font-size: 20px;
`;

export const Label = styled.label`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  margin-top: 10px;
  font-size: 18px;
  background-color: blue;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 10px;
  padding: 10px 15px;
  cursor: pointer;
`;

export const Span = styled.span`
  font-size: 14px;
  color: crimson;
  margin-bottom: 40px;
`;
