import React from "react";
import { InputBox } from "../../../../lib/components/InputBox";

export default {
  title: "Components/NumberInputBox",
  component: InputBox,
  argTypes: {
    disabled: {
      defautValue: false,
      control: { type: "boolean" },
    },
  },
};
const Template = (args) => <InputBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "number",
};
