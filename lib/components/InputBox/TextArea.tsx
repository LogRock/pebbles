import React, { FC } from "react";

import styled from "styled-components";

import BaseInputBox, { BaseInputBoxProps } from "./BaseInputBox";
import { BaseStyleInput } from "./BaseInputBox.styled";
import { spacingTokens } from "../../types/tokens";

const StyledTextArea = styled.textarea<Pick<BaseInputBoxProps, "status">>`
  ${BaseStyleInput}
  height: unset;
`;

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  description?: string;
  hint?: {
    content: string;
    icon: React.ReactNode;
  };
  helper?: React.ReactNode;
  spaceAfter?: spacingTokens;
  status?: "info" | "destructive";
  value?: string | ReadonlyArray<string> | undefined;
  rows?: number;
  cols?: number;
}

const TextArea: FC<TextAreaProps> = ({
  id,
  value,
  onChange,
  status,
  description,
  hint,
  helper,
  spaceAfter,
  placeholder,
  ...props
}) => {
  return (
    <BaseInputBox
      id={id}
      status={status}
      description={description}
      hint={hint}
      helper={helper}
      spaceAfter={spaceAfter}
    >
      <StyledTextArea
        id={id}
        value={value}
        onChange={onChange}
        status={status}
        placeholder={placeholder}
        {...props}
      />
    </BaseInputBox>
  );
};

export default TextArea;
