import React from "react";

import StatusTrend from "../../../../lib/components/StatusTrend";

export default {
  title: "Components/StatusTrend",
  component: StatusTrend,
};

const Template = (args) => <StatusTrend {...args}></StatusTrend>;

export const UpIsBad = Template.bind({});
UpIsBad.args = {
  children: "+10.3%",
  direction: "down",
  variant: "negative",
};

export const DownIsGood = Template.bind({});
DownIsGood.args = {
  children: "-21.0%",
  direction: "up",
  variant: "positive",
};

export const UpIsGood = Template.bind({});
UpIsGood.args = {
  children: "+6.8%",
  direction: "down",
  variant: "positive",
};

export const DownIsBad = Template.bind({});
DownIsBad.args = {
  children: "-42.2%",
  direction: "up",
  variant: "negative",
};

export const Neutral = Template.bind({});
Neutral.args = {
  children: "0.0%",
  direction: "neutral",
  variant: "neutral",
};

export const NoSecondaryLabel = Template.bind({});
NoSecondaryLabel.args = {
  children: "-42.2%",
  direction: "up",
  variant: "negative",
};
