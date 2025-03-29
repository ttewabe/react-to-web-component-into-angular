
import styled from 'styled-components';

export const StyledTab = styled.div`
margin: 30px ;
height: 100vh;
 background-color: rgb(242, 242, 247);
 `
  export const StyledTitle= styled.div` 
    display: flex;
   justify-content: center;
    align-items: center;
    border-bottom: 2px solid #ddd;
  

  button {
  width: 100px;
  margin: 5px 10px;
    text-align: center;

    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    color: #555;
    border-bottom: 3px solid transparent;
    transition: all 0.3s ease-in-out;
  }

  button:hover {
    background-color:rgb(196, 202, 247);
  }

  button.active {
    color: rgb(237, 55, 155);
    border-bottom: 3px solidrgb(176, 44, 242);
  }
`
export const StyledContent= styled.div`
  margin: 20px 10px;
    padding: 15px;
    height: 70vh;
    border: 1px solid #ddd;
    border-top: none;
    background-color: #f9f9f9;
    min-height: 100px;
  }
`


