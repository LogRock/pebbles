import React, { FC } from "react";
import { TabViewWrapper } from "./TabView.styled";
import { TabViewProps } from "./TabView.types";

const TabView: FC<TabViewProps> = ({ children }) => {
  return <TabViewWrapper>{children}</TabViewWrapper>;
};

export default TabView;
