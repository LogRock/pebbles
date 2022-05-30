import React from "react";

import StatusTrend from "../../../../lib/components/StatusTrend";

export default {
  title: "Components/StatusTrend",
  component: StatusTrend,
};

const Template = (args) => <StatusTrend {...args}></StatusTrend>;

export const UpIsBad = Template.bind({});
UpIsBad.args = {
  labelPrimary: "+10.3%",
  labelSecondary: "vs prev month",
  direction: "down",
  variant: "negative",
};

export const DownIsGood = Template.bind({});
DownIsGood.args = {
  labelPrimary: "-21.0%",
  labelSecondary: "vs prev month",
  direction: "up",
  variant: "positive",
};

export const UpIsGood = Template.bind({});
UpIsGood.args = {
  labelPrimary: "+6.8%",
  labelSecondary: "vs prev month",
  direction: "down",
  variant: "positive",
};

export const DownIsBad = Template.bind({});
DownIsBad.args = {
  labelPrimary: "-42.2%",
  labelSecondary: "vs prev month",
  direction: "up",
  variant: "negative",
};

export const Neutral = Template.bind({});
Neutral.args = {
  labelPrimary: "0.0%",
  labelSecondary: "vs prev month",
  direction: "neutral",
  variant: "neutral",
};
