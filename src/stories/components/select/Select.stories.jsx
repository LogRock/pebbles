import React from "react";
import Select from "../../../../lib/components/Select";
import TableItem from "../../../../lib/components/Select/items/TableItem";
import TableHeader from "../../../../lib/components/Select/headers/TableHeader";

const autoCompleteItems = [
  {
    id: 1,
    name: "First Item",
  },
  {
    id: 2,
    name: "Second Item",
  },
  {
    id: 3,
    name: "Third Item",
  },
  {
    id: 4,
    name: "You guessed it",
  },
  {
    id: 5,
    name: "First Item",
  },
  {
    id: 6,
    name: "Second Item",
  },
  {
    id: 7,
    name: "Third Item",
  },
  {
    id: 8,
    name: "You guessed it",
  },
];

export default {
  title: "Components/Select",
  component: Select,
};

const Template = (args) => (
  <>
    <Select
      autoCompleteItems={autoCompleteItems}
      {...args}
      inputProps={{ description: "Select your stuff" }}
    />
    <Select
      autoCompleteItems={autoCompleteItems}
      {...args}
      inputProps={{ helper: "Foo" }}
    />
    <Select
      autoCompleteItems={autoCompleteItems}
      {...args}
      inputProps={{ description: "Select your stuff", helper: "Foo" }}
    />
  </>
);

export const Default = Template.bind({});
Default.args = {};

export const CustomItemRendering = Template.bind({});
CustomItemRendering.args = {
  renderItem: (item) => <li>{item.name} all rendered as li</li>,
};

export const CustomHeader = Template.bind({});
CustomHeader.args = {
  renderHeader: () => (
    <h3>This is a custom header, great for table-like lists</h3>
  ),
};

export const Spaced = Template.bind({});
Spaced.args = {
  spaced: true,
};

export const WithMaxHeight = Template.bind({});
WithMaxHeight.args = {
  maxHeight: 170,
};

export const WithCallback = Template.bind({});
WithCallback.args = {};

export const WithTableItemRendering = Template.bind({});
WithTableItemRendering.args = {
  renderItem: TableItem,
  renderHeader: <TableHeader id="ID" name="NAME" />,
};
