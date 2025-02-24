import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { InputText } from 'primereact/inputtext';
import { FloatLabel } from 'primereact/floatlabel';                            
import { FormContainer,  StyledBackground, StyledButton, StyledError } from "./Settlement.style";

export interface ISettlementProps {
  formTitle?: string;
}

export const Settlement = ({formTitle}: ISettlementProps) => {
  const initialValues = {
    settlementAmount: "",
    settlementDate: "",
    acceptedLiability: ""
  };

  const validationSchema = Yup.object().shape({
    settlementAmount: Yup.number()
      .required("Settlement Amount is required")
      .min(1, "Settlement Amount must be greater than 0"),
    settlementDate: Yup.string()
      .required("Settlement Date is required"),
    acceptedLiability: Yup.string()
      .required("Accepted Liability is required")
  });

  const { values, touched, setFieldValue, errors, handleBlur, handleSubmit } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: values => {
      console.log("Form submitted with values:", values);
    }
  });

  const handleSettlementAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue("settlementAmount", event.target.value);
    console.log("Settlement Amount:", event.target.value);
  };

  const handleSettlementDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue("settlementDate", event.target.value);
    console.log("Settlement Date:", event.target.value);
  };

  return (
    <StyledBackground>
      <FormContainer onSubmit={handleSubmit}>
        {formTitle}
        <div>
          <FloatLabel>
            <InputText 
              id="settlementAmount"
              name="settlementAmount"
              onBlur={handleBlur}
              value={values.settlementAmount}
              onChange={handleSettlementAmountChange}
            />
            <label htmlFor="settlementAmount">Settlement Amount</label>
          </FloatLabel>
          {touched.settlementAmount && errors.settlementAmount && 
          <StyledError>{errors.settlementAmount}</StyledError>}
        </div>

        <div>
          <FloatLabel>
            <InputText
              id="settlementDate"
              name="settlementDate"
              value={values.settlementDate}
              onChange={handleSettlementDateChange}
              className={touched.settlementDate && errors.settlementDate ? 'p-invalid' : ''}
            />
            <label htmlFor="settlementDate">Settlement Date</label>
          </FloatLabel>
          {touched.settlementDate && errors.settlementDate && <StyledError>{errors.settlementDate}</StyledError>}
        </div>

        <div>
          <FloatLabel>
            <InputText
              id="acceptedLiability"
              name="acceptedLiability"
              value={values.acceptedLiability}
              onChange={e => setFieldValue("acceptedLiability", e.target.value)}
              className={touched.acceptedLiability && errors.acceptedLiability ? 'p-invalid' : ''}
            />
            <label htmlFor="acceptedLiability">Accepted Liability</label>
          </FloatLabel>
          {touched.acceptedLiability && errors.acceptedLiability && <StyledError>{errors.acceptedLiability}</StyledError>}
        </div>

        <StyledButton type="submit">Submit</StyledButton>
      </FormContainer>
    </StyledBackground>
  );
};