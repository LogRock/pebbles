import styled from "styled-components";

export const RadioButtonInput = styled.input`
  position: absolute;
  width: ${({ theme }) => theme.spacings.md};
  height: ${({ theme }) => theme.spacings.md};
  margin: 0;
  padding: 0;

  opacity: 0;
`;

export const RadioButtonRadio = styled.div<{ checked?: boolean }>`
  position: relative;
  z-index: -1;
  box-sizing: border-box;
  width: ${({ theme }) => theme.spacings.md};
  height: ${({ theme }) => theme.spacings.md};
  margin-right: ${({ theme }) => theme.spacings.sm};

  border: 1.5px solid
    ${({ theme, checked }) =>
      checked ? theme.colors.primary[500] : theme.colors.neutral[300]};
  border-radius: ${({ theme }) => theme.spacings.md};
`;

export const RadioButtonMarker = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  box-sizing: border-box;
  width: ${({ theme }) => theme.spacings.xsm};
  height: ${({ theme }) => theme.spacings.xsm};

  transform: translate(-50%, -50%);

  border-radius: ${({ theme }) => theme.spacings.xsm};

  opacity: 0;
  background-color: ${({ theme }) => theme.colors.primary[500]};
`;

export const RadioButtonContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  margin-top: ${({ theme }) => theme.spacings.sm};
  margin-bottom: ${({ theme }) => theme.spacings.sm};

  ${RadioButtonInput}:checked + ${RadioButtonRadio} > ${RadioButtonMarker} {
    opacity: 1;
  }

  ${RadioButtonInput}:checked + ${RadioButtonRadio} {
    border: 1.5px solid ${({ theme }) => theme.colors.primary[500]};
  }
`;
