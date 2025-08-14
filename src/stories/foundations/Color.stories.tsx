import { Meta, StoryObj } from "@storybook/react";
import React, { ComponentProps, PropsWithChildren } from "react";

import Color from "./Color";

const meta = {
  title: "Foundations/Colors/Primary Colors",
  component: Color,
  parameters: {
    layout: "centered",
  },
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
} as Meta<typeof Color>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Neutral: Story = {
  args: {
    color: "neutral",
  },
  render: (args: any) => (
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
  ),
};

export const Primary: Story = {
  args: {
    color: "primary",
  },
  render: (args: any) => (
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
  ),
};

export const Secondary: Story = {
  args: {
    color: "secondary",
  },
  render: (args: any) => (
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
  ),
};

export const Success: Story = {
  args: {
    color: "success",
  },
  render: (args: any) => (
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
  ),
};

export const Warning: Story = {
  args: {
    color: "warning",
  },
  render: (args: any) => (
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
  ),
};

export const Destructive: Story = {
  args: {
    color: "destructive",
  },
  render: (args: any) => (
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
  ),
};
