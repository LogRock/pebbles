import styled from "styled-components";
import { CardProps } from "./Card.types";

const Card = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  padding: ${({ theme, noPadding }) => (noPadding ? 0 : theme.spacings.xbig)};

  border-radius: ${({ theme }) => theme.spacings.sm};

  background-color: ${({ theme }) => theme.colors.shades[0]};
  box-shadow: ${({ theme }) => theme.shadows.small};

  font-family: ${({ theme }) => theme.card.fontFamily};
  font-size: ${({ theme }) => theme.card.fontSize};
  font-weight: ${({ theme }) => theme.card.fontWeight};

  table {
    > :first-child > tr:first-child > :last-child {
      border-top-right-radius: ${({ theme }) => theme.spacings.sm};
    }

    > :first-child > tr:first-child > :first-child {
      border-top-left-radius: ${({ theme }) => theme.spacings.sm};
    }

    > :last-child > tr:last-child > :last-child {
      border-bottom-right-radius: ${({ theme }) => theme.spacings.sm};
    }

    > :last-child > tr:last-child > :first-child {
      border-bottom-left-radius: ${({ theme }) => theme.spacings.sm};
    }
  }
`;

export default Card;
