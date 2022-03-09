import { mdiAlert } from "@mdi/js";
import Icon from "@mdi/react";
import React, { FC } from "react";
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
} from "./InputBox.styled";

export interface InputBoxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  description?: string;
  hint?: {
    content: string;
    icon: React.ReactNode;
  };
  status?: "info" | "error";
  helper?: string;
  spaced?: boolean;
}

const InputBox: FC<InputBoxProps> = ({
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
        <StyledInput status={status} {...inputProps} />
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

export default InputBox;
