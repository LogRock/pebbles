import React from "react";
import { DateInputProps } from "./DateInput.types";
import uniqueId from "lodash.uniqueid";
import { CustomDateField } from "./CustomField";
import { createGlobalStyle } from "styled-components";
import { DatePicker } from "@mui/x-date-pickers";

const GlobalStyle = createGlobalStyle`
  .MuiPickersDay-root:hover:not(.Mui-disabled), .MuiPickersDay-today {
    background-color: ${({ theme }) => theme.colors.primary[50]} !important;

    color: ${({ theme }) => theme.colors.neutral[900]} !important;
  }
  .Mui-selected {
    background-color: ${({ theme }) => theme.colors.primary[200]} !important;

    color: ${({ theme }) => theme.colors.neutral[900]} !important;
  }
  .MuiPaper-elevation {
    box-shadow: ${({ theme }) => theme.shadows.medium} !important;
  }
  .MuiPaper-rounded {
    border-radius: ${({ theme }) => theme.spacings.md} !important;
  }
  .MuiButton-textPrimary {
    color: ${({ theme }) => theme.colors.neutral[900]} !important;
  }

  .MuiDialog-root * {
    font-family: ${({ theme }) =>
      theme.typography.paragraphMedium.fontFamily} !important;
  }
`;

export default function DateInput({
  helper,
  helperIcon,
  destructive,
  id,
  ...props
}: DateInputProps<dateFns>) {
  const inputID = id || uniqueId("pebbles__input__");

  return (
    <>
      <GlobalStyle />
      <DatePicker
        {...props}
        sx={{
          ".MuiPickersDay-root.Mui-selected": {
            backgroundColor: "red",
          },
        }}
        slotProps={{
          field: {
            id: inputID,
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            helperText: helper,
            helperIcon: helperIcon,
            error: destructive,
          },
        }}
        slots={{
          field: CustomDateField,
        }}
      />
    </>
  );
}
