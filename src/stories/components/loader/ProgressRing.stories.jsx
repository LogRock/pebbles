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

export const Primary = Template.bind();
Primary.args = {
  percentage: 65,
  radius: 40,
  stroke: 8,
  showBaseRing: true,
  variant: "primary",
  label: "65%",
};

export const Success = Template.bind();
Success.args = {
  percentage: 35,
  radius: 40,
  stroke: 8,
  showBaseRing: true,
  variant: "success",
  label: "35%",
};

export const Destructive = Template.bind();
Destructive.args = {
  percentage: 15,
  radius: 40,
  stroke: 8,
  showBaseRing: true,
  variant: "destructive",
  label: "15%",
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
  percentage: 80,
  radius: 40,
  stroke: 6,
  colorGradient: true,
  showBaseRing: true,
  label: "2 of 5",
};
