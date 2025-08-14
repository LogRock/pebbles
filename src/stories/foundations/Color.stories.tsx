import { Meta, StoryObj } from "@storybook/react";
import React from "react";

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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
