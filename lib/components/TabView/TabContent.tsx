import React, { FC } from "react";

import styled from "styled-components";

import { TabViewProps } from "./TabView.types";

export const TabContentWrapper = styled.div<Pick<TabViewProps, "bgColor">>`
  min-height: 100px;

  font-family: ${({ theme }) => theme.tabView.fontFamily};
  font-size: ${({ theme }) => theme.tabView.fontSize};
  font-weight: ${({ theme }) => theme.tabView.fontWeight};
`;

const TabContent: FC<TabViewProps> = ({ bgColor = "#fff", children }) => {
  return <TabContentWrapper bgColor={bgColor}>{children}</TabContentWrapper>;
};

export default TabContent;
