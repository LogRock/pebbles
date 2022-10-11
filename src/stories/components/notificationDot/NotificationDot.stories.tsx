import React from "react";
import NotificationDot from "../../../../lib/components/NotificationDot";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { STATUS_TAG_VARIANTS } from "../../../../lib/main";

export default {
  title: "Components/NotificationDot",
  component: NotificationDot,
  argTypes: { onChange: { action: "changed" } },
} as ComponentMeta<typeof NotificationDot>;

const Template: ComponentStory<typeof NotificationDot> = (args) => (
  <NotificationDot {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "WAIT, THIS IS NEUTRAL ALT!",
};

export const Destructive = Template.bind({});
Destructive.args = {
  variant: STATUS_TAG_VARIANTS.DESTRUCTIVE,
  children: "X",
};

export const DestructiveAlt = Template.bind({});
DestructiveAlt.args = {
  variant: STATUS_TAG_VARIANTS.DESTRUCTIVE_ALT,
  children: "0",
};

export const Success = Template.bind({});
Success.args = {
  variant: STATUS_TAG_VARIANTS.SUCCESS,
  children: "9",
};

export const SuccessAlt = Template.bind({});
SuccessAlt.args = {
  variant: STATUS_TAG_VARIANTS.SUCCESS_ALT,
  children: "OK",
};

export const Warning = Template.bind({});
Warning.args = {
  variant: STATUS_TAG_VARIANTS.WARNING,
  children: "NOK",
};

export const WarningAlt = Template.bind({});
WarningAlt.args = {
  variant: STATUS_TAG_VARIANTS.WARNING_ALT,
  children: "WAIT...",
};

export const Neutral = Template.bind({});
Neutral.args = {
  variant: STATUS_TAG_VARIANTS.NEUTRAL_ALT,
  children: "NICE",
};
