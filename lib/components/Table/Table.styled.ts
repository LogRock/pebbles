import styled, { css } from "styled-components";
import Select2 from "../Select2";
import { DropdownIndicatorWrapper } from "../Select2/Select.styled";
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
    background-color: white;
  }
`;

export const TableBody = styled.tbody`
  /* NOOP */
`;

export const TH = styled.th<TableHeaderProps>`
  ${overlineXSmallCSS}

  align-items: flex-start;
  padding: ${({ theme }) => theme.spacings.md};

  background-color: white;

  text-align: ${({ center }) => (center ? "center" : "left")};
  vertical-align: top;

  svg {
    flex-shrink: 0;
    margin-left: ${({ theme }) => theme.icons.table.ordering.spacing};
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
    isSelected ? theme.colors.primary[50] : "white"} !important;

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
  margin-left: ${({ theme }) => theme.icons.table.pagination.spacing};
  padding: 0;

  border: none;

  background: none;

  vertical-align: middle;

  cursor: pointer;

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

export const TablePerPageSelector = styled(Select2)`
  min-width: 94px;
  max-width: 120px;
  margin-right: ${({ theme }) => theme.spacings.xbig};

  ${DropdownIndicatorWrapper} {
    padding: ${({ theme }) => theme.icons.table.pageSizeSelector.spacing};

    svg {
      font-size: ${({ theme }) =>
        theme.icons.table.pageSizeSelector.size} !important;
    }
  }
`;

export const TFoot = styled.tfoot`
  ${paragraphXSmallCSS}

  width: 100%;

  background-color: white;

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
