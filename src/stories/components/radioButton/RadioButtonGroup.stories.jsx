import React from "react";
import RadioButton, {
  RadioButtonGroup,
} from "../../../../lib/components/RadioButton";

export default {
  title: "Components/RadioButton/RadioButtonGroup",
  component: RadioButtonGroup,
};

const Template = (args) => (
  <RadioButtonGroup {...args}>
    <RadioButton>First option</RadioButton>
    <RadioButton>Option B</RadioButton>
    <RadioButton>#3</RadioButton>
    <RadioButton>Last one</RadioButton>
    <RadioButton>Option the V</RadioButton>
  </RadioButtonGroup>
);

export const Default = Template.bind();
Default.args = {};

export const WithTitle = Template.bind();
WithTitle.args = {
  groupTitle: "Pick at least 3 options",
};
