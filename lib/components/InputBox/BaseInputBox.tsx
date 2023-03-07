import { BsExclamationTriangleFill } from "react-icons/bs";
import React, { FC, useState } from "react";
import {
  StyledDiv,
  Helper,
  HelperDiv,
  Hint,
  HintDiv,
  InputDiv,
  StyledInput,
  HintIconWrapper,
  HelperIcon,
  ShowHidePasswordBtn,
  StyledMaskInput,
} from "./BaseInputBox.styled";
import uniqueid from "lodash.uniqueid";
import { E164Number } from "libphonenumber-js";
import { Text } from "../Typography";
import { spacingTokens } from "../../types/tokens";

export interface BaseInputBoxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  description?: string;
  hint?: {
    content: string;
    icon: React.ReactNode;
  };
  status?: "info" | "destructive";
  maskStatus?: "info" | "destructive";
  helper?: React.ReactNode;
  spaceAfter?: spacingTokens;
  spaced?: boolean;
  disableMinus?: boolean;
  disablePlus?: boolean;
  value?: string | ReadonlyArray<string> | number | E164Number | undefined;
  mask?: string;
}

const BaseInputBox: FC<BaseInputBoxProps> = ({
  spaced,
  description,
  status,
  hint,
  helper,
  spaceAfter,
  ...inputProps
}) => {
  const [inputID] = useState(inputProps?.id || uniqueid("pebbles__input__"));
  const [showPassword, setShowPassword] = useState(false);

  const switchShowPassword = () => {
    if (!inputProps?.disabled) setShowPassword((prevState) => !prevState);
  };

  return (
    <StyledDiv spaced={spaced} spaceAfter={spaceAfter}>
      <Text as="label" htmlFor={inputID} spaceAfter="xsm" type="overlineXSmall">
        {description}
      </Text>
      <InputDiv>
        {!inputProps?.children && !inputProps?.mask && (
          <StyledInput
            status={status}
            {...inputProps}
            type={showPassword ? "text" : inputProps.type}
            id={inputID}
          />
        )}
        {!inputProps?.children && inputProps?.mask && (
          <StyledMaskInput
            {...inputProps}
            maskStatus={status}
            mask={inputProps.mask}
            id={inputID}
          />
        )}
        {inputProps?.children && inputProps?.children}

        {hint && (
          <HintDiv>
            {inputProps?.type === "password" && !inputProps.disabled && (
              <ShowHidePasswordBtn
                disabled={inputProps.disabled}
                onClick={() => switchShowPassword()}
              >
                <Text type="paragraphMedium">
                  {showPassword ? "hide" : "show"}
                </Text>
              </ShowHidePasswordBtn>
            )}
            <Hint disabled={inputProps.disabled} type="overlineXSmall">
              {hint.content}
            </Hint>
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
          {status === "destructive" && (
            <HelperIcon status={status}>
              <BsExclamationTriangleFill />
            </HelperIcon>
          )}
          <Helper status={status} type="overlineXSmall">
            {helper}
          </Helper>
        </HelperDiv>
      )}
    </StyledDiv>
  );
};

export default BaseInputBox;
