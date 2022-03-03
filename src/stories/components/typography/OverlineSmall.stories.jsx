import React from "react";


import { OverlineSmall } from "../../../../lib/components/Typography/Typography.styled";

export default {
  title: "Foundations/Typography/OverlineSmall",
  component: OverlineSmall,
  argTypes: {
    content: {
      control: { type: "text" },
    },
  },
};

const Template = (args) => (
  <OverlineSmall {...args}>{args.content}</OverlineSmall>
);

export const Default = Template.bind({});
Default.args = {
  content: "OverlineSmall",
};
