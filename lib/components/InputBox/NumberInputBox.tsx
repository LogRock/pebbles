import React, { FC, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { mdiAlert, mdiMinus, mdiPlus } from "@mdi/js";
import { BaseInputBoxProps } from "./BaseInputBox";
import Button from "../Button";
import { Icon } from "@mdi/react";
import {
  Helper,
  HelperDiv,
  HelperIcon,
  Hint,
  HintDiv,
  HintIconWrapper,
  Label,
  StyledDiv,
  StyledInput,
} from "./BaseInputBox.styled";

const NumberInputBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledStyledInput = styled(StyledInput)`
  text-align: center;
`;

const InputWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  flex-grow: 1;
  margin: 0 ${({ theme }) => theme.spacings.sm};
`;

const StyledButton = styled(Button)`
  flex-shrink: 0;
  margin: ${({ theme }) => theme.inputBox.margin};
`;

const NumberInputBox: FC<BaseInputBoxProps> = ({
  spaced,
  status,
  description,
  hint,
  helper,
  ...props
}) => {
  const [inputBoxValue, setinputBoxValue] = useState(Number(props.value) || 0);
  const inputRef = useRef<HTMLInputElement>(null);

  const onAdd = () => {
    setinputBoxValue((oldValue) => {
      return oldValue + 1;
    });
  };

  const onSubtract = () => {
    setinputBoxValue((oldValue) => {
      return oldValue > 0 ? oldValue - 1 : oldValue;
    });
  };

  useEffect(() => {
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
      window?.HTMLInputElement?.prototype,
      "value"
    )?.set;
    nativeInputValueSetter?.call?.(inputRef.current, `${inputBoxValue}`);

    const ev2 = new Event("input", { bubbles: true });
    inputRef?.current?.dispatchEvent(ev2);
  }, [inputBoxValue]);

  return (
    <StyledDiv spaced={spaced}>
      <Label>{description}</Label>
      <NumberInputBoxWrapper>
        <StyledButton onClick={onSubtract} buttonSize="xSmall">
          <Icon path={mdiMinus} size={1.35} />
        </StyledButton>
        <InputWrapper>
          <StyledStyledInput status={status} {...props} ref={inputRef} />
          {hint && (
            <HintDiv>
              <Hint status={status}>{hint.content}</Hint>
              {hint.icon && (
                <HintIconWrapper status={status}>{hint.icon}</HintIconWrapper>
              )}
            </HintDiv>
          )}
        </InputWrapper>
        <StyledButton onClick={onAdd} buttonSize="xSmall">
          <Icon path={mdiPlus} size={1.35} />
        </StyledButton>
      </NumberInputBoxWrapper>
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

export default NumberInputBox;
