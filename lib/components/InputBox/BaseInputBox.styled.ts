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

export const HelperDiv = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.spacings.xxsm};
  margin-left: ${({ theme }) => theme.spacings.xxsm};
`;

export const Helper = styled(Text)<Pick<BaseInputBoxProps, "status">>`
  color: ${({ theme }) => theme.inputBox.helper.color};
  font-size: ${({ theme }) => theme.inputBox.helper.fontSize};
  font-style: ${({ theme }) => theme.inputBox.helper.fontStyle};
  font-weight: ${({ theme }) => theme.inputBox.helper.fontWeight};
  line-height: ${({ theme }) => theme.inputBox.helper.lineHeight};
  text-transform: none;
`;

export const HelperIcon = styled.div<Pick<BaseInputBoxProps, "status">>`
  margin-right: ${({ theme }) => theme.inputBox.helper.margin};

  color: ${({ theme }) => theme.inputBox.helper.color};
`;

export const HintDiv = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 16px;
  flex-direction: row;
  align-items: center;
  height: 50px;
`;

export const Hint = styled(Text)<Pick<BaseInputBoxProps, "disabled">>`
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.neutral[300] : theme.inputBox.helper.color};
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

export const BaseStyleInput = css<
  Pick<BaseInputBoxProps, "status" | "maskStatus">
>`
  display: flex;
  box-sizing: ${({ theme }) => theme.inputBox.boxSizing};
  flex-direction: row;
  flex-grow: 0;
  align-items: center;
  align-self: stretch;
  width: ${({ theme }) => theme.inputBox.width};
  height: ${({ theme }) => theme.inputBox.height};
  padding: ${({ theme }) => theme.inputBox.padding};
  padding-right: 58px;

  border: ${({ theme, status, maskStatus }) =>
    theme.inputBox[status || maskStatus || defaultStatus].border};
  border-radius: ${({ theme }) => theme.inputBox.borderRadius};

  background: ${({ theme }) => theme.inputBox.background};
  box-shadow: ${({ theme, status, maskStatus }) =>
    theme.inputBox[status || maskStatus || defaultStatus].boxShadow};

  color: ${({ theme, status, maskStatus }) =>
    theme.inputBox[status || maskStatus || defaultStatus].color};

  &:focus {
    box-sizing: ${({ theme, status, maskStatus }) =>
      theme.inputBox[status || maskStatus || defaultStatus].focused.boxSizing};

    border: ${({ theme, status, maskStatus }) =>
      theme.inputBox[status || maskStatus || defaultStatus].focused.border};
    border-radius: ${({ theme, status, maskStatus }) =>
      theme.inputBox[status || maskStatus || defaultStatus].focused
        .borderRadius};
    outline: none;

    background: ${({ theme }) => theme.inputBox.background};
    box-shadow: ${({ theme, status, maskStatus }) =>
      theme.inputBox[status || maskStatus || defaultStatus].focused.boxShadow};
  }

  &::placeholder {
    display: flex;
    align-items: center;

    color: ${(props: any) =>
      props.disabled
        ? props.theme.colors.neutral[300]
        : props.theme.inputBox.placeholder.color};
  }

  &:disabled {
    box-sizing: ${({ theme }) => theme.inputBox.disabled.boxSizing};
    align-items: center;
    padding: ${({ theme }) => theme.inputBox.padding};

    border: ${({ theme }) => theme.inputBox.disabled.border};
    border-radius: ${({ theme }) => theme.inputBox.borderRadius};

    background: ${({ theme }) => theme.inputBox.background};
    box-shadow: ${({ theme }) => theme.inputBox.disabled.boxShadow};

    color: ${({ theme }) => theme.colors.neutral[300]};

    cursor: not-allowed;
  }
`;

export const StyledInput = styled.input<Pick<BaseInputBoxProps, "status">>`
  ${BaseStyleInput}
`;

export const StyledMaskInput = styled(InputMask)<
  Pick<BaseInputBoxProps, "maskStatus">
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
