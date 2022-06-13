import React, { FC } from "react";

import styled from "styled-components";

import { TabViewProps } from "./TabView.types";

export const TabLinksWrapper = styled.div<Pick<TabViewProps, "bgColor">>`
  display: flex;
  flex-flow: row nowrap;
  align-items: stretch;
  justify-content: space-between;
`;

const TabLinks: FC<TabViewProps> = ({ bgColor = "#fff", children }) => {
  return <TabLinksWrapper bgColor={bgColor}>{children}</TabLinksWrapper>;
};

export default TabLinks;
