import { mdiAlert } from "@mdi/js";
import Icon from "@mdi/react";
import React, { FC, HTMLInputTypeAttribute, useEffect, useState } from "react";
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
  ShowHidePwdBtn,
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
  const [isPassword, setIsPassword] = useState(false);
  const [showPwd, setShowPwd] = useState(false);
  const [inputType, setInputType] = useState<HTMLInputTypeAttribute>();

  useEffect(() => {
    inputProps?.type === "password" && setIsPassword(true);
    inputProps.type && setInputType(inputProps.type);
  }, []);

  useEffect(() => {
    if (isPassword) {
      showPwd ? setInputType("text") : setInputType("password");
    }
  }, [showPwd, isPassword]);

  const switchShowPwd = () => {
    setShowPwd((prevState) => !prevState);
  };

  return (
    <StyledDiv spaced={spaced}>
      <Label htmlFor={inputID}>{description}</Label>
      <InputDiv>
        {!inputProps?.children && (
          <StyledInput
            status={status}
            {...inputProps}
            type={inputType}
            id={inputID}
          />
        )}
        {inputProps?.children && inputProps?.children}

        {hint && (
          <HintDiv>
            {isPassword && (
              <ShowHidePwdBtn
                disabled={inputProps.disabled}
                onClick={() => switchShowPwd()}
              >
                <ParagraphMedium>{showPwd ? "hide" : "show"}</ParagraphMedium>
              </ShowHidePwdBtn>
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
