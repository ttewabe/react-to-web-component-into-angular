import React, { Children, ReactNode, useState } from "react";
import { StyledTab, StyledTitle, StyledContent } from "./Tabs.style";

interface ITabsProps {
  activeIndex?: number;
  onSelect?: (index: number) => void;
  children?: ReactNode;
}

export const Tabs = ({ activeIndex = 0, onSelect, children, ...rest }: ITabsProps) => {
  const [tabIndex, setTabIndex] = useState<number>(activeIndex);

  const handleActiveTab = (index: number) => {
    setTabIndex(index);
    onSelect?.(index);
  };

  const tabs = Children.toArray(children).map((child: any, index: number) => {
    const label = child.props.title;

    return (
      <div
        key={index}
        tabIndex={0}
        onClick={() => handleActiveTab(index)}
        className={`tabs-tab ${index === tabIndex ? "active" : ""}`}
        title={label}
      >
        {label}
      </div>
    );
  });

  const activeTabContent = Children.toArray(children)[tabIndex] as React.ReactElement | undefined;

  return (
    <StyledTab {...rest}>
      <StyledTitle className="tabs-title">{tabs}</StyledTitle>
      <StyledContent>{activeTabContent}</StyledContent>
    </StyledTab>
  );
};
