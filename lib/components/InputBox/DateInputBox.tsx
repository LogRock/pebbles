/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from "react";

import { BsExclamationTriangleFill } from "react-icons/bs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import MaskedTextInput from "react-text-mask";

import {
  StyledDiv,
  Label,
  Helper,
  HelperDiv,
  Hint,
  HintDiv,
  InputDiv,
  HintIconWrapper,
  HelperIcon,
} from "./BaseInputBox.styled";
import {
  DatePickerWrapperStyles,
  StyledDatePicker,
} from "./DateInputBox.styled";

export interface DateInputBoxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  description?: string;
  hint?: {
    content: string;
    icon: React.ReactNode;
  };
  status?: "info" | "error";
  helper?: React.ReactNode;
  spaced?: boolean;
  onChange?: any;
  name?: string;
}

const DateInputBox: FC<DateInputBoxProps> = ({
  spaced,
  description,
  status,
  hint,
  helper,
  ...inputProps
}) => {
  return (
    <StyledDiv spaced={spaced}>
      <Label>{description}</Label>

      <InputDiv>
        <StyledDatePicker status={status}>
          {
            // @ts-ignore
            // typescript issue here, the date picker onChange event has a different type than the HTML input's event
            <DatePicker
              wrapperClassName="logrock-datepicker"
              showMonthDropdown
              showYearDropdown
              customInput={
                // @ts-ignore
                inputProps.selectsRange ? undefined : (
                  <MaskedTextInput
                    type="text"
                    mask={[
                      /\d/,
                      /\d/,
                      "/",
                      /\d/,
                      /\d/,
                      "/",
                      /\d/,
                      /\d/,
                      /\d/,
                      /\d/,
                    ]}
                  />
                )
              }
              {...inputProps}
            />
          }
          <DatePickerWrapperStyles />
        </StyledDatePicker>
        {hint && (
          <HintDiv>
            <Hint disabled={inputProps.disabled}>{hint.content}</Hint>
            {hint.icon && (
              <HintIconWrapper disabled={inputProps.disabled}>
                {hint.icon}
              </HintIconWrapper>
            )}
          </HintDiv>
        )}
      </InputDiv>
      <HelperDiv>
        {status === "error" && (
          <HelperIcon status={status}>
            <BsExclamationTriangleFill />
          </HelperIcon>
        )}
        <Helper status={status}>{helper}</Helper>
      </HelperDiv>
    </StyledDiv>
  );
};

export default DateInputBox;
