import React from "react";
import { spacingTokens } from "../../types/tokens";

export interface ToggleProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  spaced?: boolean;
  spaceAfter?: spacingTokens;
}
