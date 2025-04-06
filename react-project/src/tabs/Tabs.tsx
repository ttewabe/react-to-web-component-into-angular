import React, { useState } from "react";
import { motion } from "framer-motion";
import { StyledTab, StyledTitle, StyledContent } from "./Tabs.style";

interface ITabsProps {
  activeIndex?: number;
  onSelect?: (index: number) => void;
  children: React.ReactElement[];
}

export const Tabs = ({ activeIndex = 0, onSelect, children, ...rest }: ITabsProps) => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleActiveTab = (index: number) => {
    setTabIndex(index);
    onSelect?.(index);
  };

  const tabs = children.map((child: any, index: number) => {
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

  const activeTabContent = children[tabIndex]

  return (
    <StyledTab {...rest}>
      <StyledTitle className="tabs-title">{tabs}</StyledTitle>
      <StyledContent>
        <motion.div
          key={tabIndex}
          initial={{ opacity: 0, y: 20 }} // Start lower
          animate={{ opacity: 1, y: 0 }}  // Move up into view
          exit={{ opacity: 0, y: -20 }}   // Move up and fade out on exit
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {activeTabContent}
        </motion.div>
      </StyledContent>
    </StyledTab>
  );
};
