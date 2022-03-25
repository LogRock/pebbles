import React from "react";
import { up } from "styled-breakpoints";
import styled from "styled-components";

export const SelectWrapper = styled.div<{ focus?: boolean; spaced?: boolean }>`
  display: flex;
  position: ${({ focus }) => (focus ? "fixed" : "relative")};
  z-index: ${({ focus }) => (focus ? "99999" : "9")};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  flex-flow: column nowrap;
  margin-top: ${({ theme, spaced }) => (spaced ? theme.inputBox.spacing : 0)};
  padding: ${({ theme, focus }) => (focus ? theme.spacings.md : undefined)};

  background: ${({ theme, focus }) =>
    focus ? theme.colors.shades["0"] : "none"};

  ${up("desktop")} {
    position: relative;
    z-index: unset;
    padding: 0;

    background: none;
  }
`;

export const SelectItems = styled.div<{
  focus?: boolean;
  helper?: React.ReactNode;
  description?: string;
}>`
  display: ${({ focus }) => (focus ? "flex" : "hidden")};
  box-sizing: border-box;
  flex-flow: column nowrap;
  flex-grow: 1;
  flex-shrink: 1;
  width: 100%;
  overflow-y: auto;

  background: ${({ theme }) => theme.colors.shades["0"]};
  box-shadow: ${({ theme, focus }) =>
    focus ? undefined : theme.select.items.shadow};

  ${up("desktop")} {
    display: ${({ focus }) => (focus ? "flex" : "none")};
    position: absolute;
    z-index: 99999999;
    top: ${({ theme, description, helper }) =>
      `calc(
        ${theme.spacings.xxlg} 
        + ${description ? theme.inputBox.label.lineHeight : "0px"} 
        + -${helper ? theme.inputBox.helper.fontSize : "0px"}
        + ${helper ? "14px" : "0px"}
      )`};
    flex-grow: unset;
    flex-shrink: unset;

    box-shadow: ${({ theme }) => theme.select.items.shadow};
  }
`;
