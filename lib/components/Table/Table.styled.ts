import styled, { css } from "styled-components";
import Select from "../Select";
import {
  overlineXSmallCSS,
  paragraphMediumCSS,
  paragraphSmallCSS,
  paragraphXSmallCSS,
} from "../Typography";

import { TableHeaderProps, TableRowProps } from "./Table.types";

export const Table = styled.table`
  border-spacing: 0;

  tbody tr::after,
  tfoot tr::after {
    content: "";

    position: absolute;
    top: 0;
    right: ${({ theme }) => theme.spacings.md};
    left: ${({ theme }) => theme.spacings.md};
    height: 1px;

    background-color: ${({ theme }) => theme.colors.neutral[200]};
  }

  tbody tr:hover {
    background-color: ${({ theme }) => theme.colors.neutral[100]} !important;
  }
`;

export const TableHead = styled.thead`
  & td {
    background-color: ${({ theme }) => theme.colors.shades[0]};
  }
`;

export const TableBody = styled.tbody`
  /* NOOP */
`;

export const TH = styled.th<TableHeaderProps>`
  ${overlineXSmallCSS}

  align-items: flex-start;
  padding: ${({ theme }) => theme.spacings.md};

  background-color: ${({ theme }) => theme.colors.shades[0]};

  text-align: ${({ center }) => (center ? "center" : "left")};
  vertical-align: top;

  svg {
    flex-shrink: 0;
    width: 10px;
    min-width: 10px;
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

  &:nth-child(odd) {
    background-color: ${({ theme, isSelected }) =>
      !isSelected && theme.colors.neutral[50]} !important;
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

export const TablePerPage = styled.span`
  display: inline-flex;
  align-items: center;
`;

export const TablePerPageLabel = styled.label`
  ${paragraphSmallCSS}

  margin-right: 8px;

  color: ${({ theme }) => theme.colors.neutral[500]};
  text-transform: uppercase;
`;

export const TablePerPageSelector = styled(Select)`
  max-width: 120px;
  margin-right: ${({ theme }) => theme.spacings.xbig};

  input,
  button {
    height: 36px !important;

    font-size: 14px !important;
  }

  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
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
      padding-left: ${({ theme }) => theme.spacings.big};

      text-align: right;
      vertical-align: middle;
    }

    td:first-child {
      text-align: left !important;
    }
  }
`;

export const ItemsCount = styled.span`
  ${paragraphSmallCSS}

  margin-left: auto;

  color: ${({ theme }) => theme.colors.neutral["500"]};
`;
