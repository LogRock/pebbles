import {
  mdiChevronDoubleLeft,
  mdiChevronDoubleRight,
  mdiChevronLeft,
  mdiChevronRight,
} from "@mdi/js";
import Icon from "@mdi/react";
import { isFunction } from "lodash";
import React, { FC, useContext, useMemo } from "react";
import { ThemeContext } from "styled-components";
import Ordering from "./Ordering";
import {
  New,
  TableDatum,
  TablePaginationButton,
  TFoot,
  TH,
  TR,
} from "./Table.styled";
import {
  TableHeaderProps,
  TableRowProps,
  TableFooterProps,
} from "./Table.types";

export {
  Table as default,
  TableHead,
  TableBody,
  TableDatum,
  TFoot,
} from "./Table.styled";

export const TableRow: FC<TableRowProps> = ({
  isNew,
  children,
  addEmptyTDAtEnd,
  ...props
}) => {
  return (
    <TR {...props} isNew={isNew}>
      {children}
      {isNew ? (
        <TableDatum>
          <New>New</New>
        </TableDatum>
      ) : null}
      {addEmptyTDAtEnd ? <TableDatum></TableDatum> : null}
    </TR>
  );
};

export const TableHeader: FC<TableHeaderProps> = ({
  showOrdering,
  children,
  currentOrder,
  ...props
}) => {
  return (
    <TH {...props}>
      {children}
      {showOrdering && <Ordering currentOrder={currentOrder} />}
    </TH>
  );
};

export const TableFooter: FC<TableFooterProps> = ({
  showItemsCount,
  itemsFrom,
  itemsTo,
  itemsTotal,
  itemsFromToTotalFormatter,
  showGoToFirstPage,
  goToFirstPageContent,
  onGoToFirstPageClicked,
  showGoToPreviousPage,
  goToPreviousPageContent,
  onGoToPreviousPageClicked,
  showGoToNextPage,
  goToNextPageContent,
  onGoToNextPageClicked,
  showGoToLastPage,
  goToLastPageContent,
  onGoToLastPageClicked,
  children,
}) => {
  const theme = useContext(ThemeContext);

  const format =
    itemsFromToTotalFormatter && isFunction(itemsFromToTotalFormatter)
      ? itemsFromToTotalFormatter
      : (from: string, to: string, total: string) =>
          `${from}-${to} of ${total}`;

  const itemsCount = showItemsCount ? (
    <span>{format(itemsFrom || "", itemsTo || "", itemsTotal || "")}</span>
  ) : null;

  const goToFirstPage = useMemo(() => {
    if (showGoToFirstPage) {
      return (
        <TablePaginationButton
          onClick={
            isFunction(onGoToFirstPageClicked)
              ? onGoToFirstPageClicked
              : () => null
          }
        >
          {goToFirstPageContent || (
            <Icon
              path={mdiChevronDoubleLeft}
              size="18px"
              color={theme.colors.neutral[700]}
            />
          )}
        </TablePaginationButton>
      );
    }

    return "";
  }, [showGoToFirstPage, onGoToFirstPageClicked, goToFirstPageContent]);

  const goToPreviousPage = useMemo(() => {
    if (showGoToPreviousPage) {
      return (
        <TablePaginationButton
          onClick={
            isFunction(onGoToPreviousPageClicked)
              ? onGoToPreviousPageClicked
              : () => null
          }
        >
          {goToPreviousPageContent || (
            <Icon
              path={mdiChevronLeft}
              size="18px"
              color={theme.colors.neutral[700]}
            />
          )}
        </TablePaginationButton>
      );
    }

    return "";
  }, [
    showGoToPreviousPage,
    onGoToPreviousPageClicked,
    goToPreviousPageContent,
  ]);

  const goToNextPage = useMemo(() => {
    if (showGoToNextPage) {
      return (
        <TablePaginationButton
          onClick={
            isFunction(onGoToNextPageClicked)
              ? onGoToNextPageClicked
              : () => null
          }
        >
          {goToNextPageContent || (
            <Icon
              path={mdiChevronRight}
              size="18px"
              color={theme.colors.neutral[700]}
            />
          )}
        </TablePaginationButton>
      );
    }

    return "";
  }, [showGoToNextPage, onGoToNextPageClicked, goToNextPageContent]);

  const goToLastPage = useMemo(() => {
    if (showGoToLastPage) {
      return (
        <TablePaginationButton
          onClick={
            isFunction(onGoToLastPageClicked)
              ? onGoToLastPageClicked
              : () => null
          }
        >
          {goToLastPageContent || (
            <Icon
              path={mdiChevronDoubleRight}
              size="18px"
              color={theme.colors.neutral[700]}
            />
          )}
        </TablePaginationButton>
      );
    }

    return "";
  }, [showGoToLastPage, onGoToLastPageClicked, goToLastPageContent]);

  return (
    <TFoot>
      <tr>
        <td colSpan={100}>
          {children}
          {itemsCount}
          {goToFirstPage}
          {goToPreviousPage}
          {goToNextPage}
          {goToLastPage}
        </td>
      </tr>
    </TFoot>
  );
};
