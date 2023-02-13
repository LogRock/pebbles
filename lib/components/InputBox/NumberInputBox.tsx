import React, { FC, useEffect, useRef } from "react";
import styled from "styled-components";
import { BsExclamationTriangleFill, BsPlusLg, BsDashLg } from "react-icons/bs";
import { BaseInputBoxProps } from "./BaseInputBox";
import Button from "../Button";
import {
  Helper,
  HelperDiv,
  HelperIcon,
  Hint,
  HintDiv,
  HintIconWrapper,
  StyledDiv,
  StyledInput,
} from "./BaseInputBox.styled";
import { Text } from "../Typography";

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
`;

const NumberInputBox: FC<BaseInputBoxProps> = ({
  spaced,
  status,
  description,
  hint,
  helper,
  disableMinus,
  disablePlus,
  spaceAfter,
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
    <StyledDiv spaced={spaced} spaceAfter={spaceAfter}>
      <Text
        as="label"
        htmlFor={props.id}
        spaceAfter="xsm"
        type="overlineXSmall"
      >
        {description}
      </Text>
      <NumberInputBoxWrapper>
        <StyledButton
          aria-label="decrease button"
          onClick={() => updatedInputValue(-1)}
          buttonSize="xSmall"
          disabled={disableMinus}
        >
          <BsDashLg />
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
          <BsPlusLg />
        </StyledButton>
      </NumberInputBoxWrapper>
      <HelperDiv>
        {status === "destructive" && (
          <HelperIcon status={status}>
            <BsExclamationTriangleFill />
          </HelperIcon>
        )}
        <Helper status={status}>{helper}</Helper>
      </HelperDiv>
    </StyledDiv>
  );
};

export default NumberInputBox;
