import React from "react";


import { HeadingH3 } from "../../../../lib/components/Typography/Typography.styled";

export default {
  title: "Foundations/Typography/HeadingH3",
  component: HeadingH3,
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

const Template = (args) => <HeadingH3 {...args}>{args.content}</HeadingH3>;

export const Default = Template.bind({});
Default.args = {
  content: "Default HeadingH3",
  weight: "normal",
};

export const Bold = Template.bind({});
Bold.args = {
  content: "Bold HeadingH3",
  weight: "bold",
};

export const Bolder = Template.bind({});
Bolder.args = {
  content: "Bolder HeadingH3",
  weight: "bolder",
};

export const Boldest = Template.bind({});
Boldest.args = {
  content: "Boldest HeadingH3",
  weight: "boldest",
};
