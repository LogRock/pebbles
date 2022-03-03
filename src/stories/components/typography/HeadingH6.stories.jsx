import React from "react";


import { HeadingH6 } from "../../../../lib/components/Typography/Typography.styled";

export default {
  title: "Foundations/Typography/HeadingH6",
  component: HeadingH6,
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

const Template = (args) => <HeadingH6 {...args}>{args.content}</HeadingH6>;

export const Default = Template.bind({});
Default.args = {
  content: "Default HeadingH6",
  weight: "normal",
};

export const Bold = Template.bind({});
Bold.args = {
  content: "Bold HeadingH6",
  weight: "bold",
};

export const Bolder = Template.bind({});
Bolder.args = {
  content: "Bolder HeadingH6",
  weight: "bolder",
};

export const Boldest = Template.bind({});
Boldest.args = {
  content: "Boldest HeadingH6",
  weight: "boldest",
};
