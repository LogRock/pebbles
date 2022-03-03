import React from "react";


import { HeadingH4 } from "../../../../lib/components/Typography/Typography.styled";

export default {
  title: "Foundations/Typography/HeadingH4",
  component: HeadingH4,
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

const Template = (args) => <HeadingH4 {...args}>{args.content}</HeadingH4>;

export const Default = Template.bind({});
Default.args = {
  content: "Default HeadingH4",
  weight: "normal",
};

export const Bold = Template.bind({});
Bold.args = {
  content: "Bold HeadingH4",
  weight: "bold",
};

export const Bolder = Template.bind({});
Bolder.args = {
  content: "Bolder HeadingH4",
  weight: "bolder",
};

export const Boldest = Template.bind({});
Boldest.args = {
  content: "Boldest HeadingH4",
  weight: "boldest",
};
