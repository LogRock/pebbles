import styled from "styled-components";
import { paragraphMediumCSS } from "../Typography/Typography.styled";

export const ToggleIndicator = styled.span<{ disabled?: boolean }>`
  position: relative;
  width: ${({ theme }) => theme.toggle.width};
  height: ${({ theme }) => theme.toggle.height};
  margin-right: ${({ theme }) => theme.toggle.marginRight};

  border-width: ${({ theme }) => theme.toggle.default.borderWidth};
  border-style: ${({ theme }) => theme.toggle.default.borderStyle};
  border-radius: ${({ theme }) => theme.toggle.default.borderRadius};
  border-color: ${({ theme }) => theme.toggle.default.borderColor};

  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.neutral[300] : theme.toggle.default.background};

  &:after {
    content: "";

    position: absolute;
    top: ${({ theme }) => theme.toggle.indicator.top};
    left: ${({ theme }) => theme.toggle.indicator.left1};
    width: ${({ theme }) => theme.toggle.indicator.width};
    height: ${({ theme }) => theme.toggle.indicator.height};

    transition: all 200ms;

    border-radius: ${({ theme }) => theme.toggle.borderRadius};

    background-color: ${({ theme }) => theme.toggle.indicator.color};
  }
`;

export const Label = styled.label<{ disabled?: boolean; spaced?: boolean }>`
  ${paragraphMediumCSS}
  ${({ theme, disabled }) =>
    disabled ? `color: ${theme.colors.neutral[300]};` : ""}

  display: flex;
  flex-flow: row-reverse nowrap;
  align-items: start;
  justify-content: flex-end;
  margin-top: ${({ theme, spaced }) => (spaced ? theme.inputBox.spacing : 0)};

  &:hover input ~ ${ToggleIndicator} {
    border-color: ${({ theme }) => theme.toggle.checked.background};
  }
`;

export const Input = styled.input`
  position: absolute;
  width: 0;
  height: 0;

  opacity: 0;

  cursor: pointer;

  &:checked ~ ${ToggleIndicator} {
    border-color: ${({ theme }) => theme.toggle.checked.borderColor};

    background-color: ${({ theme }) => theme.toggle.checked.background};
  }

  &:checked ~ ${ToggleIndicator}:after {
    display: block;
    left: ${({ theme }) => theme.toggle.indicator.left2};
  }
`;
