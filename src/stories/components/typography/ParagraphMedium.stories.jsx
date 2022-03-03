import React from "react";


import { ParagraphMedium } from "../../../../lib/components/Typography/Typography.styled";

export default {
  title: "Foundations/Typography/ParagraphMedium",
  component: ParagraphMedium,
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
  <ParagraphMedium {...args}>{args.content}</ParagraphMedium>
);

export const Default = Template.bind({});
Default.args = {
  content: "Default ParagraphMedium",
  weight: "normal",
};

export const Bold = Template.bind({});
Bold.args = {
  content: "Bold ParagraphMedium",
  weight: "bold",
};

export const Bolder = Template.bind({});
Bolder.args = {
  content: "Bolder ParagraphMedium",
  weight: "bolder",
};

export const Italic = Template.bind({});
Italic.args = {
  content: "Italic ParagraphMedium",
  italic: true,
};

export const Underlined = Template.bind({});
Underlined.args = {
  content: "Underlined ParagraphMedium",
  underlined: true,
};

export const StrikedThrough = Template.bind({});
StrikedThrough.args = {
  content: "StrikedThrough ParagraphMedium",
  strikedThrough: true,
};

export const AllOfTheAbove = Template.bind({});
AllOfTheAbove.args = {
  content: "Bolder Italic Underlined StrikedThrough ParagraphMedium",
  strikedThrough: true,
  weight: "bolder",
  underlined: true,
  italic: true,
};
