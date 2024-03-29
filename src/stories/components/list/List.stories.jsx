import React from "react";
import List, { ListItem } from "../../../../lib/components/List";
import Button from "../../../../lib/components/Button";
import CheckBox from "../../../../lib/components/CheckBox";

import {
  BsCoin,
  BsHeart,
  BsHeartHalf,
  BsKanban,
  BsLightbulbOff,
} from "react-icons/bs";

export default {
  title: "Components/List",
  component: List,
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    alignment: {
      options: ["start", "end"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => (
  <List {...args}>
    <ListItem
      alignment={args.alignment}
      contentStart={args.contentStart}
      contentEnd={args.contentEnd}
      label={args.label}
      description={args.description}
      size={args.size}
    />
    <ListItem
      alignment={args.alignment}
      contentStart={args.contentStart}
      contentEnd={args.contentEnd}
      label={args.label}
      description={args.description}
      size={args.size}
    />
    <ListItem
      alignment={args.alignment}
      contentStart={args.contentStart}
      contentEnd={args.contentEnd}
      label={args.label}
      description={args.description}
      size={args.size}
    />
    <ListItem
      alignment={args.alignment}
      contentStart={args.contentStart}
      contentEnd={args.contentEnd}
      label={args.label}
      description={args.description}
      size={args.size}
    />
    <ListItem
      alignment={args.alignment}
      contentStart={args.contentStart}
      contentEnd={args.contentEnd}
      label={args.label}
      description={args.description}
      size={args.size}
    />
    <ListItem
      alignment={args.alignment}
      contentStart={args.contentStart}
      contentEnd={args.contentEnd}
      label={args.label}
      description={args.description}
      size={args.size}
    />
  </List>
);

export const Default = Template.bind({});
Default.args = {
  alignment: "start",
  contentStart: "X",
  contentEnd: <Button>Some Button</Button>,
  label: "Label",
  description: "Description",
};

export const Small = Template.bind({});
Small.args = {
  alignment: "start",
  size: "small",
  contentStart: "X",
  contentEnd: <Button>Some Button</Button>,
  label: "Label",
  description: "Description",
};

export const Large = Template.bind({});
Large.args = {
  alignment: "start",
  size: "large",
  contentStart: "X",
  contentEnd: <Button>Some Button</Button>,
  label: "Label",
  description: "Description",
};

export const EndAligned = Template.bind({});
EndAligned.args = {
  alignment: "end",
  contentStart: "X",
  contentEnd: <Button>Some Button</Button>,
  label: "Label",
  description: "Description",
};

export const LabelOnly = Template.bind({});
LabelOnly.args = {
  label: "Some text here",
};

export const DescriptionOnly = Template.bind({});
DescriptionOnly.args = {
  description: "Some text here",
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  label: "Nice icons, bro",
  contentStart: <BsHeart />,
  contentEnd: <BsHeartHalf />,
};

export const ContentsCanBeAnything = Template.bind({});
ContentsCanBeAnything.args = {
  label: (
    <>
      Icons
      <BsCoin />
      On
      <BsLightbulbOff />
      Label
      <BsKanban />?
    </>
  ),
  description: <Button>Button on description? This is anarchy!</Button>,
  contentStart: (
    <>
      Can I checkbox here? <CheckBox checked />
    </>
  ),
  contentEnd: <img src="https://placekitten.com/80/80" width={80} />,
};
