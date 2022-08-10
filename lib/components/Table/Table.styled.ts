import styled, { css } from "styled-components";
import Select from "../Select";
import { SelectItems } from "../Select/Select.styled";
import {
  overlineXSmallCSS,
  paragraphMediumCSS,
  paragraphSmallCSS,
  ParagraphXSmall,
  paragraphXSmallCSS,
} from "../Typography";

import { TableHeaderProps, TableRowProps } from "./Table.types";

export const Table = styled.table`
  border-spacing: 0;

  border-radius: 10px;

  box-shadow: ${({ theme }) => theme.shadows.medium};

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
  /* stylelint-disable-next-line */
`;

export const TableBody = styled.tbody`
  /* stylelint-disable-next-line */
`;

export const TFoot = styled.tfoot`
  position: relative;
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

export const TablePerPage = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
`;

export const FooterLeftArea = styled.td`
  display: flex;
  align-items: center;
`;

export const TablePerPageSelector = styled(Select)`
  max-width: 120px;
  margin-right: ${({ theme }) => theme.spacings.md};

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

  ${SelectItems} {
    top: 48px;
  }
`;

export const TablePerPageLabel = styled(ParagraphXSmall)`
  margin-right: 8px;

  color: ${({ theme }) => theme.colors.neutral[500]};
  text-transform: uppercase;
`;
