import { ComponentMeta, Story } from "@storybook/react";
import React, { ComponentProps, PropsWithChildren } from "react";

import Color from "./Color";

export default {
  title: "Foundations/Colors/Primary Colors",
  component: Color,
  argTypes: {
    color: {
      options: [
        "neutral",
        "primary",
        "secondary",
        "success",
        "warning",
        "destructive",
      ],
      control: { type: "select", default: "neutral" },
    },
    shade: {
      control: { type: "hidden" },
    },
  },
} as ComponentMeta<typeof Color>;

const Template: Story<PropsWithChildren<ComponentProps<typeof Color>>> = (
  args
) => (
  <>
    <Color {...args} shade="50" />
    <Color {...args} shade="100" />
    <Color {...args} shade="200" />
    <Color {...args} shade="300" />
    <Color {...args} shade="400" />
    <Color {...args} shade="500" />
    <Color {...args} shade="600" />
    <Color {...args} shade="700" />
    <Color {...args} shade="800" />
    <Color {...args} shade="900" />
  </>
);

export const Neutral = Template.bind({});
Neutral.args = {
  color: "neutral",
};

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary",
};

export const Success = Template.bind({});
Success.args = {
  color: "success",
};

export const Warning = Template.bind({});
Warning.args = {
  color: "warning",
};

export const Destructive = Template.bind({});
Destructive.args = {
  color: "destructive",
};
