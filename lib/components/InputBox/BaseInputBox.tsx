import { BsExclamationTriangleFill } from "react-icons/bs";
import React, { FC, useState } from "react";
import {
  StyledDiv,
  HelperDiv,
  Hint,
  HintDiv,
  InputDiv,
  StyledInput,
  HintIconWrapper,
  HelperIcon,
  ShowHidePasswordBtn,
  StyledMaskInput,
  StartIconDiv,
} from "./BaseInputBox.styled";
import uniqueid from "lodash.uniqueid";
import { E164Number } from "libphonenumber-js";
import { Text } from "../Typography";
import { spacingTokens } from "../../types/tokens";

export interface BaseInputBoxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  // @ deprecated
  description?: string;
  label?: React.ReactNode;
  startIcon?: React.ReactNode;
  hint?: {
    content: React.ReactNode;
    icon: React.ReactNode;
  };
  destructive?: boolean;
  helper?: React.ReactNode;
  helperIcon?: React.ReactNode;
  spaceAfter?: spacingTokens;
  spaced?: boolean;
  disableMinus?: boolean;
  disablePlus?: boolean;
  value?: string | ReadonlyArray<string> | number | E164Number | undefined;
  mask?: string;
  inputRef?: React.Ref<HTMLInputElement>;
}

export const RequiredAsterisk = () => (
  <Text as="span" type="overlineLarge" color="destructive" shade="600">
    *
  </Text>
);

const BaseInputBox: FC<BaseInputBoxProps> = ({
  spaced,
  description,
  destructive,
  hint,
  helper,
  helperIcon,
  spaceAfter,
  startIcon,
  label,
  ...inputProps
}) => {
  const [inputID] = useState(inputProps?.id || uniqueid("pebbles__input__"));
  const [showPassword, setShowPassword] = useState(false);

  const switchShowPassword = () => {
    if (!inputProps?.disabled) setShowPassword((prevState) => !prevState);
  };

  const hintRef = React.useRef<HTMLDivElement>(null);

  return (
    <StyledDiv spaced={spaced} spaceAfter={spaceAfter}>
      <Text as="label" htmlFor={inputID} spaceAfter="xsm" type="overlineXSmall">
        {label || description} {inputProps.required && <RequiredAsterisk />}
      </Text>
      <InputDiv>
        {startIcon && (
          <StartIconDiv>
            <HintIconWrapper>{startIcon}</HintIconWrapper>
          </StartIconDiv>
        )}
        {!inputProps?.children && !inputProps?.mask && (
          <StyledInput
            destructive={destructive}
            {...inputProps}
            startIconSize={startIcon ? 32 : 0}
            hintSize={hintRef?.current?.clientWidth}
            type={showPassword ? "text" : inputProps.type}
            id={inputID}
            ref={inputProps?.inputRef}
          />
        )}
        {!inputProps?.children && inputProps?.mask && (
          <StyledMaskInput
            {...inputProps}
            hintSize={hintRef?.current?.clientWidth}
            destructive={destructive}
            mask={inputProps.mask}
            id={inputID}
          />
        )}
        {inputProps?.children && inputProps?.children}

        {hint && (
          <HintDiv ref={hintRef}>
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
          {destructive && !helperIcon && (
            <HelperIcon destructive={destructive}>
              <BsExclamationTriangleFill aria-label="error icon" />
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

export default BaseInputBox;
