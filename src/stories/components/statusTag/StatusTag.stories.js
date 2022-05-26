import React from "react";

import Icon from "@mdi/react";
import {
  mdiAlert,
  mdiAlertCircle,
  mdiMinusCircle,
  mdiCheckCircle,
} from "@mdi/js";

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
  icon: <Icon size={0.75} path={mdiAlert} />,
};

export const ErrorSmall = Template.bind({});
ErrorSmall.args = {
  label: "High Risk",
  size: "small",
  variant: "error",
  icon: <Icon size={0.6} path={mdiAlert} />,
};

export const Warning = Template.bind({});
Warning.args = {
  label: "Optional",
  size: "medium",
  variant: "warning",
  icon: <Icon size={0.75} path={mdiAlertCircle} />,
};

export const Success = Template.bind({});
Success.args = {
  label: "Satisfactory",
  size: "medium",
  variant: "success",
  icon: <Icon size={0.75} path={mdiCheckCircle} />,
};

export const Neutral = Template.bind({});
Neutral.args = {
  label: "Unrated",
  size: "medium",
  variant: "neutral",
  icon: <Icon size={0.75} path={mdiMinusCircle} />,
};

export const NoIcon = Template.bind({});
NoIcon.args = {
  label: "No Label Here",
  size: "medium",
  variant: "neutral",
};

export const NoLabel = Template.bind({});
NoLabel.args = {
  label: null,
  size: "medium",
  variant: "neutral",
  icon: <Icon size={0.75} path={mdiAlert} />,
};
