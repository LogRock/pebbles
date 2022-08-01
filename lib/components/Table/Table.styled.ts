import styled, { css } from "styled-components";
import {
  overlineXSmallCSS,
  paragraphMediumCSS,
  paragraphSmallCSS,
  paragraphXSmallCSS,
} from "../Typography";

import { TableHeaderProps, TableRowProps } from "./Table.types";

export const Table = styled.table`
  overflow: hidden;
  border-spacing: 0;

  border-radius: 10px;
`;

export const TableHead = styled.thead`
  /* stylelint-disable-next-line */
`;

export const TableBody = styled.tbody`
  /* stylelint-disable-next-line */
`;

export const TFoot = styled.tfoot`
  ${paragraphXSmallCSS}

  width: 100%;

  background-color: ${({ theme }) => theme.colors.shades[0]};

  tr {
    td {
      padding-top: ${({ theme }) => theme.spacings.md};
      padding-right: ${({ theme }) => theme.spacings.big};
      padding-bottom: ${({ theme }) => theme.spacings.md};

      text-align: right;
      vertical-align: middle;
    }
  }
`;

export const TH = styled.th<TableHeaderProps>`
  ${overlineXSmallCSS}

  padding: ${({ theme }) => theme.spacings.md};

  text-align: ${({ center }) => (center ? "center" : "left")};

  svg {
    height: 100%;
    margin-left: 10px;
  }
`;

export const TableDatum = styled.td<{ center?: boolean }>`
  ${paragraphMediumCSS}
  padding: ${({ theme }) => theme.spacings.md};

  text-align: ${({ center }) => (center ? "center" : undefined)};
`;

export const TR = styled.tr<TableRowProps>`
  position: relative;

  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.primary[50] : theme.colors.shades[0]} !important;

  &:nth-child(even) {
    background-color: ${({ theme, isSelected }) =>
      !isSelected && theme.colors.neutral[100]}!important;
  }

  ${TableDatum} {
    font-weight: ${({ isNew }) => (isNew ? 600 : 400)} !important;
  }

  ${TableDatum}:first-of-type {
    ${({ isNew }) =>
      isNew
        ? css`
            &::before {
              content: " ";

              position: absolute;
              top: 0;
              bottom: 0;
              left: 0;
              width: 3px;

              border-top-right-radius: 3px;
              border-bottom-right-radius: 3px;

              background: ${({ theme }) => theme.colors.success[500]};
            }
          `
        : undefined}
  }
`;

export const New = styled.span`
  ${paragraphSmallCSS}
  padding: 4px 8px;

  border-radius: 100px;

  background-color: ${({ theme }) => theme.colors.success[50]};

  font-weight: 500;
`;

export const TablePaginationButton = styled.button`
  padding: 0 18px;

  border: none;

  background: none;

  vertical-align: middle;

  &:active {
    background-color: ${({ theme }) => theme.colors.neutral[100]};
  }
`;
