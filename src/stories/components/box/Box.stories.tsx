import { ComponentMeta, Story } from "@storybook/react";
import React from "react";

import Box, { BoxProps } from "../../../../lib/components/Box";
import {
  colorOptions,
  shadeOptions,
  shadowOptions,
  spacingOptions,
} from "../../../constants/options";

export default {
  title: "Components/Box",
  component: Box,
  argTypes: {
    margin: {
      control: {
        type: "select",
        options: spacingOptions,
      },
    },
    padding: {
      control: {
        type: "select",
        options: spacingOptions,
      },
    },
    backgroundColor: {
      control: {
        type: "select",
        options: colorOptions,
      },
    },
    backgroundShade: {
      control: {
        type: "select",
        options: shadeOptions,
      },
    },
    borderRadius: {
      control: {
        type: "select",
        options: spacingOptions,
      },
    },
    shadow: {
      control: {
        type: "select",
        options: shadowOptions,
      },
    },
    direction: {
      control: {
        type: "select",
        options: ["row", "column", "row-reverse", "column-reverse"],
      },
    },
    rowGap: {
      control: {
        type: "select",
        options: spacingOptions,
      },
    },
    colGap: {
      control: {
        type: "select",
        options: spacingOptions,
      },
    },
    align: {
      control: {
        type: "select",
        options: ["center", "flex-start", "stretch", "flex-end"],
      },
    },
    justify: {
      control: {
        type: "select",
        options: [
          "flex-start",
          "flex-end",
          "space-between",
          "space-around",
          "space-evenly",
        ],
      },
    },
    wrap: {
      type: "boolean",
    },
    spaceAfter: {
      control: {
        type: "select",
        options: spacingOptions,
      },
    },
  },
} as ComponentMeta<typeof Box>;

const Template: Story<BoxProps> = (args) => (
  <Box {...args}>
    <Box
      padding="zero"
      borderRadius="zero"
      margin="zero"
      backgroundColor="primary"
      backgroundShade="500"
    >
      Child
    </Box>
    <Box
      padding="zero"
      borderRadius="zero"
      margin="zero"
      backgroundColor="primary"
      backgroundShade="500"
    >
      Child
    </Box>
    <Box
      padding="zero"
      borderRadius="zero"
      margin="zero"
      backgroundColor="primary"
      backgroundShade="500"
    >
      Child
    </Box>
    <Box
      padding="zero"
      borderRadius="zero"
      margin="zero"
      backgroundColor="primary"
      backgroundShade="500"
    >
      Child
    </Box>
    <Box
      padding="zero"
      borderRadius="zero"
      margin="zero"
      backgroundColor="primary"
      backgroundShade="500"
    >
      Child
    </Box>
    <Box
      padding="zero"
      borderRadius="zero"
      margin="zero"
      backgroundColor="primary"
      backgroundShade="500"
    >
      Child
    </Box>
  </Box>
);

export const Default = Template.bind({});
Default.args = {};

const TemplateWidths: Story<BoxProps> = (args) => (
  <Box
    direction="row"
    backgroundColor="secondary"
    padding="md"
    margin="zero"
    colGap="zero"
    rowGap="zero"
  >
    <Box backgroundColor="destructive" {...args}>
      Child
    </Box>
    <Box backgroundColor="destructive" {...args}>
      Child
    </Box>
    <Box backgroundColor="destructive" {...args}>
      Child
    </Box>
    <Box backgroundColor="destructive" {...args}>
      Child
    </Box>
    <Box backgroundColor="destructive" {...args}>
      Child
    </Box>
    <Box backgroundColor="destructive" {...args}>
      Child
    </Box>
    <Box backgroundColor="destructive" {...args}>
      Child
    </Box>
    <Box backgroundColor="destructive" {...args}>
      Child
    </Box>
    <Box backgroundColor="destructive" {...args}>
      Child
    </Box>
    <Box backgroundColor="destructive" {...args}>
      Child
    </Box>
    <Box backgroundColor="destructive" {...args}>
      Child
    </Box>
    <Box backgroundColor="destructive" {...args}>
      Child
    </Box>
  </Box>
);

export const DifferentWidths = TemplateWidths.bind({});
