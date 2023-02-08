import styled from "styled-components";
import { ListProps } from "./List.types";
import { spacingTokens } from "../../types/tokens";

export const ListWrapper = styled.ul<Pick<ListProps, "spaceAfter">>`
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
  justify-content: flex-start;
  margin-bottom: ${({ theme, spaceAfter }) =>
    spaceAfter ? theme.spacings?.[spaceAfter as spacingTokens] : 0};
  padding: 0;

  list-style: none;
`;
