import React from "react";
import Blur from "./Blur";

export default {
  title: "Foundations/Shadows And Blurs/Blurs",
  component: Blur,
  argTypes: {
    blur: {
      options: ["none", "small", "medium", "large", "xLarge"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Blur {...args} />;

export const None = Template.bind({});
None.args = {
  blur: "none",
};

export const Small = Template.bind({});
Small.args = {
  blur: "small",
};

export const Medium = Template.bind({});
Medium.args = {
  blur: "medium",
};

export const Large = Template.bind({});
Large.args = {
  blur: "large",
};

export const XLarge = Template.bind({});
XLarge.args = {
  blur: "xLarge",
};
