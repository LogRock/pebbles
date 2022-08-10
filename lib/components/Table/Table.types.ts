import React from "react";
import { BaseItemType } from "../Select/Select.types";

export interface TableHeaderProps extends React.ComponentPropsWithoutRef<"th"> {
  showOrdering?: boolean;
  currentOrder?: OrderingEnum;
  center?: boolean;
}

export enum OrderingEnum {
  // eslint-disable-next-line no-unused-vars
  ASC = "ASC",
  // eslint-disable-next-line no-unused-vars
  DESC = "DESC",
}

export interface OrderingProps {
  currentOrder?: OrderingEnum;
}

export interface TableRowProps extends React.ComponentPropsWithoutRef<"tr"> {
  isNew?: boolean;
  isSelected?: boolean;
  addEmptyTDAtEnd?: boolean;
}

export interface TableFooterProps {
  showItemsCount?: boolean;
  itemsFrom?: string;
  itemsTo?: string;
  itemsTotal?: string;
  itemsFromToTotalFormatter?: (
    from: string,
    to: string,
    total: string
  ) => string;
  showGoToFirstPage?: boolean;
  goToFirstPageContent?: React.ReactNode;
  onGoToFirstPageClicked?: () => void;
  showGoToPreviousPage?: boolean;
  goToPreviousPageContent?: React.ReactNode;
  onGoToPreviousPageClicked?: () => void;
  showGoToNextPage?: boolean;
  goToNextPageContent?: React.ReactNode;
  onGoToNextPageClicked?: () => void;
  showGoToLastPage?: boolean;
  goToLastPageContent?: React.ReactNode;
  onGoToLastPageClicked?: () => void;
  itemsPerPage?: number;
  itemsPerPageOptions?: BaseItemType[];
  onSetItemsPerPage?: (item: BaseItemType) => void;
}
