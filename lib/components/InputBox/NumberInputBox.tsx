import React, { FC, useEffect, useRef } from "react";
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
  disableMinus,
  disablePlus,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const updatedInputValue = (inputValue: number) => {
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
      window?.HTMLInputElement?.prototype,
      "value"
    )?.set;

    let updatedValue = inputRef?.current?.value
      ? +inputRef?.current?.value + inputValue
      : inputValue;

    if (props.min && updatedValue < props.min) {
      updatedValue = +props.min;
    }
    if (props.max && updatedValue > props.max) {
      updatedValue = +props.max;
    }

    nativeInputValueSetter?.call?.(inputRef.current, updatedValue);

    const ev2 = new Event("input", { bubbles: true });
    inputRef?.current?.dispatchEvent(ev2);
  };

  useEffect(() => {
    updatedInputValue(props.min ? +props.min : 0);
  }, []);

  return (
    <StyledDiv spaced={spaced}>
      <Label>{description}</Label>
      <NumberInputBoxWrapper>
        <StyledButton
          aria-label="decrease button"
          onClick={() => updatedInputValue(-1)}
          buttonSize="xSmall"
          disabled={disableMinus}
        >
          <Icon path={mdiMinus} size={1.35} />
        </StyledButton>
        <InputWrapper>
          <StyledStyledInput status={status} {...props} ref={inputRef} />
          {hint && (
            <HintDiv>
              <Hint disabled={props.disabled}>{hint.content}</Hint>
              {hint.icon && (
                <HintIconWrapper disabled={props.disabled}>
                  {hint.icon}
                </HintIconWrapper>
              )}
            </HintDiv>
          )}
        </InputWrapper>
        <StyledButton
          aria-label="increase button"
          onClick={() => updatedInputValue(1)}
          buttonSize="xSmall"
          disabled={disablePlus}
        >
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
