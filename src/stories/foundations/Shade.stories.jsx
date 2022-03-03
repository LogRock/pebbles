import React from "react";


import Shade from "./Shade";

export default {
  title: "Foundations/Colors/Shades",
  component: Shade,
  argTypes: {
    name: {
      options: ["0", "100"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Shade {...args} />;

export const _0 = Template.bind({});
_0.args = {
  value: "0",
};

export const _100 = Template.bind({});
_100.args = {
  value: "100",
};
