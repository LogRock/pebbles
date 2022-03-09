import React from "react";
import { NumberInputBox } from "../../../../lib/components/InputBox";

export default {
  title: "Components/NumberInputBox",
  component: NumberInputBox,
  argTypes: {
    disabled: {
      defautValue: false,
      control: { type: "boolean" },
    },
  },
};

export const Default = <NumberInputBox />;
