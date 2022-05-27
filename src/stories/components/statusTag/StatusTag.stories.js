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

const Template = (args) => <StatusTag {...args}></StatusTag>;

export const Error = Template.bind({});
Error.args = {
  size: "medium",
  variant: "error",
  icon: <Icon size={0.75} path={mdiAlert} />,
  children: "High Risk",
};

export const ErrorSmall = Template.bind({});
ErrorSmall.args = {
  size: "small",
  variant: "error",
  icon: <Icon size={0.6} path={mdiAlert} />,
  children: "High Risk",
};

export const Warning = Template.bind({});
Warning.args = {
  size: "medium",
  variant: "warning",
  icon: <Icon size={0.75} path={mdiAlertCircle} />,
  children: "Optional",
};

export const Success = Template.bind({});
Success.args = {
  size: "medium",
  variant: "success",
  icon: <Icon size={0.75} path={mdiCheckCircle} />,
  children: "Satisfactory",
};

export const Neutral = Template.bind({});
Neutral.args = {
  size: "medium",
  variant: "neutral",
  icon: <Icon size={0.75} path={mdiMinusCircle} />,
  children: "Unrated",
};

export const NoIcon = Template.bind({});
NoIcon.args = {
  size: "medium",
  variant: "neutral",
  children: "Look Ma No Icon!",
};

export const NoLabel = Template.bind({});
NoLabel.args = {
  size: "medium",
  variant: "neutral",
  icon: <Icon size={0.75} path={mdiAlert} />,
  children: null,
};

export const WithChildren = Template.bind({});
WithChildren.args = {
  size: "large",
  variant: "neutral",
  icon: <Icon size={0.75} path={mdiAlert} />,
  children: (
    <div style={{ display: "flex", alignItems: "center" }}>
      <span style={{ color: "#acc" }}>test</span>
      <h4 style={{ display: "inline", color: "#ccc", padding: "0 8px" }}>/</h4>
      <span style={{ color: "#caa" }}>test</span>
    </div>
  ),
};
