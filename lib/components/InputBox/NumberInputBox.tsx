import React, { FC, useState } from "react";
import styled from "styled-components";

import InputBox, { BaseInputBoxProps } from "./BaseInputBox";
import Button from "../Button";

const NumberInputBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const StyledInputBox = styled(InputBox)`
  margin: 0px;

  text-align: center;
`;

const StyledButton = styled(Button)`
  font-size: 24px;
  font-weight: bold;
`;

const NumberInputBox: FC<BaseInputBoxProps> = (props) => {
  let [inputBoxValue, setinputBoxValue] = useState(0);

  const onAdd = () => {
    inputBoxValue++;
    setinputBoxValue(inputBoxValue);
  };

  const onSubtract = () => {
    if (inputBoxValue > 0) inputBoxValue--;
    setinputBoxValue(inputBoxValue);
  };

  return (
    <NumberInputBoxWrapper>
      <StyledButton onClick={onSubtract}>-</StyledButton>
      <StyledInputBox value={inputBoxValue} {...props} />
      <StyledButton onClick={onAdd}>+</StyledButton>
    </NumberInputBoxWrapper>
  );
};

export default NumberInputBox;
