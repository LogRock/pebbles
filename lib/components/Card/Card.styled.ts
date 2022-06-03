import styled from "styled-components";

import { CardProps } from "./Card.types";

export const CardWrapper = styled.div<
  Pick<CardProps, "bgColor" | "borderRadius" | "padding" | "shadow">
>`
  display: flex;
  flex-direction: column;
  width: max-content;
  padding: ${({ padding }) => (padding ? `${padding}px` : "0px")};

  border-radius: ${({ borderRadius }) =>
    borderRadius ? `${borderRadius}px` : "none"};

  background-color: ${({ bgColor }) => bgColor};
  box-shadow: ${({ theme, shadow }) => (shadow ? theme.shadows.small : "none")};

  font-family: ${({ theme }) => theme.card.fontFamily};
  font-size: ${({ theme }) => theme.card.fontSize};
  font-weight: ${({ theme }) => theme.card.fontWeight};
`;
