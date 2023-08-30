import React from "react";
import {
  BaseSingleInputFieldProps,
  DateValidationError,
  FieldSection,
  UseDateFieldProps,
} from "@mui/x-date-pickers";
import { useDateField } from "@mui/x-date-pickers/DateField/useDateField";
import BaseInputBox from "../InputBox/BaseInputBox";

// Don't @ me. I copied this from the MUI source.
interface CustomFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: React.ReactNode;
  InputProps?: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref?: React.Ref<any>;
    endAdornment?: React.ReactNode;
    startAdornment?: React.ReactNode;
  };
  error?: boolean;
  focused?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ownerState?: any;
  helperText?: React.ReactNode;
  helperIcon?: React.ReactNode;
}

type CustomFieldComponent = ((
  props: CustomFieldProps & React.RefAttributes<HTMLDivElement>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
) => JSX.Element) & { propTypes?: any };

const CustomField = React.forwardRef(function CustomFieldComponent(
  props: CustomFieldProps,
  inputRef: React.Ref<HTMLInputElement>
) {
  const {
    id,
    InputProps: { ref: containerRef, startAdornment, endAdornment } = {},
    ...other
  } = props;

  return (
    <div id={id} ref={containerRef}>
      {startAdornment}

      <BaseInputBox
        {...other}
        destructive={other.error}
        inputRef={inputRef}
        type="text"
        hint={{
          icon: endAdornment,
          content: "",
        }}
        helper={other.helperText}
        helperIcon={other.helperIcon}
      />
    </div>
  );
}) as CustomFieldComponent;

interface CustomDateFieldProps
  extends UseDateFieldProps<dateFns>,
    BaseSingleInputFieldProps<
      dateFns | null,
      dateFns,
      FieldSection,
      DateValidationError
    > {
  helperText?: React.ReactNode;
}

export function CustomDateField(props: CustomDateFieldProps) {
  const { inputRef: externalInputRef, ...textFieldProps } = props;

  const response = useDateField<dateFns, typeof textFieldProps>({
    props: textFieldProps,
    inputRef: externalInputRef,
  });

  return <CustomField {...response} />;
}
