import React from "react";

import {
  BsCheckCircle,
  BsExclamationCircle,
  BsExclamationTriangleFill,
} from "react-icons/bs";

import StatusNumber from "../../../../lib/components/StatusNumber";

export default {
  title: "Components/StatusNumber",
  component: StatusNumber,
};

const Template = (args) => <StatusNumber {...args}>{args.label}</StatusNumber>;

export const Destructive = Template.bind({});
Destructive.args = {
  currentValue: "85",
  totalValue: "85",
  variant: "destructive",
  icon: <BsExclamationTriangleFill />,
};

export const Warning = Template.bind({});
Warning.args = {
  currentValue: "75",
  totalValue: "85",
  variant: "warning",
  icon: <BsExclamationCircle />,
};

export const Success = Template.bind({});
Success.args = {
  currentValue: 15,
  totalValue: 85,
  variant: "success",
  icon: <BsCheckCircle />,
};

export const Neutral = Template.bind({});
Neutral.args = {
  currentValue: "0",
  totalValue: "0",
  variant: "neutral",
};

export const NoValues = Template.bind({});
NoValues.args = {
  variant: "warning",
};

export const NullValues = Template.bind({});
NullValues.args = {
  currentValue: null,
  totalValue: null,
  variant: "warning",
};

export const NoIcon = Template.bind({});
NoIcon.args = {
  currentValue: "85",
  totalValue: "85",
  variant: "destructive",
};
