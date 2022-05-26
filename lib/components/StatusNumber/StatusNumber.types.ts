import React from "react";

export interface StatusNumberProps {
  currentValue?: number;
  totalValue?: number;
  variant: "error" | "warning" | "success" | "neutral";
  icon?: React.ReactNode;
}
