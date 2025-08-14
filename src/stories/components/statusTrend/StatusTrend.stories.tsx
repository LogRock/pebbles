import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import StatusTrend from "../../../../lib/components/StatusTrend";

const meta = {
  title: "Components/StatusTrend",
  component: StatusTrend,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    direction: {
      control: { type: "select" },
      options: ["up", "down", "neutral"],
    },
    variant: {
      control: { type: "select" },
      options: ["positive", "negative", "neutral"],
    },
  },
} as Meta<typeof StatusTrend>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: any) => (
  <StatusTrend {...args}>{args.children}</StatusTrend>
);

export const UpIsBad: Story = {
  args: {
    children: "+10.3%",
    direction: "down",
    variant: "negative",
  },
  render: Template,
};

export const DownIsGood: Story = {
  args: {
    children: "-21.0%",
    direction: "up",
    variant: "positive",
  },
  render: Template,
};

export const UpIsGood: Story = {
  args: {
    children: "+6.8%",
    direction: "down",
    variant: "positive",
  },
  render: Template,
};

export const DownIsBad: Story = {
  args: {
    children: "-42.2%",
    direction: "up",
    variant: "negative",
  },
  render: Template,
};

export const Neutral: Story = {
  args: {
    children: "0.0%",
    direction: "neutral",
    variant: "neutral",
  },
  render: Template,
};

export const NoSecondaryLabel: Story = {
  args: {
    children: "-42.2%",
    direction: "up",
    variant: "negative",
  },
  render: Template,
};
