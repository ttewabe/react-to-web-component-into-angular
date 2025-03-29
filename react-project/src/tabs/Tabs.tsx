
import React, { useState } from "react";
import { StyledTab, StyledTitle, StyledContent } from "./Tabs.style";


interface ITabsProps {
  children: React.ReactElement[];
}

export const Tabs = ({ children }: ITabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleActiveTab = (index: number) => {
    setActiveTab(index)
  }

  return (
    <StyledTab>
      <StyledTitle>
        {children.map((tab, index) => (
          <button
            type="button"
            key={index}
            onClick={() => handleActiveTab(index)}
            className={activeTab ===index? "active": ""}
          >
            {tab.props.title}
          </button>
        ))}
      </StyledTitle>
      <StyledContent>
      {children[activeTab]}
      </StyledContent>
    </StyledTab>
  );
};
