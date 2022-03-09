import styled from "styled-components";
import { InputBoxProps } from "./InputBox";

const defaultStatus = "info";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.span`
  color: ${({ theme }) => theme.inputBox.label.color};
  font-family: ${({ theme }) => theme.inputBox.fontFamily};
  font-size: ${({ theme }) => theme.inputBox.label.fontSize};
  font-style: ${({ theme }) => theme.inputBox.label.fontStyle};
  font-weight: ${({ theme }) => theme.inputBox.fontWeight};
  line-height: ${({ theme }) => theme.inputBox.label.lineHeight};
  font-feature-settings: ${({ theme }) => theme.inputBox.fontFeatureSettings};
`;

export const HelperDiv = styled.div`
  display: flex;
`;

export const Helper = styled(Label)<Pick<InputBoxProps, "status">>`
  margin: ${({ theme }) => theme.inputBox.helper.margin};

  color: ${({ theme, status }) =>
    theme.inputBox[status || defaultStatus].helperColor};
  font-size: ${({ theme }) => theme.inputBox.helper.fontSize};
  font-style: ${({ theme }) => theme.inputBox.helper.fontStyle};
  font-weight: ${({ theme }) => theme.inputBox.helper.fontWeight};
  line-height: ${({ theme }) => theme.inputBox.helper.lineHeight};
`;

export const HelperIcon = styled.div<Pick<InputBoxProps, "status">>`
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

export const Hint = styled(Label)<Pick<InputBoxProps, "status">>`
  margin: ${({ theme }) => theme.inputBox.hint.margin};

  color: ${({ theme, status }) =>
    theme.inputBox[status || defaultStatus].hintColor};
`;

export const HintIconWrapper = styled.div<Pick<InputBoxProps, "status">>`
  margin: 4px 4px;

  color: ${({ theme, status }) =>
    theme.inputBox[status || defaultStatus].hintColor};
`;

export const InputDiv = styled.div`
  position: relative;
`;

export const StyledInput = styled.input<Pick<InputBoxProps, "status">>`
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
  &:disabled {
    box-sizing: ${({ theme }) => theme.inputBox.disabled.boxSizing};
    align-items: center;
    padding: ${({ theme }) => theme.inputBox.padding};

    border: ${({ theme }) => theme.inputBox.disabled.border};
    border-radius: ${({ theme }) => theme.inputBox.disabled.borderRadius};

    background: ${({ theme }) => theme.inputBox.background};
    box-shadow: ${({ theme }) => theme.inputBox.disabled.boxShadow};
  }
  &:placeholder {
    display: flex;
    align-items: center;

    color: ${({ theme }) => theme.inputBox.placeholder.color};
  }
`;