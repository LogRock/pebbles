import React, { FC } from "react";

import styled from "styled-components";

import { TabViewProps } from "./TabView.types";

export const TabLinkWrapper = styled.a<
  Pick<TabViewProps, "isActive" | "disabled">
>`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacings.xxsm} ${theme.spacings.xbig}`};

  border-bottom: ${({ isActive }) => (isActive ? "4px solid" : "none")};
  border-color: ${({ theme }) => theme.colors.primary[500]};

  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.neutral[900] : theme.colors.neutral[400]};
  font-family: ${({ theme }) => theme.tabView.fontFamily};
  font-size: ${({ theme }) => theme.tabView.fontSize};
  font-weight: ${({ theme }) => theme.tabView.fontWeight};
  text-align: left;

  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &:hover {
    color: ${({ theme, disabled }) => !disabled && theme.colors.neutral[900]};
  }
`;

const TabLink: FC<TabViewProps> = ({
  isActive = false,
  disabled = false,
  children,
  ...props
}) => {
  return (
    <TabLinkWrapper isActive={isActive} disabled={disabled} {...props}>
      {children}
    </TabLinkWrapper>
  );
};

export default TabLink;
