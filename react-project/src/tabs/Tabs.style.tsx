import styled from 'styled-components';

export const StyledTab = styled.div`
  margin: 30px;
  height: 100vh;
  background-color: rgb(242, 242, 247);
`;

export const StyledTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  div.tabs-tab {
  gap: 40px; 
  margin:10px;
  margin-bottom: 0; 
  text-align: center;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  color: #555;
  border-bottom: 3px solid transparent;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: rgb(196, 202, 247);
  }

  &.active {
    color: rgb(237, 55, 155);
    border-bottom: 3px solid rgb(176, 44, 242);
  }
}
`;

export const StyledContent = styled.div`
  margin: 12px 30px;
  padding: 25px;
  width: 95%; 
  height: 60vh;
  min-height: 100px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-top: 2px solid #ddd;
  border-radius: 5px; 
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;

`;
