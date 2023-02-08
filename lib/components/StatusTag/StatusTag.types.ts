import React from "react";
import { spacingTokens } from "../../types/tokens";

export enum STATUS_TAG_SIZES {
  SMALL = "SMALL",
  MEDIUM = "MEDIUM",
  LARGE = "LARGE",
}

export enum STATUS_TAG_VARIANTS {
  DESTRUCTIVE = "DESTRUCTIVE",
  DESTRUCTIVE_ALT = "DESTRUCTIVE_ALT",
  WARNING = "WARNING",
  WARNING_ALT = "WARNING_ALT",
  SUCCESS = "SUCCESS",
  SUCCESS_ALT = "SUCCESS_ALT",
  NEUTRAL = "NEUTRAL",
  NEUTRAL_ALT = "NEUTRAL_ALT",
}

export interface StatusTagProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  size: STATUS_TAG_SIZES;
  variant: STATUS_TAG_VARIANTS;
  spaceAfter?: spacingTokens;
}
