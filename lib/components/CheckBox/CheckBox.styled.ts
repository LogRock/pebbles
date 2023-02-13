import styled, { css } from "styled-components";
import { paragraphMediumCSS } from "../Typography/Typography.styled";
import { spacingTokens } from "../../types/tokens";

export const CheckMark = styled.span<{ disabled?: boolean }>`
  position: relative;
  box-sizing: border-box;
  width: ${({ theme }) => theme.checkBox.width};
  min-width: ${({ theme }) => theme.checkBox.width};
  height: ${({ theme }) => theme.checkBox.height};
  margin-top: 2px;
  margin-right: ${({ theme }) => theme.checkBox.marginRight};

  border-width: ${({ theme }) => theme.checkBox.default.borderWidth};
  border-style: ${({ theme }) => theme.checkBox.default.borderStyle};
  border-radius: ${({ theme }) => theme.checkBox.default.borderRadius};
  border-color: ${({ theme }) => theme.checkBox.default.borderColor};

  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.neutral[300] : theme.checkBox.default.background};

  &:after {
    content: "";

    display: none;
    position: absolute;
    top: ${({ theme }) => theme.checkBox.checkMark.top};
    left: ${({ theme }) => theme.checkBox.checkMark.left};
    width: ${({ theme }) => theme.checkBox.checkMark.width};
    height: ${({ theme }) => theme.checkBox.checkMark.height};

    transform: translate(-50%, -60%) rotate(45deg);

    border: solid ${({ theme }) => theme.checkBox.checkMark.color};
    border-width: 0 2px 2px 0;
  }
`;

export const Label = styled.label<{
  disabled?: boolean;
  spaced?: boolean;
  spaceAfter?: spacingTokens;
}>`
  ${paragraphMediumCSS}
  ${({ theme, disabled }) =>
    disabled ? `color: ${theme.colors.neutral[300]};` : ""}

  display: flex;
  flex-flow: row-reverse nowrap;
  align-items: start;
  justify-content: flex-end;
  margin: ${({ theme, spaced }) => (spaced ? theme.spacings.big : 0)} 0;
  ${({ theme, spaceAfter }) =>
    spaceAfter
      ? css`
          margin-bottom: ${theme.spacings?.[spaceAfter as spacingTokens]};
        `
      : ""}

  &:hover input ~ ${CheckMark} {
    border-color: ${({ theme }) => theme.checkBox.checked.background};
  }
`;

export const LabelContent = styled.div`
  margin-top: ${({ theme }) => theme.spacings.xxsm};
`;

export const Input = styled.input`
  position: absolute;
  flex-shrink: 0;
  width: 0;
  height: 0;

  opacity: 0;

  cursor: pointer;

  &:checked ~ ${CheckMark} {
    border-width: ${({ theme }) => theme.checkBox.checked.borderWidth};
    border-style: ${({ theme }) => theme.checkBox.checked.borderStyle};
    border-radius: ${({ theme }) => theme.checkBox.checked.borderRadius};
    border-color: ${({ theme }) => theme.checkBox.checked.borderColor};

    background-color: ${({ theme }) => theme.checkBox.checked.background};
  }

  &:checked ~ ${CheckMark}:after {
    display: block;
  }
`;
