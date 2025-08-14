import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import StatusPercentage from "../../../../lib/components/StatusPercentage";

const meta = {
  title: "Components/StatusPercentage",
  component: StatusPercentage,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    percentage: {
      control: { type: "range", min: 0, max: 100, step: 1 },
      description: "Percentage value (0-100)",
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "success", "destructive"],
    },
  },
} as Meta<typeof StatusPercentage>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: any) => (
  <StatusPercentage {...args}>{args.children}</StatusPercentage>
);

export const Basic: Story = {
  args: {
    percentage: 80,
    children: "80%",
  },
  render: Template,
};

export const Small: Story = {
  args: {
    percentage: 50,
    size: "small",
    children: "1/2",
  },
  render: Template,
};

export const Medium: Story = {
  args: {
    percentage: 80,
    size: "medium",
    children: "80%",
  },
  render: Template,
};

export const Large: Story = {
  args: {
    percentage: 67,
    size: "large",
    children: "2 of 3",
  },
  render: Template,
};

export const Success: Story = {
  args: {
    percentage: 67,
    size: "large",
    children: "67%",
    variant: "success",
  },
  render: Template,
};

export const Destructive: Story = {
  args: {
    percentage: 67,
    size: "large",
    children: "67%",
    variant: "destructive",
  },
  render: Template,
};

export const Primary: Story = {
  args: {
    percentage: 67,
    size: "large",
    children: "67%",
    variant: "primary",
  },
  render: Template,
};

export const Secondary: Story = {
  args: {
    percentage: 67,
    size: "large",
    children: "67%",
    variant: "secondary",
  },
  render: Template,
};

export const UseChildren: Story = {
  args: {
    percentage: 20,
    size: "large",
  },
  render: (args) => (
    <StatusPercentage {...args}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h4>1</h4>
        <h6 style={{ padding: "0 4px" }}>/</h6>
        <h4>5</h4>
      </div>
    </StatusPercentage>
  ),
};
