import React from "react";


import { HeadingH1 } from "../../../../lib/components/Typography/Typography.styled";

export default {
  title: "Foundations/Typography/HeadingH1",
  component: HeadingH1,
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

const Template = (args) => <HeadingH1 {...args}>{args.content}</HeadingH1>;

export const Default = Template.bind({});
Default.args = {
  content: "Default HeadingH1",
  weight: "normal",
};

export const Bold = Template.bind({});
Bold.args = {
  content: "Bold HeadingH1",
  weight: "bold",
};

export const Bolder = Template.bind({});
Bolder.args = {
  content: "Bolder HeadingH1",
  weight: "bolder",
};

export const Boldest = Template.bind({});
Boldest.args = {
  content: "Boldest HeadingH1",
  weight: "boldest",
};
