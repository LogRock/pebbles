import React, { FC } from "react";
import { InputBoxProps } from "../InputBox";

export interface BaseItemType {
  id: string | number;
  name?: string;
  label?: string;
  toString?: () => string;
}

export type SelectProps<ItemType> = {
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
  }>;
  renderHeader?: React.ReactNode;
  onItemSelected?: (item: ItemType) => void;
  inputProps?: InputBoxProps;
  spaced?: boolean;
};
