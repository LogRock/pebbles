import React, { FC } from "react";
import { TabViewWrapper } from "./TabView.styled";
import { TabViewProps } from "./TabView.types";

const TabView: FC<TabViewProps> = ({ variant = "primary", children }) => {
  return <TabViewWrapper variant={variant}>{children}</TabViewWrapper>;
};

export default TabView;
