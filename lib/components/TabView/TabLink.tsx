import React, { FC } from "react";

import styled from "styled-components";

import { TabViewProps } from "./TabView.types";

export const TabLinkWrapper = styled.li<
  Pick<TabViewProps, "isActive" | "disabled">
>`
  display: flex;
  align-items: center;
  padding: 8px 16px;

  border-bottom: ${({ isActive }) => (isActive ? "4px solid" : "none")};
  border-color: ${({ theme }) => theme.colors.primary[500]};

  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.neutral[900] : theme.colors.neutral[400]};
  font-family: Archivo, sans-serif;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0em;
  line-height: 24px;
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
}) => {
  return (
    <TabLinkWrapper isActive={isActive} disabled={disabled}>
      {children}
    </TabLinkWrapper>
  );
};

export default TabLink;
