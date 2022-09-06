import styled from "styled-components";
import { overlineXSmallCSS } from "../../Typography";

export const RadioButtonGroupLabel = styled.div`
  margin-bottom: ${({ theme }) => theme.spacings.xxsm};

  color: ${({ theme }) => theme.colors.neutral[500]};

  ${overlineXSmallCSS}
`;
