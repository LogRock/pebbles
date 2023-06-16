/* eslint-disable @typescript-eslint/no-explicit-any */
import styled, { css } from "styled-components";
import { BaseInputBoxProps } from "./BaseInputBox";
import { spacingTokens } from "../../types/tokens";
import { Text } from "../Typography";
import InputMask from "react-input-mask";

const defaultStatus = "info";

export const StyledDiv = styled.div<{
  spaced?: boolean;
  spaceAfter?: spacingTokens;
}>`
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme, spaced }) => (spaced ? theme.inputBox.spacing : 0)};
  margin-bottom: ${({ theme, spaceAfter }) =>
    spaceAfter ? theme.spacings?.[spaceAfter as spacingTokens] : 0};
`;

export const HelperDiv = styled.div<{ destructive?: boolean }>`
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacings.xsm};

  color: ${({ theme, destructive }) =>
    destructive
      ? theme.inputBox.destructive.helperColor
      : theme.inputBox.info.helperColor};
`;

export const HelperIcon = styled.div<{ destructive?: boolean }>`
  display: flex;
  align-items: center;
  margin-right: ${({ theme }) => theme.inputBox.helper.margin};

  color: ${({ theme, destructive }) =>
    destructive
      ? theme.inputBox.destructive.helperColor
      : theme.inputBox.info.helperColor};
  font-size: 16px;

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const StartIconDiv = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 16px;
  flex-direction: row;
  align-items: center;
  height: 100%;
`;

export const HintDiv = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 16px;
  flex-direction: row;
  align-items: center;
  height: 100%;
`;

export const Hint = styled(Text)<Pick<BaseInputBoxProps, "disabled">>`
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.neutral[300] : theme.inputBox.info.helperColor};
`;

export const HintIconWrapper = styled.div<Pick<BaseInputBoxProps, "disabled">>`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin-left: 4px;

  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.neutral[300] : theme.icons.input.helper.color};
`;

export const InputDiv = styled.div`
  position: relative;
`;

export const BaseStyleInput = css<{
  hintSize?: number;
  startIconSize?: number;
  destructive?: boolean;
}>`
  display: flex;
  box-sizing: ${({ theme }) => theme.inputBox.boxSizing};
  flex-direction: row;
  flex-grow: 0;
  align-items: center;
  align-self: stretch;
  width: ${({ theme }) => theme.inputBox.width};
  height: ${({ theme }) => theme.inputBox.height};
  padding: ${({ theme }) => theme.inputBox.padding};
  padding-right: ${(props) => {
    if (props.hintSize) {
      return `calc(${props.hintSize}px + ${props.theme.spacings.big})`;
    }
  }};
  padding-left: ${(props) => {
    if (props.startIconSize) {
      return `calc(${props.startIconSize}px + ${props.theme.spacings.big})`;
    }
  }};

  border: ${({ theme, destructive }) =>
    theme.inputBox[destructive ? "destructive" : defaultStatus].border};
  border-radius: ${({ theme }) => theme.inputBox.borderRadius};

  background: ${({ theme }) => theme.inputBox.background};
  box-shadow: ${({ theme, destructive }) =>
    theme.inputBox[destructive ? "destructive" : defaultStatus].boxShadow};

  color: ${({ theme, destructive }) =>
    theme.inputBox[destructive ? "destructive" : defaultStatus].color};
  font-size: ${({ theme }) => theme.inputBox.fontSize};

  &:focus {
    box-sizing: ${({ theme, destructive }) =>
      theme.inputBox[destructive ? "destructive" : defaultStatus].focused
        .boxSizing};

    border: ${({ theme, destructive }) =>
      theme.inputBox[destructive ? "destructive" : defaultStatus].focused
        .border};
    border-radius: ${({ theme, destructive }) =>
      theme.inputBox[destructive ? "destructive" : defaultStatus].focused
        .borderRadius};
    outline: none;

    background: ${({ theme }) => theme.inputBox.background};
    box-shadow: ${({ theme, destructive }) =>
      theme.inputBox[destructive ? "destructive" : defaultStatus].focused
        .boxShadow};
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.neutral[400]};
  }

  &:disabled {
    box-sizing: ${({ theme }) => theme.inputBox.disabled.boxSizing};
    align-items: center;
    padding: ${({ theme }) => theme.inputBox.padding};
    padding-right: ${(props) => {
      if (props.hintSize) {
        return `calc(${props.hintSize}px + ${props.theme.spacings.big})`;
      }
    }};

    border: ${({ theme }) => theme.inputBox.disabled.border};
    border-radius: ${({ theme }) => theme.inputBox.borderRadius};

    background: ${({ theme }) => theme.inputBox.background};
    box-shadow: ${({ theme }) => theme.inputBox.disabled.boxShadow};

    color: ${({ theme }) => theme.colors.neutral[400]};

    cursor: not-allowed;
  }
`;

export const StyledInput = styled.input<
  Pick<BaseInputBoxProps, "destructive"> & {
    hintSize?: number;
    startIconSize?: number;
  }
>`
  ${BaseStyleInput}
`;

export const StyledMaskInput = styled(InputMask)<
  Pick<BaseInputBoxProps, "destructive"> & { hintSize?: number }
>`
  ${BaseStyleInput}
`;

export const ShowHidePasswordBtn = styled.div<{
  disabled: boolean | undefined;
}>`
  display: flex;
  align-items: center;
  margin-right: 12px;

  p {
    color: ${({ theme, disabled }) =>
      disabled ? theme.colors.neutral[400] : theme.colors.neutral[900]};
    font-family: Archivo, sans-serif;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;

    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  }
`;
