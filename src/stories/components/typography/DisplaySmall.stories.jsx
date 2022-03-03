import React from "react";


import { DisplaySmall } from "../../../../lib/components/Typography/Typography.styled";

export default {
  title: "Foundations/Typography/DisplaySmall",
  component: DisplaySmall,
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
  <DisplaySmall {...args}>{args.content}</DisplaySmall>
);

export const Default = Template.bind({});
Default.args = {
  content: "Default DisplaySmall",
  weight: "normal",
};

export const Bold = Template.bind({});
Bold.args = {
  content: "Bold DisplaySmall",
  weight: "bold",
};

export const Bolder = Template.bind({});
Bolder.args = {
  content: "Bolder DisplaySmall",
  weight: "bolder",
};

export const Boldest = Template.bind({});
Boldest.args = {
  content: "Boldest DisplaySmall",
  weight: "boldest",
};
