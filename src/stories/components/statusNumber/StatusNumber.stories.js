import React from "react";

import Icon from "@mdi/react";
import { mdiAlert, mdiAlertCircle, mdiCheckCircle } from "@mdi/js";

import StatusNumber from "../../../../lib/components/StatusNumber";

export default {
  title: "Components/StatusNumber",
  component: StatusNumber,
};

const Template = (args) => <StatusNumber {...args}>{args.label}</StatusNumber>;

export const Error = Template.bind({});
Error.args = {
  currentValue: 85,
  totalValue: 85,
  variant: "error",
  icon: <Icon size={0.95} path={mdiAlert} />,
};

export const Warning = Template.bind({});
Warning.args = {
  currentValue: 75,
  totalValue: 85,
  variant: "warning",
  icon: <Icon size={0.95} path={mdiAlertCircle} />,
};

export const Success = Template.bind({});
Success.args = {
  currentValue: 15,
  totalValue: 85,
  variant: "success",
  icon: <Icon size={0.95} path={mdiCheckCircle} />,
};

export const Neutral = Template.bind({});
Neutral.args = {
  currentValue: 0,
  totalValue: 0,
  variant: "neutral",
};

export const NoIcon = Template.bind({});
NoIcon.args = {
  currentValue: 85,
  totalValue: 85,
  variant: "error",
};
