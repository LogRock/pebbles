import styled from "styled-components";
import { Shadows, Spacings } from "../../types/theme";

export interface CardProps {
  shadow?: keyof Shadows;
  padding?: keyof Spacings;
  radius?: keyof Spacings;
}

const Card2 = styled.div<CardProps>`
  padding: ${({ theme, padding }) => theme.spacings[padding || "md"]};

  border-radius: ${({ theme, radius }) => theme.spacings[radius || "sm"]};

  background: ${({ theme }) => theme.colors.shades[0]};
  box-shadow: ${({ theme, shadow }) => theme.shadows[shadow || "small"]};
`;

export default Card2;
