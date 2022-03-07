import React, { FC } from "react";
import Theme from "../../types/theme";
import {
  StyledDiv,
  Label,
  Helper,
  HelperDiv,
  HelperIcon,
  Hint,
  HintDiv,
  HintIcon,
  InputDiv,
  StyledInput,
} from "./InputBox.styled";
import { mdiAlert } from "@mdi/js";

export type InputBoxProps = {
  description?: string;
  hint?: {
    content: string;
    icon: string;
  };
  status?: "info" | "error";
  helper?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  theme?: Theme;
};

const InputBox: FC<InputBoxProps> = (props) => {
  return (
    <StyledDiv>
      <Label>{props.description}</Label>
      <InputDiv>
        <StyledInput
          status={props.status}
          placeholder={props.placeholder}
          disabled={props.disabled}
          onChange={props.onChange}
          type="text"
          {...props}
        />
        {props.hint && (
          <HintDiv>
            <Hint status={props.status}>{props.hint.content}</Hint>
            {props.hint.icon && (
              <HintIcon
                status={props.status}
                path={props.hint.icon}
                size={0.72}
              />
            )}
          </HintDiv>
        )}
      </InputDiv>
      <HelperDiv>
        {props.status === "error" && (
          <HelperIcon status={props.status} path={mdiAlert} size={0.72} />
        )}
        <Helper status={props.status}>{props.helper}</Helper>
      </HelperDiv>
    </StyledDiv>
  );
};

export default InputBox;
