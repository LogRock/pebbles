import {
  BsChevronRight,
  BsChevronDoubleRight,
  BsChevronLeft,
  BsChevronDoubleLeft,
} from "react-icons/bs";

import { isFunction } from "lodash";
import React, { FC, PropsWithChildren, useMemo } from "react";
import Ordering from "./Ordering";
import {
  New,
  TableDatum,
  TablePaginationButton,
  TFoot,
  TH,
  TR,
  TablePerPage,
  TablePerPageLabel,
  TablePerPageSelector,
  ItemsCount,
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

interface PageSizeOption {
  value: number;
  label: string;
}

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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: props.center ? "center" : "unset",
        }}
      >
        {children}
        {showOrdering && <Ordering currentOrder={currentOrder} />}
      </div>
    </TH>
  );
};

export const TableFooter: FC<PropsWithChildren<TableFooterProps>> = ({
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
  pageSize,
  pageSizeOptions,
  onPageSizeSelected,
  children,
  numberOfColumns,
}) => {
  const format =
    itemsFromToTotalFormatter && isFunction(itemsFromToTotalFormatter)
      ? itemsFromToTotalFormatter
      : (from: string, to: string, total: string) =>
          to === total ? `${from} to ${total}` : `${from}-${to} of ${total}`;

  const itemsCount = showItemsCount ? (
    <ItemsCount>
      {format(itemsFrom || "", itemsTo || "", itemsTotal || "")}
    </ItemsCount>
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
          {goToFirstPageContent || <BsChevronDoubleLeft />}
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
          {goToPreviousPageContent || <BsChevronLeft />}
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
          {goToNextPageContent || <BsChevronRight />}
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
          {goToLastPageContent || <BsChevronDoubleRight />}
        </TablePaginationButton>
      );
    }

    return "";
  }, [showGoToLastPage, onGoToLastPageClicked, goToLastPageContent]);

  const itemsPerPageSelector = useMemo(() => {
    if (pageSizeOptions && onPageSizeSelected) {
      return (
        <TablePerPage>
          <TablePerPageLabel>Items per page</TablePerPageLabel>
          <TablePerPageSelector
            isMulti={false}
            options={pageSizeOptions.map((pageSizeOption) => ({
              value: pageSizeOption,
              label: pageSizeOption.toFixed(0),
            }))}
            onChange={(option) => {
              const selectedPageSize = option as PageSizeOption;
              onPageSizeSelected(selectedPageSize.value);
            }}
            defaultValue={{ label: pageSize?.toFixed(0), value: pageSize }}
            menuPlacement="top"
          />
        </TablePerPage>
      );
    }

    return "";
  }, [pageSize, pageSizeOptions, onPageSizeSelected]);

  const firstTDColSpan = useMemo(() => {
    if (!numberOfColumns) return 4;
    if (numberOfColumns <= 4) return numberOfColumns - 1;
    return 4;
  }, []);

  return (
    <TFoot>
      <tr>
        {(itemsPerPageSelector || itemsCount) && (
          <td colSpan={firstTDColSpan}>
            {itemsPerPageSelector} {itemsCount}
          </td>
        )}
        <td colSpan={999999}>
          {children}
          {goToFirstPage}
          {goToPreviousPage}
          {goToNextPage}
          {goToLastPage}
        </td>
      </tr>
    </TFoot>
  );
};
