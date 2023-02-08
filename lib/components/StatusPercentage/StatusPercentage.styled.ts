import styled from "styled-components";
import { StatusPercentageProps } from "./StatusPercentage.types";
import { spacingTokens } from "../../types/tokens";

export const StatusPctWrapper = styled.div<
  Pick<StatusPercentageProps, "size" | "spaceAfter">
>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: ${({ theme, spaceAfter }) =>
    spaceAfter ? theme.spacings?.[spaceAfter as spacingTokens] : 0};

  font-family: ${({ theme }) => theme.statusPercentage.fontFamily};
  font-size: ${({ theme, size }) => theme.statusPercentage.fontSize[size]};
  font-weight: ${({ theme }) => theme.statusPercentage.fontWeight};
  text-align: center;
`;
