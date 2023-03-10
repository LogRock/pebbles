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
  disabled,
  rows,
  cols,
}) => {
  return (
    <BaseInputBox
      id={id}
      status={status}
      description={description}
      hint={hint}
      helper={helper}
      spaceAfter={spaceAfter}
      placeholder={placeholder}
    >
      <StyledTextArea
        id={id}
        value={value}
        onChange={onChange}
        status={status}
        placeholder={placeholder}
        disabled={disabled}
        rows={rows}
        cols={cols}
      />
    </BaseInputBox>
  );
};

export default TextArea;
