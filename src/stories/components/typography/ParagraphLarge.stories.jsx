import React from "react";


import { ParagraphLarge } from "../../../../lib/components/Typography/Typography.styled";

export default {
  title: "Foundations/Typography/ParagraphLarge",
  component: ParagraphLarge,
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
  <ParagraphLarge {...args}>{args.content}</ParagraphLarge>
);

export const Default = Template.bind({});
Default.args = {
  content: "Default ParagraphLarge",
  weight: "normal",
};

export const Bold = Template.bind({});
Bold.args = {
  content: "Bold ParagraphLarge",
  weight: "bold",
};

export const Bolder = Template.bind({});
Bolder.args = {
  content: "Bolder ParagraphLarge",
  weight: "bolder",
};

export const Italic = Template.bind({});
Italic.args = {
  content: "Italic ParagraphLarge",
  italic: true,
};

export const Underlined = Template.bind({});
Underlined.args = {
  content: "Underlined ParagraphLarge",
  underlined: true,
};

export const StrikedThrough = Template.bind({});
StrikedThrough.args = {
  content: "StrikedThrough ParagraphLarge",
  strikedThrough: true,
};

export const AllOfTheAbove = Template.bind({});
AllOfTheAbove.args = {
  content: "Bolder Italic Underlined StrikedThrough ParagraphLarge",
  strikedThrough: true,
  weight: "bolder",
  underlined: true,
  italic: true,
};
