import React, { FC, useState } from "react";
import styled from "styled-components";
import { mdiMinus, mdiPlus } from "@mdi/js";
import InputBox, { BaseInputBoxProps } from "./BaseInputBox";
import Button from "../Button";
import { Icon } from "@mdi/react";

const NumberInputBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const StyledInputBox = styled(InputBox)`
  margin: 0px;

  text-align: center;
`;

const NumberInputBox: FC<BaseInputBoxProps> = (props) => {
  const [inputBoxValue, setinputBoxValue] = useState(0);

  const onAdd = () => {
    setinputBoxValue((oldValue) => oldValue + 1);
  };

  const onSubtract = () => {
    setinputBoxValue((oldValue) => (oldValue > 0 ? oldValue - 1 : oldValue));
  };

  return (
    <NumberInputBoxWrapper>
      <Button onClick={onSubtract} buttonSize="xSmall">
        <Icon path={mdiMinus} size={1.35} />
      </Button>
      <StyledInputBox readOnly value={inputBoxValue} {...props} />
      <Button onClick={onAdd} buttonSize="xSmall">
        <Icon path={mdiPlus} size={1.35} />
      </Button>
    </NumberInputBoxWrapper>
  );
};

export default NumberInputBox;
