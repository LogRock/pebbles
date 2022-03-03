import React from "react";

import Shadow from "./Shadow";

export default {
  title: "Foundations/Shadows And Blurs/Shadows",
  component: Shadow,
  argTypes: {
    value: {
      options: [
        "xSmall",
        "small",
        "medium",
        "large",
        "xLarge",
        "xxLarge",
        "upXSmall",
        "upSmall",
        "upMedium",
        "upLarge",
        "upXLarge",
        "upXxLarge",
      ],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Shadow {...args} />;

export const XSmall = Template.bind({});
XSmall.args = {
  variant: "xSmall",
};

export const Small = Template.bind({});
Small.args = {
  variant: "small",
};

export const Medium = Template.bind({});
Medium.args = {
  variant: "medium",
};

export const Large = Template.bind({});
Large.args = {
  variant: "large",
};

export const XLarge = Template.bind({});
XLarge.args = {
  variant: "xLarge",
};

export const XxLarge = Template.bind({});
XxLarge.args = {
  variant: "xxLarge",
};

export const UpXSmall = Template.bind({});
UpXSmall.args = {
  variant: "upXSmall",
};

export const UpSmall = Template.bind({});
UpSmall.args = {
  variant: "upSmall",
};

export const UpMedium = Template.bind({});
UpMedium.args = {
  variant: "upMedium",
};

export const UpLarge = Template.bind({});
UpLarge.args = {
  variant: "upLarge",
};

export const UpXLarge = Template.bind({});
UpXLarge.args = {
  variant: "upXLarge",
};

export const UpXxLarge = Template.bind({});
UpXxLarge.args = {
  variant: "upXxLarge",
};
