import React, { PropsWithChildren } from "react";
import Card from "../../../../lib/components/Card";
import { Meta, StoryObj } from "@storybook/react";
import { CardProps } from "../../../../lib/components/Card/Card";

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
  render: (args: any) => (
    <Card {...args} />
  ),
};

export const HugePadding: Story = {
  args: {
    padding: "huge",
    children: "Some content",
  },
  render: (args: any) => (
    <Card {...args} />
  ),
};

export const UpXXLargeShadow: Story = {
  args: {
    children: "Some content",
    shadow: "upXxLarge",
  },
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
  render: (args: any) => (
    <Card {...args} />
  ),
};

export const Image: Story = {
  args: {
    children: <img src="https://placekitten.com/200/200" />,
  },
  render: (args: any) => (
    <Card {...args} />
  ),
};
