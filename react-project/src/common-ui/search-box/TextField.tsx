import React, { useState } from "react";
import InputMask from "react-input-mask";
import { TextFieldStyle } from "./TextField.style";

export interface ITextFieldProps {
  label: string;
}

export const TextFieldMaskedPage = ({ label }: ITextFieldProps) => {
  const [phone, setPhone] = useState("");

  const handleChange = (e: any) => {
    console.log("Masked:", e.target.value);
    setPhone(e.target.value);
  };

  return (
    <div>
      <TextFieldStyle>
        <label htmlFor="phone">Phone Number:</label>
        <InputMask
          mask="(999) 999-9999"
          placeholder="(123) 456-7890"
          value={phone}
          onChange={handleChange}
        >
          {(inputProps) => <input {...inputProps} type="text" />}
        </InputMask>
      </TextFieldStyle>
    </div>
  );
};
