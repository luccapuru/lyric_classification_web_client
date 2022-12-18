import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  text-align: center;
  color: #fff;
`;

export const TextArea = styled.textarea`
  background-color: #fff;
  border: solid 2px #000;
  border-radius: 10px;
  padding: 15px;
`;

export const Button = styled.button`
  background-color: #7206ba;
  display: block;
  border: none;
  color: #fff;
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
  cursor: pointer;
  margin-top: 20px;
`;

export const Result = styled.h2`
  color: #fff;
`;
