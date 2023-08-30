import React from "react";
import { DateInputProps } from "./DateInput.types";
import { DatePicker } from "@mui/x-date-pickers";
import uniqueId from "lodash.uniqueid";
import { CustomDateField } from "./CustomField";

export default function DateInput({
  helper,
  helperIcon,
  destructive,
  id,
  ...props
}: DateInputProps<dateFns>) {
  const inputID = id || uniqueId("pebbles__input__");

  return (
    <DatePicker
      {...props}
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
  );
}
