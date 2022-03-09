import { mdiAlert } from "@mdi/js";
import Icon from "@mdi/react";
import React, { FC } from "react";
import Theme from "../../types/theme";
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

export type InputBoxProps = {
  description?: string;
  hint?: {
    content: string;
    icon: React.ReactNode;
  };
  status?: "info" | "error";
  helper?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  theme?: Theme;
  type?: string;
  spaced?: boolean;
};

const InputBox: FC<InputBoxProps> = (props) => {
  return (
    <StyledDiv spaced={props.spaced}>
      <Label>{props.description}</Label>
      <InputDiv>
        <StyledInput
          status={props.status}
          placeholder={props.placeholder}
          disabled={props.disabled}
          onChange={props.onChange}
          type={props.type || "text"}
          {...props}
        />
        {props.hint && (
          <HintDiv>
            <Hint status={props.status}>{props.hint.content}</Hint>
            {props.hint.icon && (
              <HintIconWrapper status={props.status}>
                {props.hint.icon}
              </HintIconWrapper>
            )}
          </HintDiv>
        )}
      </InputDiv>
      <HelperDiv>
        {props.status === "error" && (
          <HelperIcon status={props.status}>
            <Icon path={mdiAlert} size={0.7} />
          </HelperIcon>
        )}
        <Helper status={props.status}>{props.helper}</Helper>
      </HelperDiv>
    </StyledDiv>
  );
};

export default InputBox;
