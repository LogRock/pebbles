import React from "react";


import { ParagraphXSmall } from "../../../../lib/components/Typography/Typography.styled";

export default {
  title: "Foundations/Typography/ParagraphXSmall",
  component: ParagraphXSmall,
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
  <ParagraphXSmall {...args}>{args.content}</ParagraphXSmall>
);

export const Default = Template.bind({});
Default.args = {
  content: "Default ParagraphXSmall",
  weight: "normal",
};

export const Bold = Template.bind({});
Bold.args = {
  content: "Bold ParagraphXSmall",
  weight: "bold",
};

export const Bolder = Template.bind({});
Bolder.args = {
  content: "Bolder ParagraphXSmall",
  weight: "bolder",
};

export const Italic = Template.bind({});
Italic.args = {
  content: "Italic ParagraphXSmall",
  italic: true,
};

export const Underlined = Template.bind({});
Underlined.args = {
  content: "Underlined ParagraphXSmall",
  underlined: true,
};

export const StrikedThrough = Template.bind({});
StrikedThrough.args = {
  content: "StrikedThrough ParagraphXSmall",
  strikedThrough: true,
};

export const AllOfTheAbove = Template.bind({});
AllOfTheAbove.args = {
  content: "Bolder Italic Underlined StrikedThrough ParagraphXSmall",
  strikedThrough: true,
  weight: "bolder",
  underlined: true,
  italic: true,
};
