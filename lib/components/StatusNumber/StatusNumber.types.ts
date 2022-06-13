import React from "react";

export interface StatusNumberProps {
  currentValue?: string | number | null;
  totalValue?: string | number | null;
  variant: "error" | "warning" | "success" | "neutral";
  icon?: React.ReactNode;
}
