import styled from "styled-components";
import { CardProps } from "./Card.types";

const Card = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  padding: ${({ theme, noPadding }) => (noPadding ? 0 : theme.spacings.xbig)};
  overflow: hidden;

  border-radius: ${({ theme }) => theme.spacings.xsm};

  background-color: ${({ theme }) => theme.colors.shades[0]};
  box-shadow: ${({ theme }) => theme.shadows.small};

  font-family: ${({ theme }) => theme.card.fontFamily};
  font-size: ${({ theme }) => theme.card.fontSize};
  font-weight: ${({ theme }) => theme.card.fontWeight};
`;

export default Card;
