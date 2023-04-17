/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from "react";

import { BsExclamationTriangleFill } from "react-icons/bs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import InputMask from "react-input-mask";

import {
  StyledDiv,
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
import { spacingTokens } from "../../types/tokens";
import { Text } from "../Typography";

export interface DateInputBoxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  description?: string;
  hint?: {
    content: string;
    icon: React.ReactNode;
  };
  status?: "info" | "destructive";
  helper?: React.ReactNode;
  spaceAfter?: spacingTokens;
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
  spaceAfter,
  placeholder,
  ...inputProps
}) => {
  return (
    <StyledDiv spaced={spaced} spaceAfter={spaceAfter}>
      <Text
        as="label"
        htmlFor={inputProps.id}
        spaceAfter="xsm"
        type="overlineXSmall"
      >
        {description}
      </Text>

      <InputDiv>
        <StyledDatePicker status={status}>
          {
            // @ts-ignore
            // typescript issue here, the date picker onChange event has a different type than the HTML input's event
            <DatePicker
              wrapperClassName="logrock-datepicker"
              showMonthDropdown
              showYearDropdown
              placeholderText={placeholder}
              customInput={
                // @ts-ignore
                inputProps.selectsRange ? undefined : (
                  <InputMask type="text" mask="99/99/9999" />
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
        {status === "destructive" && (
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
