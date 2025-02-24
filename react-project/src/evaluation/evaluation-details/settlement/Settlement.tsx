import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import CustomFloatLabel from "../CustomFloatLabel";
import { FormContainer, StyledBackground, StyledButton, StyledError } from "./Settlement.style";

export interface ISettlementProps {
  formTitle?: string;
}

export const Settlement = ({formTitle}: ISettlementProps) => {
  const initialValues = {
    settlementAmount: "",
    settlementDate: "",
    acceptedLiability: "",
    messages: "",
  };

  const validationSchema = Yup.object().shape({
    settlementAmount: Yup.number()
      .required("Settlement Amount is required")
      .min(1, "Settlement Amount must be greater than 0"),
    settlementDate: Yup.string().required("Settlement Date is required"),
    acceptedLiability: Yup.string().required("Accepted Liability is required"),
    messages: Yup.string(),
  });

  const { values, touched, setFieldValue, errors, handleBlur, handleSubmit } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log("Form submitted with values:", values);
    },
  });

  return (
    <StyledBackground>
      <FormContainer onSubmit={handleSubmit}>
        {formTitle && <h2>{formTitle}</h2>}
        <div>
          <CustomFloatLabel
            id="settlementAmount"
            name="settlementAmount"
            value={values.settlementAmount}
            onChange={(e) => setFieldValue("settlementAmount", e.target.value)}
            onBlur={handleBlur}
            label="Settlement Amount"
          />
          {touched.settlementAmount && errors.settlementAmount && 
            <StyledError>{errors.settlementAmount}</StyledError>}
        </div>

        <div>
          <CustomFloatLabel
            id="settlementDate"
            name="settlementDate"
            value={values.settlementDate}
            onChange={(e) => setFieldValue("settlementDate", e.target.value)}
            onBlur={handleBlur}
            label="Settlement Date"
          />
          {touched.settlementDate && errors.settlementDate && 
            <StyledError>{errors.settlementDate}</StyledError>}
        </div>

        <div>
          <CustomFloatLabel
            id="acceptedLiability"
            name="acceptedLiability"
            value={values.acceptedLiability}
            onChange={(e) => setFieldValue("acceptedLiability", e.target.value)}
            onBlur={handleBlur}
            label="Accepted Liability"
          />
          {touched.acceptedLiability && errors.acceptedLiability && 
            <StyledError>{errors.acceptedLiability}</StyledError>}
        </div>

        <div>
          <CustomFloatLabel
            id="messages"
            name="message"
            value={values.messages}
            onChange={(e) => setFieldValue("messages", e.target.value)}
            onBlur={handleBlur}
            label="Messages"
            component="textarea"
          />
        </div>

        <StyledButton type="submit">Submit</StyledButton>
      </FormContainer>
    </StyledBackground>
  );
};
