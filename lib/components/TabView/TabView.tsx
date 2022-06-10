import React, { FC } from "react";
import { TabViewWrapper } from "./TabView.styled";
import { TabViewProps } from "./TabView.types";

const TabView: FC<TabViewProps> = ({
  bgColor = "#fff",
  borderRadius = 10,
  children,
  ...props
}) => {
  return (
    <TabViewWrapper bgColor={bgColor} borderRadius={borderRadius} {...props}>
      {children}
    </TabViewWrapper>
  );
};

export default TabView;
