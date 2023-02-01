import styled, { css } from "styled-components";
import { Shadows, Spacings } from "../../types/theme";

export interface CardProps {
  shadow?: keyof Shadows;
  padding?: keyof Spacings;
  radius?: keyof Spacings;
  noPadding?: boolean;
}

const Card = styled.div<CardProps>`
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
