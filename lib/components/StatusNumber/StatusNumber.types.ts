import React from "react";

export interface StatusNumberProps {
  currentValue?: string | number | null;
  totalValue?: string | number | null;
  variant: "destructive" | "warning" | "success" | "neutral";
  icon?: React.ReactNode;
}
