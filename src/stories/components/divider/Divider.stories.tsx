import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import Divider, { DividerProps } from "../../../../lib/components/Divider";
import {
  colorOptions,
  shadeOptions,
  spacingOptions,
} from "../../../constants/options";

const meta = {
  title: "Components/Divider",
  component: Divider,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    spaceAfter: {
      control: {
        type: "select",
        options: spacingOptions,
      },
    },
    color: {
      control: {
        type: "select",
        options: colorOptions,
      },
    },
    shade: {
      control: {
        type: "select",
        options: shadeOptions,
      },
    },
    thickness: {
      control: {
        type: "select",
        options: spacingOptions,
      },
    },
  },
} as Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <>
      <Divider {...args} />
      <Divider {...args} />
      <Divider {...args} />
      <Divider {...args} />
      <Divider {...args} />
    </>
  ),
};
