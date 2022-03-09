import React, { FC } from "react";
import BaseInputBox, { BaseInputBoxProps } from "./BaseInputBox";
import NumberInputBox from "./NumberInputBox";

const InputBox: FC<BaseInputBoxProps> = (props) => {
  if (props.type === "number") return <NumberInputBox {...props} />;
  else return <BaseInputBox {...props} />;
};

export default InputBox;
