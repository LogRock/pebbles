import React from "react";


import { DisplayLarge } from "../../../../lib/components/Typography/Typography.styled";

export default {
  title: "Foundations/Typography/DisplayLarge",
  component: DisplayLarge,
  argTypes: {
    weight: {
      options: ["normal", "bold", "bolder", "boldest"],
      control: { type: "radio" },
    },
    content: {
      control: { type: "text" },
    },
  },
};

const Template = (args) => (
  <DisplayLarge {...args}>{args.content}</DisplayLarge>
);

export const Default = Template.bind({});
Default.args = {
  content: "Default DisplayLarge",
  weight: "normal",
};

export const Bold = Template.bind({});
Bold.args = {
  content: "Bold DisplayLarge",
  weight: "bold",
};

export const Bolder = Template.bind({});
Bolder.args = {
  content: "Bolder DisplayLarge",
  weight: "bolder",
};

export const Boldest = Template.bind({});
Boldest.args = {
  content: "Boldest DisplayLarge",
  weight: "boldest",
};
