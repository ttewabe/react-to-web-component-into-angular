import { useState } from "react";
import { InputText } from 'primereact/inputtext';
import { StyledBackground } from "./Settlement.style";
import 'primereact/resources/themes/lara-light-blue/theme.css';  // Theme
import 'primereact/resources/primereact.min.css';               // Core styles
import 'primeicons/primeicons.css';                             // Icons
// import { Button } from 'primereact/button';


export interface ISettlementProps {
  formTitle: string;
  onSave: (amount:number) => void;
}

export const Settlement = ({ formTitle, onSave }: ISettlementProps) => {
  const [settlementAmount, setSettlementAmount] = useState<number>(0);
  const [settlementDate, setSettlementDate] = useState<string>(" ");
  const [acceptedLiability, setAcceptedLiability] = useState<string>(" ");

  const handleSettlementAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSettlementAmount(Number(event.target.value));
    onSave(Number(event.target.value));
  };

  const handleSettlementDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSettlementDate(event.target.value);
  };

  const handleAcceptedLiabilityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptedLiability(event.target.value);
  };

  return (
    <StyledBackground>
      <h2><strong>{formTitle}</strong></h2>
      <div>
        <label>Settlement Amount</label>
        <InputText 
          value={settlementAmount?.toString()}
          onChange={handleSettlementAmountChange}
        />
        <label>Settlement Date</label>
        <InputText 
          value={settlementDate}
          onChange={handleSettlementDateChange}
        />
        <label>Accepted Liability</label>
        <InputText 
          value={acceptedLiability}
          onChange={handleAcceptedLiabilityChange}
        />
        </div>
    </StyledBackground>
  );
};
