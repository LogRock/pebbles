import styled from "styled-components";
import { BaseInputBoxProps } from "./BaseInputBox";

const defaultStatus = "info";

export const StyledDiv = styled.div<{ spaced?: boolean }>`
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme, spaced }) => (spaced ? theme.inputBox.spacing : 0)};
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.inputBox.label.color};
  font-family: ${({ theme }) => theme.inputBox.fontFamily};
  font-size: ${({ theme }) => theme.inputBox.label.fontSize};
  font-style: ${({ theme }) => theme.inputBox.label.fontStyle};
  font-weight: ${({ theme }) => theme.inputBox.fontWeight};
  line-height: ${({ theme }) => theme.inputBox.label.lineHeight};
  font-feature-settings: ${({ theme }) => theme.inputBox.fontFeatureSettings};

  text-transform: uppercase;
`;

export const HelperDiv = styled.div`
  display: flex;
`;

export const Helper = styled(Label)<Pick<BaseInputBoxProps, "status">>`
  color: ${({ theme, status }) =>
    theme.inputBox[status || defaultStatus].helperColor};
  font-size: ${({ theme }) => theme.inputBox.helper.fontSize};
  font-style: ${({ theme }) => theme.inputBox.helper.fontStyle};
  font-weight: ${({ theme }) => theme.inputBox.helper.fontWeight};
  line-height: ${({ theme }) => theme.inputBox.helper.lineHeight};
`;

export const HelperIcon = styled.div<Pick<BaseInputBoxProps, "status">>`
  margin-right: ${({ theme }) => theme.inputBox.helper.margin};

  color: ${({ theme, status }) =>
    theme.inputBox[status || defaultStatus].helperColor};
`;

export const HintDiv = styled.div`
  display: flex;
  position: absolute;
  top: ${({ theme }) => theme.inputBox.hint.top};
  right: ${({ theme }) => theme.inputBox.hint.right};
  flex-direction: row;
  margin: ${({ theme }) => theme.inputBox.margin};
  padding: ${({ theme }) => theme.inputBox.padding};
`;

export const Hint = styled(Label)<Pick<BaseInputBoxProps, "disabled">>`
  margin: ${({ theme }) => theme.inputBox.hint.margin};

  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.neutral[300] : theme.inputBox.helper.color};
`;

export const HintIconWrapper = styled.div<Pick<BaseInputBoxProps, "disabled">>`
  margin: 4px 4px;

  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.neutral[300] : theme.inputBox.helper.color};
`;

export const InputDiv = styled.div`
  position: relative;
`;

export const StyledInput = styled.input<Pick<BaseInputBoxProps, "status">>`
  display: flex;
  box-sizing: ${({ theme }) => theme.inputBox.boxSizing};
  flex-direction: row;
  flex-grow: 0;
  align-items: center;
  align-self: stretch;
  width: ${({ theme }) => theme.inputBox.width};
  height: ${({ theme }) => theme.inputBox.height};
  margin: ${({ theme }) => theme.inputBox.margin};
  padding: ${({ theme }) => theme.inputBox.padding};

  border: ${({ theme, status }) =>
    theme.inputBox[status || defaultStatus].border};
  border-radius: ${({ theme }) => theme.inputBox.borderRadius};

  background: ${({ theme }) => theme.inputBox.background};
  box-shadow: ${({ theme, status }) =>
    theme.inputBox[status || defaultStatus].boxShadow};

  color: ${({ theme, status }) =>
    theme.inputBox[status || defaultStatus].color};
  font-family: ${({ theme }) => theme.inputBox.fontFamily};
  font-size: ${({ theme }) => theme.inputBox.fontSize};

  &:focus {
    box-sizing: ${({ theme, status }) =>
      theme.inputBox[status || defaultStatus].focused.boxSizing};

    border: ${({ theme, status }) =>
      theme.inputBox[status || defaultStatus].focused.border};
    border-radius: ${({ theme, status }) =>
      theme.inputBox[status || defaultStatus].focused.borderRadius};
    outline: none;

    background: ${({ theme }) => theme.inputBox.background};
    box-shadow: ${({ theme, status }) =>
      theme.inputBox[status || defaultStatus].focused.boxShadow};
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
