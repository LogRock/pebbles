import styled, { css } from "styled-components";
import { Shadows, Spacings } from "../../types/theme";
import { spacingTokens } from "../../types/tokens";

export interface CardProps {
  shadow?: keyof Shadows;
  padding?: keyof Spacings;
  radius?: keyof Spacings;
  noPadding?: boolean;
  spaceAfter?: spacingTokens;
}

const Card = styled.div<CardProps>`
  margin-bottom: ${({ theme, spaceAfter }) =>
    spaceAfter ? theme.spacings?.[spaceAfter as spacingTokens] : 0};
  padding: ${({ theme, padding }) => theme.spacings[padding || "md"]};

  border-radius: ${({ theme, radius }) => theme.spacings[radius || "sm"]};

  background: white;
  box-shadow: ${({ theme, shadow }) => theme.shadows[shadow || "small"]};

  ${({ noPadding }) =>
    noPadding &&
    css`
      padding: 0;
      overflow: hidden;
    `}
`;

export default Card;
