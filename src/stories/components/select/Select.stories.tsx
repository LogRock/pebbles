import React from "react";
import Select from "../../../../lib/components/Select2";
import { ComponentStory, ComponentMeta } from "@storybook/react";

const autoCompleteItems = [
  {
    value: "1",
    label: "First Item",
  },
  {
    value: "2",
    label: "Second Item",
  },
  {
    value: "3",
    label: "Third Item",
  },
  {
    value: "4",
    label: "You guessed it",
  },
];

export default {
  title: "Components/Select",
  component: Select,
  argTypes: { onChange: { action: "changed" } },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => (
  <Select {...args} options={autoCompleteItems} />
);

export const Default = Template.bind({});
Default.args = {};

export const Error = Template.bind({});
Error.args = {
  status: "error",
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: "Some label",
};

export const WithHelper = Template.bind({});
WithHelper.args = {
  helper: "Some helper",
};
