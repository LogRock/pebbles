import React, { FC } from "react";

import styled from "styled-components";

import { TabViewProps } from "./TabView.types";

export const TabLinksWrapper = styled.div<
  Pick<TabViewProps, "bgColor" | "justify">
>`
  display: flex;
  align-items: center;
  justify-content: ${({ justify }) => justify};
  padding: ${({ theme }) => `${theme.spacings.md} ${theme.spacings.xbig}`};

  border-radius: 10px 10px 0 0;

  background-color: ${({ bgColor }) => bgColor};
`;

const TabLinks: FC<TabViewProps> = ({
  bgColor = "#fff",
  justify = "center",
  children,
}) => {
  return (
    <TabLinksWrapper bgColor={bgColor} justify={justify}>
      {children}
    </TabLinksWrapper>
  );
};

export default TabLinks;
