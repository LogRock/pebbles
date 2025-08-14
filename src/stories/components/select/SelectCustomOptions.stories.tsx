import React from "react";
import Select from "../../../../lib/components/Select2";
import { Meta, StoryObj } from "@storybook/react-vite";
import CheckBoxOption from "../../../../lib/components/Select2/options/CheckBoxOption";
import RadioButtonOption from "../../../../lib/components/Select2/options/RadioButtonOption";

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

const meta = {
  title: "Components/Select/CustomOptions",
  component: Select,
  parameters: {
    layout: "centered",
  },
  argTypes: { onChange: { action: "changed" } },
} as Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithCheckBoxes: Story = {
  args: {
    isClearable: true,
    isMulti: true,
    isSearchable: true,
    hideSelectedOptions: false,
    label: "This shows checkboxes instead of plain text",
    helper: "Using the isMulti prop is probably a good idea in this case",
    components: {
      Option: CheckBoxOption,
    },
  },
  render: (args) => <Select {...args} options={autoCompleteItems} />,
};

export const WithRadioButtons: Story = {
  args: {
    isClearable: true,
    isMulti: false,
    isSearchable: true,
    hideSelectedOptions: false,
    label: "This shows radio buttons instead of plain text",
    helper: "Using the isMulti prop is probably a bad idea in this case",
    components: {
      Option: RadioButtonOption,
    },
  },
  render: (args) => <Select {...args} options={autoCompleteItems} />,
};
