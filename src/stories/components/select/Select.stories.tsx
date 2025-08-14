import React from "react";
import Select from "../../../../lib/components/Select2";
import { Meta, StoryObj } from "@storybook/react-vite";
import styled from "styled-components";

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
  {
    value: "5",
    label: "Fifth Item",
  },
  {
    value: "6",
    label: "Sixth Item",
  },
  {
    value: "7",
    label: "Seventh Item",
  },
  {
    value: "8",
    label: "Eighth it",
  },
];

const meta = {
  title: "Components/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  argTypes: { onChange: { action: "changed" } },
} as Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const DivStyled = styled.div`
  /* CUSTOM SCROLL BAR */
  & ::-webkit-scrollbar {
    width: 18px;

    background-color: transparent;
  }

  & ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  & ::-webkit-scrollbar-thumb {
    border: 4px solid transparent;
    border-radius: 100px;

    background-clip: content-box;
    background-color: transparent;
  }

  & div:hover::-webkit-scrollbar-thumb {
    background-color: #9ca3af;
  }
`;

export const Default: Story = {
  args: {},
  render: (args) => (
    <DivStyled>
      <Select {...args} maxMenuHeight={120} options={autoCompleteItems} />
    </DivStyled>
  ),
};

export const Destructive: Story = {
  args: {
    destructive: true,
    helper: "I am a destructive select",
    label: "Destructive select",
  },
  render: (args) => (
    <DivStyled>
      <Select {...args} maxMenuHeight={120} options={autoCompleteItems} />
    </DivStyled>
  ),
};

export const Required: Story = {
  args: {
    required: true,
    label: "Required select",
  },
  render: (args) => (
    <DivStyled>
      <Select {...args} maxMenuHeight={120} options={autoCompleteItems} />
    </DivStyled>
  ),
};

export const WithLabel: Story = {
  args: {
    label: "Some label",
  },
  render: (args) => (
    <DivStyled>
      <Select {...args} maxMenuHeight={120} options={autoCompleteItems} />
    </DivStyled>
  ),
};

export const WithHelper: Story = {
  args: {
    helper:
      "Some helper, Notice the dropdown now has some margin-top around me",
  },
  render: (args) => (
    <DivStyled>
      <Select {...args} maxMenuHeight={120} options={autoCompleteItems} />
    </DivStyled>
  ),
};

export const Clearable: Story = {
  args: {
    isClearable: true,
    label: "Select something and you can then erase it",
  },
  render: (args) => (
    <DivStyled>
      <Select {...args} maxMenuHeight={120} options={autoCompleteItems} />
    </DivStyled>
  ),
};

export const Searchable: Story = {
  args: {
    isSearchable: true,
    label: "Type something",
  },
  render: (args) => (
    <DivStyled>
      <Select {...args} maxMenuHeight={120} options={autoCompleteItems} />
    </DivStyled>
  ),
};

export const Multi: Story = {
  args: {
    isMulti: true,
    hideSelectedOptions: false,
    label: "Select many",
  },
  render: (args) => (
    <DivStyled>
      <Select {...args} maxMenuHeight={120} options={autoCompleteItems} />
    </DivStyled>
  ),
};

export const MultiWithValue: Story = {
  args: {
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
  },
  render: (args) => (
    <DivStyled>
      <Select {...args} maxMenuHeight={120} options={autoCompleteItems} />
    </DivStyled>
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
    <DivStyled>
      <Select {...args} maxMenuHeight={120} options={autoCompleteItems} />
    </DivStyled>
  ),
};

export const BottomSheetWithHeaderAndFooter: Story = {
  args: {
    useBottomSheet: true,
    bottomSheetHeader: <p>Header</p>,
    bottomSheetFooter: <p>Footer</p>,
    bottomSheetPlaceholder: "bottomSheetPlaceholder",
  },
  render: (args) => (
    <DivStyled>
      <Select {...args} maxMenuHeight={120} options={autoCompleteItems} />
    </DivStyled>
  ),
};
