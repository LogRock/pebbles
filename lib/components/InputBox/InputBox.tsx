import React, { FC } from "react";
import BaseInputBox, { BaseInputBoxProps } from "./BaseInputBox";
import DateInputBox from "./DateInputBox";
import NumberInputBox from "./NumberInputBox";
import PhoneInputBox from "./PhoneInputBox";

const InputBox: FC<BaseInputBoxProps> = (props) => {
  if (props.type === "number") return <NumberInputBox {...props} />;
  if (props.type === "date") return <DateInputBox {...props} />;
  if (props.type === "tel") return <PhoneInputBox {...props} />;
  else return <BaseInputBox {...props} />;
};

export default InputBox;
