import { mdiAlert } from "@mdi/js";
import Icon from "@mdi/react";
import React, { FC, useState } from "react";
import {
  StyledDiv,
  Label,
  Helper,
  HelperDiv,
  Hint,
  HintDiv,
  InputDiv,
  StyledInput,
  HintIconWrapper,
  HelperIcon,
  ShowHidePasswordBtn,
} from "./BaseInputBox.styled";
import uniqueid from "lodash.uniqueid";
import { E164Number } from "libphonenumber-js";
import { ParagraphMedium } from "../Typography";

export interface BaseInputBoxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  description?: string;
  hint?: {
    content: string;
    icon: React.ReactNode;
  };
  status?: "info" | "error";
  helper?: React.ReactNode;
  spaced?: boolean;
  disableMinus?: boolean;
  disablePlus?: boolean;
  value?: string | ReadonlyArray<string> | number | E164Number | undefined;
}

const BaseInputBox: FC<BaseInputBoxProps> = ({
  spaced,
  description,
  status,
  hint,
  helper,
  ...inputProps
}) => {
  const [inputID] = useState(inputProps?.id || uniqueid("pebbles__input__"));
  const [showPassword, setShowPassword] = useState(false);

  const switchShowPassword = () => {
    if (!inputProps?.disabled) setShowPassword((prevState) => !prevState);
  };

  return (
    <StyledDiv spaced={spaced}>
      <Label htmlFor={inputID}>{description}</Label>
      <InputDiv>
        {!inputProps?.children && (
          <StyledInput
            status={status}
            {...inputProps}
            type={showPassword ? "text" : inputProps.type}
            id={inputID}
          />
        )}
        {inputProps?.children && inputProps?.children}

        {hint && (
          <HintDiv>
            {inputProps?.type === "password" && (
              <ShowHidePasswordBtn
                disabled={inputProps.disabled}
                onClick={() => switchShowPassword()}
              >
                <ParagraphMedium>
                  {showPassword ? "hide" : "show"}
                </ParagraphMedium>
              </ShowHidePasswordBtn>
            )}
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
            <Icon path={mdiAlert} size={0.7} />
          </HelperIcon>
        )}
        <Helper status={status}>{helper}</Helper>
      </HelperDiv>
    </StyledDiv>
  );
};

export default BaseInputBox;
