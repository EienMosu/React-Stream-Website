import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
`;

export const PageTitle = styled.h1`
  font-size: 50px;
  margin-top: 50px;
  margin-left: 50px;
  border-bottom: 0.5px solid lightgray;
`;

export const Wrapper = styled.div`
  margin: 50px 300px;
`;

export const Stream = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  border: 1px solid lightgray;
  border-radius: 30px;
  padding: 40px;
  cursor: pointer;
`;

export const Left = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  float: left;
`;

export const Icon = styled.img`
  width: 100px;
`;

export const Middle = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 20px;
`;

export const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 10px;
`;

export const Desc = styled.span`
  font-size: 24px;
`;

export const Right = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  float: right;
`;

export const Button = styled.button`
  padding: 10px;
  width: 100px;
  background-color: ${(props) => props.color};
  color: white;
  font-size: 20px;
  margin-top: 10px;
  border: 1px solid #fff;
  border-radius: 10px;
  cursor: pointer;
`;

export const Create = styled.button`
  padding: 15px;
  background-color: crimson;
  color: #fff;
  margin: 20px;
  width: 25%;
  border: 1px solid #fff;
  border-radius: 10px;
  cursor: pointer;
  font-size: 24px;
  float: right;
`;
