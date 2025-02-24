
import styled from "styled-components";


export const StyledBackground = styled.div`
margin: 20px;
padding: 3px 0;
  background-color: rgb(58, 58, 58);
`;

export const FormContainer = styled.form`
 display:flex;
 flex-direction:column;
 row-gap:30px;
 max-width:400px;
 margin:70px auto;
 >div>span{
 display:flex;
 flex-direction:column;
 background-color: #ffffff;
 font-size: 16px;
 }
`;

export const StyledError = styled.p`
position:absolute;
  color: red;
  font-size: 12px;
  margin-top: -2px;
`;

export const StyledButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;