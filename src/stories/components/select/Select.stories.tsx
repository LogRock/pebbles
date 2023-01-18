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
  helper: "Some helper, Notice the dropdown now has some margin-top around me",
};

export const Clearable = Template.bind({});
Clearable.args = {
  isClearable: true,
  label: "Select something and you can then erase it",
};

export const Searchable = Template.bind({});
Searchable.args = {
  isSearchable: true,
  label: "Type something",
};

export const Multi = Template.bind({});
Multi.args = {
  isMulti: true,
  hideSelectedOptions: false,
  label: "Select many",
};

export const MultiWithValue = Template.bind({});
MultiWithValue.args = {
  isMulti: true,
  hideSelectedOptions: false,
  label: "Select many",
  defaultValue: [
    {
      value: "1",
      label: "First Item",
    },
    {
      value: "2",
      label: "Second Item",
    },
  ],
};

export const AllInOne = Template.bind({});
AllInOne.args = {
  isClearable: true,
  isMulti: true,
  isSearchable: true,
  label: "Turn everything ON at once!",
  helper: "For all available options, see the react-select docs",
};
