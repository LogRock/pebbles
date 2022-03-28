import React from "react";
import ProgressRing from "../../../../lib/components/Loader/ProgressRing";

export default {
  title: "Components/ProgressRing/Default",
  component: ProgressRing,
};

const Template = (args) => <ProgressRing {...args} />;

export const Default = Template.bind();
Default.args = {
  percentage: 95,
  radius: 40,
  stroke: 8,
  showBaseRing: true,
};

export const SolidColorNoBaseRing = Template.bind({});
SolidColorNoBaseRing.args = {
  percentage: 75,
  radius: 30,
  stroke: 4,
  label: "75%",
};

export const GradientColor = Template.bind({});
GradientColor.args = {
  percentage: 40,
  radius: 40,
  stroke: 6,
  colorGradient: true,
  showBaseRing: true,
  label: "2 of 5",
};
