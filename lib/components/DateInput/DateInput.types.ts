import { DatePickerProps } from "@mui/x-date-pickers";
import React from "react";

export interface DateInputProps<TValue> extends DatePickerProps<TValue> {
  required?: boolean;
  label?: string;
  helper?: React.ReactNode;
  helperIcon?: React.ReactNode;
  destructive?: boolean;
  id?: string;
}
