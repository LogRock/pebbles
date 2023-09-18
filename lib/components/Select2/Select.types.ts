import React from "react";
import { spacingTokens } from "../../types/tokens";

export interface CustomSelectProps {
  label?: React.ReactNode;
  helper?: React.ReactNode;
  helperIcon?: React.ReactNode;
  spaceAfter?: spacingTokens;
  destructive?: boolean;
  required?: boolean;
  useBottomSheet?: boolean;
  bottomSheetFooter?: React.ReactNode;
  bottomSheetHeader?: React.ReactNode;
  bottomSheetPlaceholder?: string;
}
