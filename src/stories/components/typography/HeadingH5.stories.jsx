import React from "react";


import { HeadingH5 } from "../../../../lib/components/Typography/Typography.styled";

export default {
  title: "Foundations/Typography/HeadingH5",
  component: HeadingH5,
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

const Template = (args) => <HeadingH5 {...args}>{args.content}</HeadingH5>;

export const Default = Template.bind({});
Default.args = {
  content: "Default HeadingH5",
  weight: "normal",
};

export const Bold = Template.bind({});
Bold.args = {
  content: "Bold HeadingH5",
  weight: "bold",
};

export const Bolder = Template.bind({});
Bolder.args = {
  content: "Bolder HeadingH5",
  weight: "bolder",
};

export const Boldest = Template.bind({});
Boldest.args = {
  content: "Boldest HeadingH5",
  weight: "boldest",
};
