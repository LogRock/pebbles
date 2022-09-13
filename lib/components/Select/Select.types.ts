import React, { FC } from "react";
import { InputBoxProps } from "../InputBox";

/**
 * @deprecated in favor of Select2
 */
export interface BaseItemType {
  id: string | number;
  name?: string;
  label?: string;
  toString?: () => string;
}

/**
 * @deprecated in favor of Select2
 */
export type SelectProps<ItemType> = {
  multiSelect?: boolean;
  description?: string;
  hint?: {
    content: string;
    icon: null;
  };
  status?: "info" | "error";
  helper?: string;
  placeholder?: string;
  autoCompleteItems: ItemType[];
  renderItem?: FC<{
    item?: ItemType;
    onClick: () => void;
    onMouseEnter: () => void;
    highlighted?: boolean;
    selected?: boolean;
  }>;
  renderHeader?: React.ReactNode;
  onItemSelected?: (item: ItemType) => void;
  inputProps?: InputBoxProps;
  spaced?: boolean;
  maxHeight?: number;
  smartExpand?: boolean;
  hideHintIcon?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;
