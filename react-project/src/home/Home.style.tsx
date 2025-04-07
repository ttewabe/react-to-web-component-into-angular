import styled from "styled-components";


export const StyledHome = styled.div`
  display: flex;               
    flex-direction: column; 
    align-items: center;  
    justify-content: center;
    margin: 0 10px; 
    height: 100vh;         
    background-color: #f0f0f0;
    color: #333;          
    font-family: Arial, sans-serif; 
`;

export const StyledCard = styled.div`
    background-color: #fff; /* White background for the card */
    padding: 20px;         /* Padding inside the card */
    border-radius: 8px;    /* Rounded corners */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow */
    width: 80%;            /* Card width */
    max-width: 600px;      /* Max width for larger screens */
    text-align: center;    /* Center text inside the card */
    `;

