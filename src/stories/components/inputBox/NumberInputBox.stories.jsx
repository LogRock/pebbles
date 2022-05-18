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
  min: 1,
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
  min: 1,
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
  min: 1,
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
  min: 1,
};

export const WithMin2AndMax10 = Template.bind({});
WithMin2AndMax10.args = {
  type: "number",
  description: "Min=2 and Max=10",
  min: 2,
  max: 10,
};
