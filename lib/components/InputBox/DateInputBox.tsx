import React, { FC, useState } from "react";

import { mdiAlert } from "@mdi/js";
import Icon from "@mdi/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
import { DatePickerWrapperStyles } from "./DateInputBox.styled";

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
}

const DateInputBox: FC<DateInputBoxProps> = ({
  spaced,
  description,
  status,
  hint,
  helper,
  ...inputProps
}) => {
  const [date, setDate] = useState<Date | null>(new Date(Date.now()));

  return (
    <StyledDiv spaced={spaced}>
      <Label>{description}</Label>
      <InputDiv>
        {/* <StyledInput status={status} {...inputProps} /> */}

        <>
          <DatePicker
            id="input-date"
            data-testid="input-date"
            wrapperClassName="logrock-datepicker"
            selected={date}
            onChange={(date: Date) => setDate(date)}
            showYearDropdown
            showMonthDropdown
          />
          <DatePickerWrapperStyles />
        </>
        {hint && (
          <HintDiv>
            <Hint status={status}>{hint.content}</Hint>
            {hint.icon && (
              <HintIconWrapper status={status}>{hint.icon}</HintIconWrapper>
            )}
          </HintDiv>
        )}
      </InputDiv>
      <HelperDiv>
        {status === "error" && (
          <HelperIcon status={status}>
            <Icon path={mdiAlert} size={0.7} />
          </HelperIcon>
        )}
        <Helper status={status}>{helper}</Helper>
      </HelperDiv>
    </StyledDiv>
  );
};

export default DateInputBox;
