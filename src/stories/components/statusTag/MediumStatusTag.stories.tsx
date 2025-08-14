import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";

import StatusTag, {
  STATUS_TAG_VARIANTS,
} from "../../../../lib/components/StatusTag";

const meta = {
  title: "Components/StatusTag/Medium",
  component: StatusTag,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "DESTRUCTIVE",
        "DESTRUCTIVE_ALT",
        "SECONDARY",
        "SECONDARY_ALT",
        "WARNING",
        "WARNING_ALT",
        "NEUTRAL",
        "NEUTRAL_ALT",
        "SUCCESS",
        "SUCCESS_ALT",
      ],
    },
    size: {
      control: false,
      description: "Fixed to MEDIUM for this story group",
    },
  },
} as Meta<typeof StatusTag>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: any) => (
  <StatusTag size="MEDIUM" {...args}>
    {args.children}
  </StatusTag>
);

export const Destructive: Story = {
  args: {
    variant: STATUS_TAG_VARIANTS.DESTRUCTIVE,
    children: "DESTRUCTIVE",
  },
  render: Template,
};

export const DestructiveAlt: Story = {
  args: {
    variant: STATUS_TAG_VARIANTS.DESTRUCTIVE_ALT,
    children: "DESTRUCTIVE_ALT",
  },
  render: Template,
};

export const Secondary: Story = {
  args: {
    variant: STATUS_TAG_VARIANTS.SECONDARY,
    children: "SECONDARY",
  },
  render: Template,
};

export const SecondaryAlt: Story = {
  args: {
    variant: STATUS_TAG_VARIANTS.SECONDARY_ALT,
    children: "SECONDARY_ALT",
  },
  render: Template,
};

export const Warning: Story = {
  args: {
    variant: STATUS_TAG_VARIANTS.WARNING,
    children: "WARNING",
  },
  render: Template,
};

export const WarningAlt: Story = {
  args: {
    variant: STATUS_TAG_VARIANTS.WARNING_ALT,
    children: "WARNING_ALT",
  },
  render: Template,
};

export const Neutral: Story = {
  args: {
    variant: STATUS_TAG_VARIANTS.NEUTRAL,
    children: "NEUTRAL",
  },
  render: Template,
};

export const NeutralAlt: Story = {
  args: {
    variant: STATUS_TAG_VARIANTS.NEUTRAL_ALT,
    children: "NEUTRAL_ALT",
  },
  render: Template,
};

export const Success: Story = {
  args: {
    variant: STATUS_TAG_VARIANTS.SUCCESS,
    children: "SUCCESS",
  },
  render: Template,
};

export const SuccessAlt: Story = {
  args: {
    variant: STATUS_TAG_VARIANTS.SUCCESS_ALT,
    children: "SUCCESS_ALT",
  },
  render: Template,
};
