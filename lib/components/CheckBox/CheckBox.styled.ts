import styled from "styled-components";
import { paragraphMediumCSS } from "../Typography/Typography.styled";

export const CheckMark = styled.span<{ disabled?: boolean }>`
  position: relative;
  width: ${({ theme }) => theme.checkBox.width};
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

    transform: rotate(45deg);

    border: solid ${({ theme }) => theme.checkBox.checkMark.color};
    border-width: 0 3px 3px 0;
  }
`;

export const Label = styled.label<{ disabled?: boolean }>`
  ${paragraphMediumCSS}
  ${({ theme, disabled }) =>
    disabled ? `color: ${theme.colors.neutral[300]};` : ""}

  display: flex;
  flex-flow: row-reverse nowrap;
  align-items: start;
  justify-content: flex-end;

  &:hover input ~ ${CheckMark} {
    background-color: ${({ theme }) => theme.colors.neutral[300]};
  }
`;

export const Input = styled.input`
  position: absolute;
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
