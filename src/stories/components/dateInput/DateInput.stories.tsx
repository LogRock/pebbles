import React from "react";
import DateInput from "../../../../lib/components/DateInput/DateInput";
import { Meta, StoryObj } from "@storybook/react-vite";
import { BsAlarm } from "react-icons/bs";

const meta = {
  title: "Components/DateInput",
  component: DateInput,
  parameters: {
    layout: "centered",
  },
} as Meta<typeof DateInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => <DateInput {...args} />,
};

export const WithLabel: Story = {
  args: {
    label: "Date",
  },
  render: (args) => <DateInput {...args} />,
};

export const WithHelperText: Story = {
  args: {
    helper: "Helper text",
  },
  render: (args) => <DateInput {...args} />,
};

export const WithHelperIcon: Story = {
  args: {
    helperIcon: <BsAlarm />,
    label: "email",
    helper: "something",
  },
  render: (args) => <DateInput {...args} />,
};

export const WithError: Story = {
  args: {
    label: "email",
    helper: "something",
    destructive: true,
  },
  render: (args) => <DateInput {...args} />,
};
