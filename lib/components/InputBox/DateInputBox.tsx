/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, useRef } from "react";

import { BsExclamationTriangleFill } from "react-icons/bs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import InputMask from "react-input-mask";

import {
  StyledDiv,
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
    content: React.ReactNode;
    icon: React.ReactNode;
  };
  destructive?: boolean;
  helper?: React.ReactNode;
  helperIcon?: React.ReactNode;
  spaceAfter?: spacingTokens;
  spaced?: boolean;
  onChange?: any;
  name?: string;
}

const DateInputBox: FC<DateInputBoxProps> = ({
  spaced,
  description,
  destructive,
  hint,
  helper,
  helperIcon,
  spaceAfter,
  placeholder,
  ...inputProps
}) => {
  const datePickerContainerRef = useRef<HTMLDivElement>(null);

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
        <label htmlFor={inputProps.id}>
          <StyledDatePicker ref={datePickerContainerRef} status={status}>
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
        </label>
        {hint && (
          <HintDiv onClick={() => datePickerContainerRef?.current?.click()}>
            <Hint disabled={inputProps.disabled}>{hint.content}</Hint>
            {hint.icon && (
              <HintIconWrapper disabled={inputProps.disabled}>
                {hint.icon}
              </HintIconWrapper>
            )}
          </HintDiv>
        )}
      </InputDiv>
      {helper && (
        <HelperDiv>
          {destructive && !helperIcon && (
            <HelperIcon destructive={destructive}>
              <BsExclamationTriangleFill />
            </HelperIcon>
          )}
          {helperIcon && (
            <HelperIcon destructive={destructive}>{helperIcon}</HelperIcon>
          )}
          <Text
            type="paragraphSmall"
            color={destructive ? "destructive" : "neutral"}
            shade="400"
          >
            {helper}
          </Text>
        </HelperDiv>
      )}
    </StyledDiv>
  );
};

export default DateInputBox;
