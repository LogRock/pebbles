import React from "react";
import StatusTag from "../../../../lib/components/StatusTag";

export default {
  title: "Components/StatusTag",
  component: StatusTag,
};

const Template = (args) => <StatusTag {...args}>{args.label}</StatusTag>;

export const Error = Template.bind({});
Error.args = {
  label: "High Risk",
  size: "medium",
  variant: "error",
};

export const Warning = Template.bind({});
Warning.args = {
  label: "Optional",
  size: "medium",
  variant: "warning",
};

export const Success = Template.bind({});
Success.args = {
  label: "Satisfactory",
  size: "medium",
  variant: "success",
};

export const Neutral = Template.bind({});
Neutral.args = {
  label: "Unrated",
  size: "medium",
  variant: "neutral",
};

export const NoLabel = Template.bind({});
NoLabel.args = {
  label: null,
  size: "medium",
  variant: "neutral",
};
