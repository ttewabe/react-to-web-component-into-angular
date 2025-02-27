import styled from "styled-components";
import { Editor } from "primereact/editor";


export const EditorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 30px 20px;
padding: 3px 0;
  background-color: rgb(242, 242, 247);
`;

export const StyledCard = styled.div`
background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 500px;
  max-width: 90%;
`;

export const StyledEditor = styled(Editor)`
  height: 420px;
  border-radius: 5px;
  overflow: hidden;
`;