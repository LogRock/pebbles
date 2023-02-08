import React from "react";
import { spacingTokens } from "../../types/tokens";
export interface CheckBoxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  spaced?: boolean;
  spaceAfter?: spacingTokens;
}
