import React from "react";

import StatusTag from "../../../../lib/components/StatusTag";

export default {
  title: "Components/StatusTag/Medium",
  component: StatusTag,
};

const Template = (args) => <StatusTag size="MEDIUM" {...args}></StatusTag>;

export const Destructive = Template.bind({});
Destructive.args = {
  variant: "DESTRUCTIVE",
  children: "DESTRUCTIVE",
};

export const DestructiveAlt = Template.bind({});
DestructiveAlt.args = {
  variant: "DESTRUCTIVE_ALT",
  children: "DESTRUCTIVE_ALT",
};

export const SecondaryAlt = Template.bind({});
SecondaryAlt.args = {
  variant: "SECONDARY_ALT",
  children: "SECONDARY_ALT",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "SECONDARY",
  children: "SECONDARY",
};

export const Warning = Template.bind({});
Warning.args = {
  variant: "WARNING",
  children: "WARNING",
};

export const WarningAlt = Template.bind({});
WarningAlt.args = {
  variant: "WARNING_ALT",
  children: "WARNING_ALT",
};

export const Neutral = Template.bind({});
Neutral.args = {
  variant: "NEUTRAL",
  children: "NEUTRAL",
};

export const NeutralAlt = Template.bind({});
NeutralAlt.args = {
  variant: "NEUTRAL_ALT",
  children: "NEUTRAL_ALT",
};

export const Success = Template.bind({});
Success.args = {
  variant: "SUCCESS",
  children: "SUCCESS",
};

export const SuccessAlt = Template.bind({});
SuccessAlt.args = {
  variant: "SUCCESS_ALT",
  children: "SUCCESS_ALT",
};
