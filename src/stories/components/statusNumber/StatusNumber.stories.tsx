import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";

import {
  BsCheckCircle,
  BsExclamationCircle,
  BsExclamationTriangleFill,
} from "react-icons/bs";

import StatusNumber from "../../../../lib/components/StatusNumber";

const meta = {
  title: "Components/StatusNumber",
  component: StatusNumber,
  parameters: {
    layout: "centered",
  },
} as Meta<typeof StatusNumber>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: any) => (
  <StatusNumber {...args}>{args.label}</StatusNumber>
);

export const Destructive: Story = {
  args: {
    currentValue: "85",
    totalValue: "85",
    variant: "destructive",
    icon: <BsExclamationTriangleFill />,
  },
  render: Template,
};

export const Warning: Story = {
  args: {
    currentValue: "75",
    totalValue: "85",
    variant: "warning",
    icon: <BsExclamationCircle />,
  },
  render: Template,
};

export const Success: Story = {
  args: {
    currentValue: 15,
    totalValue: 85,
    variant: "success",
    icon: <BsCheckCircle />,
  },
  render: Template,
};

export const Neutral: Story = {
  args: {
    currentValue: "0",
    totalValue: "0",
    variant: "neutral",
  },
  render: Template,
};

export const NoValues: Story = {
  args: {
    variant: "warning",
  },
  render: Template,
};

export const NullValues: Story = {
  args: {
    currentValue: null,
    totalValue: null,
    variant: "warning",
  },
  render: Template,
};

export const NoIcon: Story = {
  args: {
    currentValue: "85",
    totalValue: "85",
    variant: "destructive",
  },
  render: Template,
};
