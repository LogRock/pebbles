import React, { FC } from "react";
import styled from "styled-components";

import InputBox, { InputBoxProps } from "./InputBox";
import Button from "../Button";

const NumberInputBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 4px 4px;
`;

const StyledInputBox = styled(InputBox)`
  margin: 0px;

  text-align: center;
`;

const StyledButton = styled(Button)`
  font-size: 24px;
  font-weight: bold;
`;

const NumberInputBox: FC<InputBoxProps> = (props) => {
  return (
    <NumberInputBoxWrapper>
      <StyledButton>-</StyledButton>
      <StyledInputBox />
      <StyledButton>+</StyledButton>
    </NumberInputBoxWrapper>
  );
};

export default NumberInputBox;
