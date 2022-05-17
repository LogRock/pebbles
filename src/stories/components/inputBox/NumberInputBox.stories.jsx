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

export const WithAllInputProps = Template.bind({});
WithAllInputProps.args = {
  type: "number",
  description: "Description",
  hint: {
    content: "Some hint",
    icon: "I",
  },
  helper: "Some Helper",
};

export const DisabledMinus = Template.bind({});
DisabledMinus.args = {
  type: "number",
  description: "DisabledMinus",
  hint: {
    content: "Some hint",
    icon: "I",
  },
  helper: "Some Helper",
  disableMinus: true,
};

export const DisabledPlus = Template.bind({});
DisabledPlus.args = {
  type: "number",
  description: "DisabledPlus",
  hint: {
    content: "Some hint",
    icon: "I",
  },
  helper: "Some Helper",
  disablePlus: true,
};
