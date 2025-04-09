
import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 5px 10px;
  height: 100vh;
  padding: 1rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const Label = styled.label`
  display: block;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #333;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 120px;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  resize: none;
  outline: none;
  box-sizing: border-box;

  &:focus {
    border-color: #4f46e5;
    box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.2);
  }
`;

export const CharacterCount = styled.div`
  text-align: right;
  font-size: 14px;
  color: #666;
  margin-top: 0.25rem;
`;