import React from "react";
import Select from "../../../../lib/components/Select2";
import { ComponentStory, ComponentMeta } from "@storybook/react";
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

export default {
  title: "Components/Select",
  component: Select,
  argTypes: { onChange: { action: "changed" } },
} as ComponentMeta<typeof Select>;

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
    background-clip: content-box;
    border-radius: 100px;
    background-color: transparent;
  }

  & div:hover::-webkit-scrollbar-thumb {
    background-color: #9ca3af;
  }
`;

const Template: ComponentStory<typeof Select> = (args) => (
  <DivStyled>
    <Select {...args} maxMenuHeight={120} options={autoCompleteItems} />
  </DivStyled>
);

export const Default = Template.bind({});
Default.args = {};

export const Destructive = Template.bind({});
Destructive.args = {
  destructive: true,
  helper: "I am a destructive select",
  label: "Destructive select",
};

export const Required = Template.bind({});
Required.args = {
  required: true,
  label: "Required select",
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

export const BottomSheetWithHeaderAndFooter = Template.bind({});
BottomSheetWithHeaderAndFooter.args = {
  useBottomSheet: true,
  bottomSheetHeader: <p>Header</p>,
  bottomSheetFooter: <p>Footer</p>,
  bottomSheetPlaceholder: "bottomSheetPlaceholder",
};
