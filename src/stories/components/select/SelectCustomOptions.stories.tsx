import React from "react";
import Select from "../../../../lib/components/Select2";
import { ComponentStory, ComponentMeta } from "@storybook/react";
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

export default {
  title: "Components/Select/CustomOptions",
  component: Select,
  argTypes: { onChange: { action: "changed" } },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => (
  <Select {...args} options={autoCompleteItems} />
);

export const WithCheckBoxes = Template.bind({});
WithCheckBoxes.args = {
  isClearable: true,
  isMulti: true,
  isSearchable: true,
  hideSelectedOptions: false,
  label: "This shows checkboxes instead of plain text",
  helper: "Using the isMulti prop is probably a good idea in this case",
  components: {
    Option: CheckBoxOption,
  },
};

export const WithRadioButtons = Template.bind({});
WithRadioButtons.args = {
  isClearable: true,
  isMulti: false,
  isSearchable: true,
  hideSelectedOptions: false,
  label: "This shows radio buttons instead of plain text",
  helper: "Using the isMulti prop is probably a bad idea in this case",
  components: {
    Option: RadioButtonOption,
  },
};
