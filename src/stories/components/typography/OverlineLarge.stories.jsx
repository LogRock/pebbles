import React from "react";


import { OverlineLarge } from "../../../../lib/components/Typography/Typography.styled";

export default {
  title: "Foundations/Typography/OverlineLarge",
  component: OverlineLarge,
  argTypes: {
    content: {
      control: { type: "text" },
    },
  },
};

const Template = (args) => (
  <OverlineLarge {...args}>{args.content}</OverlineLarge>
);

export const Default = Template.bind({});
Default.args = {
  content: "OverlineLarge",
};
