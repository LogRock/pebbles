import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import Box from "../../../../lib/components/Box";
import {
  colorOptions,
  shadeOptions,
  shadowOptions,
  spacingOptions,
} from "../../../constants/options";

const meta = {
  title: "Components/Box",
  component: Box,
  parameters: {
    layout: "centered",
  },
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
    borderColor: {
      control: {
        type: "select",
        options: colorOptions,
      },
    },
    borderShade: {
      control: {
        type: "select",
        options: shadeOptions,
      },
    },
    borderWidth: {
      control: {
        type: "select",
        options: spacingOptions,
      },
    },
  },
} as Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
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
  ),
};

export const DifferentWidths: Story = {
  args: {},
  render: (args) => (
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
  ),
};

export const GridMode: Story = {
  args: {
    display: "grid",
    gridColumns: "1fr 2fr 1fr",
    gridRows: "1fr 2fr",
    justify: "stretch",
    align: "stretch",
    colGap: "md",
    rowGap: "md",
  },
  render: (args) => (
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
  ),
};

export const CustomGrid: Story = {
  args: {},
  render: () => (
    <Box
      backgroundColor="white"
      colGap="md"
      rowGap="md"
      gridRows="1fr 2fr 1fr"
      gridColumns="1fr 2fr 1fr 1fr"
      display="grid"
      align="stretch"
    >
      <Box
        backgroundColor="destructive"
        gridArea="1 / 1 / 4 / 2"
        justify="center"
      >
        1 / 1 / 4 / 2
      </Box>
      <Box
        backgroundColor="destructive"
        gridArea="2 / 2 / -1 / -1"
        justify="center"
      >
        2 / 2 / -1 / -1
      </Box>
      <Box backgroundColor="destructive" justify="center">
        auto
      </Box>
      <Box backgroundColor="destructive" justify="center">
        auto
      </Box>
      <Box backgroundColor="destructive" justify="center">
        auto
      </Box>
    </Box>
  ),
};
