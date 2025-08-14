import React from "react";
import NotificationDot from "../../../../lib/components/NotificationDot";
import { Meta, StoryObj } from "@storybook/react-vite";
import { STATUS_TAG_VARIANTS } from "../../../../lib/main";

const meta = {
  title: "Components/NotificationDot",
  component: NotificationDot,
  parameters: {
    layout: "centered",
  },
  argTypes: { onChange: { action: "changed" } },
} as Meta<typeof NotificationDot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "WAIT, THIS IS NEUTRAL ALT!",
  },
  render: (args) => <NotificationDot {...args} />,
};

export const Destructive: Story = {
  args: {
    variant: STATUS_TAG_VARIANTS.DESTRUCTIVE,
    children: "X",
  },
  render: (args) => <NotificationDot {...args} />,
};

export const DestructiveAlt: Story = {
  args: {
    variant: STATUS_TAG_VARIANTS.DESTRUCTIVE_ALT,
    children: "0",
  },
  render: (args) => <NotificationDot {...args} />,
};

export const Success: Story = {
  args: {
    variant: STATUS_TAG_VARIANTS.SUCCESS,
    children: "9",
  },
  render: (args) => <NotificationDot {...args} />,
};

export const SuccessAlt: Story = {
  args: {
    variant: STATUS_TAG_VARIANTS.SUCCESS_ALT,
    children: "OK",
  },
  render: (args) => <NotificationDot {...args} />,
};

export const Warning: Story = {
  args: {
    variant: STATUS_TAG_VARIANTS.WARNING,
    children: "NOK",
  },
  render: (args) => <NotificationDot {...args} />,
};

export const WarningAlt: Story = {
  args: {
    variant: STATUS_TAG_VARIANTS.WARNING_ALT,
    children: "WAIT...",
  },
  render: (args) => <NotificationDot {...args} />,
};

export const Neutral: Story = {
  args: {
    variant: STATUS_TAG_VARIANTS.NEUTRAL_ALT,
    children: "NICE",
  },
  render: (args) => <NotificationDot {...args} />,
};
