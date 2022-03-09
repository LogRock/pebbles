import React, { FC } from "react";
import styled from "styled-components";

import InputBox, { InputBoxProps } from "./InputBox";
import Button from "../Button";

const NumberInputBox: FC<InputBoxProps> = (props) => {
  const NumberInputBoxWrapper = styled.div`
    display: flex;
  `;

  return (
    <NumberInputBoxWrapper>
      <Button>-</Button>
      <InputBox />
      <Button>+</Button>
    </NumberInputBoxWrapper>
  );
};

export default NumberInputBox;
