import React from "react";
import { FloatLabelWrapper, StyledInput, StyledLabel, StyledTextarea } from "./CustomFloatLabel.style";

interface CustomFloatLabelProps {
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  label: string;
  type?: string;
  component?: "input" | "textarea";
}

const CustomFloatLabel: React.FC<CustomFloatLabelProps> = ({
  id,
  name,
  value,
  onChange,
  onBlur,
  label,
  type = "text",
  component = "input",
}) => {
  return (
    <FloatLabelWrapper>
      {component === "textarea" ? (
        <StyledTextarea id={id} name={name} value={value} onChange={onChange} onBlur={onBlur} placeholder=" " />
      ) : (
        <StyledInput id={id} name={name} type={type} value={value} onChange={onChange} onBlur={onBlur} placeholder=" " />
      )}
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
    </FloatLabelWrapper>
  );
};

export default CustomFloatLabel;
