import React from "react";


import { OverlineMedium } from "../../../../lib/components/Typography/Typography.styled";

export default {
  title: "Foundations/Typography/OverlineMedium",
  component: OverlineMedium,
  argTypes: {
    content: {
      control: { type: "text" },
    },
  },
};

const Template = (args) => (
  <OverlineMedium {...args}>{args.content}</OverlineMedium>
);

export const Default = Template.bind({});
Default.args = {
  content: "OverlineMedium",
};
