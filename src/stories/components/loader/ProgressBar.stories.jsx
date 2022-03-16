import React from "react";
import ProgressBar from "../../../../lib/components/Loader/ProgressBar";

export default {
  title: "Components/ProgressBar/Default",
  component: ProgressBar,
  argTypes: {
    size: {
      options: ["small", "medium", "large", "xLarge"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <ProgressBar {...args} />;

export const Default = Template.bind();

Default.args = {
  percentage: 50,
  size: "medium",
};
