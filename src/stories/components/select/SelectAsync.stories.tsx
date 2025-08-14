import React from "react";
import SelectAsync from "../../../../lib/components/SelectAsync";
import { Meta, StoryObj } from "@storybook/react";

const loadOptionsAsync = (inputValue: string) =>
  new Promise<{ value: string; label: string }[]>((resolve) => {
    setTimeout(() => {
      resolve(
        [
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
        ].filter((item) => item.label.includes(inputValue))
      );
    }, 2000);
  });

const meta = {
  title: "Components/Select/Async",
  component: SelectAsync,
  parameters: {
    layout: "centered",
  },
  argTypes: { onChange: { action: "changed" } },
} as Meta<typeof SelectAsync>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <SelectAsync {...args} loadOptions={loadOptionsAsync} />
  ),
};

export const Destructive: Story = {
  args: {
    destructive: true,
    helper: "I am a destructive select",
    label: "Destructive select",
  },
  render: (args) => (
    <SelectAsync {...args} loadOptions={loadOptionsAsync} />
  ),
};

export const Required: Story = {
  args: {
    required: true,
    label: "Required select",
  },
  render: (args) => (
    <SelectAsync {...args} loadOptions={loadOptionsAsync} />
  ),
};

export const WithLabel: Story = {
  args: {
    label: "Some label",
  },
  render: (args) => (
    <SelectAsync {...args} loadOptions={loadOptionsAsync} />
  ),
};

export const WithHelper: Story = {
  args: {
    helper: "Some helper, Notice the dropdown now has some margin-top around me",
  },
  render: (args) => (
    <SelectAsync {...args} loadOptions={loadOptionsAsync} />
  ),
};

export const Clearable: Story = {
  args: {
    isClearable: true,
    label: "Select something and you can then erase it",
  },
  render: (args) => (
    <SelectAsync {...args} loadOptions={loadOptionsAsync} />
  ),
};

export const Searchable: Story = {
  args: {
    isSearchable: true,
    label: "Type something",
  },
  render: (args) => (
    <SelectAsync {...args} loadOptions={loadOptionsAsync} />
  ),
};

export const Multi: Story = {
  args: {
    isMulti: true,
    label: "Select many",
  },
  render: (args) => (
    <SelectAsync {...args} loadOptions={loadOptionsAsync} />
  ),
};

export const AllInOne: Story = {
  args: {
    isClearable: true,
    isMulti: true,
    isSearchable: true,
    label: "Turn everything ON at once!",
    helper: "For all available options, see the react-select docs",
  },
  render: (args) => (
    <SelectAsync {...args} loadOptions={loadOptionsAsync} />
  ),
};
