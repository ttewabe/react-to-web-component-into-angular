import { useState } from "react";
import { EditorContainer, StyledCard, StyledEditor } from "./RichTextEditor.style";

export interface IRichTextEditorProps {

}
export const RichTextEditorPage = ({ }: IRichTextEditorProps) => {
  const [text, setText] = useState<string>('');

  const handleSetText = (e: any) => {
    setText(e.htmlValue);
  }

  return (
    <EditorContainer>
      <StyledCard>
        <StyledEditor
          value={text}
          onTextChange={handleSetText}
        />
      </StyledCard>
    </EditorContainer>
  );
};