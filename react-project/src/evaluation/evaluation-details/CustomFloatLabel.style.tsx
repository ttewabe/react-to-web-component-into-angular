import styled from "styled-components";

export const FloatLabelWrapper = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #007ad9;
  }

  &:focus + label, &:not(:placeholder-shown) + label {
    top: -10px;
    font-size: 12px;
    color: #007ad9;
    padding: 0 1px;
  }
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.2s;
  resize: vertical;
  min-height: 100px;

  &:focus {
    border-color: #007ad9;
  }

  &:focus + label, &:not(:placeholder-shown) + label {
    top: -10px;
    font-size: 12px;
    color: #007ad9;
    padding: 0 1px;
  }
`;

export const StyledLabel = styled.label`
  position: absolute;
  left: 5px;
  top: 20%;
  transform: translateY(-50%);
  font-size: 16px;
  color: #666;
  transition: all 0.2s ease-in-out;
  pointer-events: none;
`;
