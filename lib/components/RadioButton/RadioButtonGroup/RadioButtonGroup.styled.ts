import styled from "styled-components";
import { overlineXSmallCSS } from "../../Typography";

export const RadioButtonGroupLabel = styled.div`
  margin-bottom: ${({ theme }) => theme.spacings.xxsm};

  ${overlineXSmallCSS}

  color: ${({ theme }) => theme.colors.neutral[500]};
  font-weight: normal;
`;
