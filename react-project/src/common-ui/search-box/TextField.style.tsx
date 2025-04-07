import styled from "styled-components";

export const TextFieldStyle = styled.div`
  margin: 0 10px;
  padding: 3px 0;
  background-color: rgb(242, 242, 247);
  height: 100vh;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;
  transition: border-color 0.3s ease-in-out;
  background-color: #f8f9fa;

  input {
    height: 50px;
    margin: 30px;
    padding: 0 10px;
    border: 3px solid #ccc;
    width: 70%;
    border-radius: 4px;
    font-size: 19px;
    box-sizing: border-box;
    transition: border-color 0.3s ease-in-out;
    &:focus {
      border-color: #007bff;
      padding: 0 10px;
      font-weight: 500;
      outline: none;
      box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }
  }
`;
