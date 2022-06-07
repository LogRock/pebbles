import React, { FC } from "react";

import styled from "styled-components";

import { TabViewProps } from "./TabView.types";

export const TabLinksWrapper = styled.div<Pick<TabViewProps, "bgColor">>`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacings.md} ${theme.spacings.xbig}`};
`;

const TabLinks: FC<TabViewProps> = ({ bgColor = "#fff", children }) => {
  return <TabLinksWrapper bgColor={bgColor}>{children}</TabLinksWrapper>;
};

export default TabLinks;
