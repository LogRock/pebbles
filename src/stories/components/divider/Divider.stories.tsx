import { ComponentMeta, Story } from "@storybook/react";
import React from "react";

import Divider, { DividerProps } from "../../../../lib/components/Divider";
import {
  colorOptions,
  shadeOptions,
  spacingOptions,
} from "../../../constants/options";

export default {
  title: "Components/Divider",
  component: Divider,
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
} as ComponentMeta<typeof Divider>;

const Template: Story<DividerProps> = (args) => (
  <>
    <Divider {...args} />
    <Divider {...args} />
    <Divider {...args} />
    <Divider {...args} />
    <Divider {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {};
