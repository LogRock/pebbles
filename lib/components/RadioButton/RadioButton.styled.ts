import styled, { css } from "styled-components";

export const RadioButtonInput = styled.input<{ checked?: boolean }>`
  display: inline-block;
  appearance: none;

  position: relative;
  top: 3px;
  box-sizing: border-box;
  width: ${({ theme }) => theme.spacings.md};
  height: ${({ theme }) => theme.spacings.md};
  margin: 0;
  margin-right: ${({ theme }) => theme.spacings.sm};
  padding: 0;

  border: 1.5px solid
    ${({ theme, checked }) =>
      checked ? theme.colors.primary[500] : theme.colors.neutral[300]};
  border-radius: 100%;

  cursor: pointer;

  &:focus {
    outline: 1px solid transparent;
  }

  ${({ checked }) =>
    checked &&
    css`
      &::before {
        content: "";

        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        box-sizing: border-box;
        width: ${({ theme }) => theme.spacings.xsm};
        height: ${({ theme }) => theme.spacings.xsm};
        margin: auto;
        overflow: hidden;

        border-radius: 50%;

        box-shadow: ${({ theme }) =>
          `inset ${theme.spacings.xsm} ${theme.spacings.xsm} ${theme.colors.primary[500]}`};
      }
    `}
`;

export const RadioButtonContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-flow: row nowrap;
  align-items: flex-start;
  margin-top: ${({ theme }) => theme.spacings.sm};
  margin-bottom: ${({ theme }) => theme.spacings.sm};

  label {
    font-family: "Archivo", sans-serif;
    font-size: 18px;
  }
`;
