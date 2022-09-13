import React from "react";

export interface CustomSelectProps {
  status?: "info" | "error";
  label?: React.ReactNode;
  helper?: React.ReactNode;
}
