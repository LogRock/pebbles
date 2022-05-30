import React, { FC } from "react";

import styled from "styled-components";

import { TabViewProps } from "./TabView.types";

export const TabLinksWrapper = styled.ul<
  Pick<TabViewProps, "bgColor" | "fitWidth">
>`
  display: flex;
  align-items: flex-start;
  justify-content: ${({ fitWidth }) =>
    fitWidth ? "space-between" : "flex-start"};
  padding: ${({ theme }) => theme.spacings.md};

  border-radius: 10px 10px 0 0;

  background-color: ${({ bgColor }) => bgColor};

  list-style: none;
`;

const TabLinks: FC<TabViewProps> = ({
  bgColor = "#fff",
  fitWidth = false,
  children,
}) => {
  return (
    <TabLinksWrapper bgColor={bgColor} fitWidth={fitWidth}>
      {children}
    </TabLinksWrapper>
  );
};

export default TabLinks;
