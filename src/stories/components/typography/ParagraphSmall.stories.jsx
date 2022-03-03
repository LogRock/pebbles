import React from "react";


import { ParagraphSmall } from "../../../../lib/components/Typography/Typography.styled";

export default {
  title: "Foundations/Typography/ParagraphSmall",
  component: ParagraphSmall,
  argTypes: {
    weight: {
      options: ["normal", "bold", "bolder"],
      control: { type: "radio" },
    },
    underlined: {
      control: { type: "boolean" },
    },
    strikedThrough: {
      control: { type: "boolean" },
    },
    italic: {
      control: { type: "boolean" },
    },
    content: {
      control: { type: "text" },
    },
  },
};

const Template = (args) => (
  <ParagraphSmall {...args}>{args.content}</ParagraphSmall>
);

export const Default = Template.bind({});
Default.args = {
  content: "Default ParagraphSmall",
  weight: "normal",
};

export const Bold = Template.bind({});
Bold.args = {
  content: "Bold ParagraphSmall",
  weight: "bold",
};

export const Bolder = Template.bind({});
Bolder.args = {
  content: "Bolder ParagraphSmall",
  weight: "bolder",
};

export const Italic = Template.bind({});
Italic.args = {
  content: "Italic ParagraphSmall",
  italic: true,
};

export const Underlined = Template.bind({});
Underlined.args = {
  content: "Underlined ParagraphSmall",
  underlined: true,
};

export const StrikedThrough = Template.bind({});
StrikedThrough.args = {
  content: "StrikedThrough ParagraphSmall",
  strikedThrough: true,
};

export const AllOfTheAbove = Template.bind({});
AllOfTheAbove.args = {
  content: "Bolder Italic Underlined StrikedThrough ParagraphSmall",
  strikedThrough: true,
  weight: "bolder",
  underlined: true,
  italic: true,
};
