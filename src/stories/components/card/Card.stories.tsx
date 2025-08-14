import React from "react";
import Card from "../../../../lib/components/Card";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
} as Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Some content",
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render: (args: any) => (
    <Card {...args} />
  ),
};

export const HugePadding: Story = {
  args: {
    padding: "huge",
    children: "Some content",
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render: (args: any) => (
    <Card {...args} />
  ),
};

export const UpXXLargeShadow: Story = {
  args: {
    children: "Some content",
    shadow: "upXxLarge",
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render: (args: any) => (
    <Card {...args} />
  ),
};

export const LgRadius: Story = {
  args: {
    children: (
      <>
        Some content
        <br />
        Some content
        <br />
        Some content
        <br />
        Some content
      </>
    ),
    radius: "lg",
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render: (args: any) => (
    <Card {...args} />
  ),
};

export const Image: Story = {
  args: {
    children: <img src="https://placekitten.com/200/200" />,
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render: (args: any) => (
    <Card {...args} />
  ),
};
