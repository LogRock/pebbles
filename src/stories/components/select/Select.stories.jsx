import React from "react";
import Select from "../../../../lib/components/Select";

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
];

export default {
  title: "Components/Select",
  component: Select,
};

const Template = (args) => (
  <Select autoCompleteItems={autoCompleteItems} {...args} />
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
