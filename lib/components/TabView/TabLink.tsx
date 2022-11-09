import React, { FC } from "react";
import styled, { css } from "styled-components";

import { TabLinkProps } from "./TabView.types";

const TabLinkAnchor = styled.a<TabLinkProps>`
  display: flex;
  position: relative;
  align-items: flex-end;
  gap: ${({ theme }) => theme.spacings.xsm};

  margin: 0 ${({ theme }) => theme.spacings.md};
  padding-top: 0;
  padding-right: ${({ theme }) => theme.spacings.xbig};
  padding-bottom: ${({ theme }) => theme.spacings.md};
  padding-left: ${({ theme }) => theme.spacings.xbig};

  color: ${({ theme, active }) =>
    active ? theme.colors.neutral[900] : theme.colors.neutral[400]};
  font-family: ${({ theme }) => theme.tabView.fontFamily};
  font-size: ${({ theme }) => theme.tabView.fontSize};
  font-weight: ${({ theme }) => theme.tabView.fontWeight};
  line-height: 1.5;
  text-align: center;

  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &:hover {
    color: ${({ theme, disabled }) => !disabled && theme.colors.neutral[900]};
  }

  ${({ active, theme }) => {
    if (active) {
      return css`
        &:after {
          content: " ";

          position: absolute;
          right: 0;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 4px;

          border-top-left-radius: 4px;
          border-top-right-radius: 4px;

          background: ${theme.colors.primary[500]};
        }
      `;
    }
    return "";
  }}
`;

const TabLink: FC<TabLinkProps> = ({ disabled, href, ...props }) => (
  <TabLinkAnchor
    href={disabled ? undefined : href}
    disabled={disabled}
    {...props}
  />
);

export default TabLink;
