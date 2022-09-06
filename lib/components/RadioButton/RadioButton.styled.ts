import styled from "styled-components";

export const RadioButtonContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  margin-top: ${({ theme }) => theme.spacings.sm};
  margin-bottom: ${({ theme }) => theme.spacings.sm};
`;

export const RadioButtonInput = styled.input`
  width: 0;
  height: 0;
`;

export const RadioButtonRadio = styled.div<{ checked?: boolean }>`
  position: relative;
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

  background-color: ${({ theme }) => theme.colors.primary[500]};
`;
