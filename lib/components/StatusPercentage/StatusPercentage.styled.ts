import styled from "styled-components";
import { StatusPercentageProps } from "./StatusPercentage.types";

export const StatusPctWrapper = styled.div<Pick<StatusPercentageProps, "size">>`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  font-family: ${({ theme }) => theme.statusPercentage.fontFamily};
  font-size: ${({ theme, size }) => theme.statusPercentage.fontSize[size]};
  font-weight: ${({ theme }) => theme.statusPercentage.fontWeight};
  text-align: center;
`;
