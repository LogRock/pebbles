import type { Meta, StoryObj } from "@storybook/react";
import React, { PropsWithChildren } from "react";

import { Title, TitleProps } from "../../../../lib/components/Typography";
import {
  colorOptions,
  shadeOptions,
  weightOptions,
} from "../../../constants/options";

const meta = {
  title: "Foundations/Typography/Title",
  component: Title,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    color: {
      options: colorOptions,
      control: {
        type: "select",
      },
    },
    shade: {
      options: shadeOptions,
      control: {
        type: "select",
      },
    },
    type: {
      options: [
        "displayLarge",
        "displaySmall",
        "headingH1",
        "headingH2",
        "headingH3",
        "headingH4",
        "headingH5",
        "headingH6",
      ],
      control: {
        type: "select",
      },
    },
    weight: {
      options: weightOptions,
      control: {
        type: "select",
      },
    },
    as: {
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "span", "div"],
      control: {
        type: "select",
      },
    },
  },
} as Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: PropsWithChildren<TitleProps>) => (
  <>
    {args.type} {args.color}-{args.shade} {args.weight}; rendered inside &lt;
    {args.as}&gt;
    <Title {...args} />
  </>
);

export const Default: Story = {
  args: {
    children: "Title",
    color: "neutral",
    shade: "900",
    type: "headingH1",
    weight: "normal",
    as: "h1",
  },
  render: Template,
};

export const DisplayLarge: Story = {
  args: {
    children: "Title",
    color: "neutral",
    shade: "900",
    type: "displayLarge",
    weight: "normal",
    as: "h1",
  },
  render: Template,
};

export const DisplaySmall: Story = {
  args: {
    children: "Title",
    color: "neutral",
    shade: "900",
    type: "displaySmall",
    weight: "normal",
    as: "h1",
  },
  render: Template,
};

export const HeadingH1: Story = {
  args: {
    children: "Title",
    color: "neutral",
    shade: "900",
    type: "headingH1",
    weight: "normal",
    as: "h1",
  },
  render: Template,
};

export const HeadingH2: Story = {
  args: {
    children: "Title",
    color: "neutral",
    shade: "900",
    type: "headingH2",
    weight: "normal",
    as: "h2",
  },
  render: Template,
};

export const HeadingH3: Story = {
  args: {
    children: "Title",
    color: "neutral",
    shade: "900",
    type: "headingH3",
    weight: "normal",
    as: "h3",
  },
  render: Template,
};

export const HeadingH4: Story = {
  args: {
    children: "Title",
    color: "neutral",
    shade: "900",
    type: "headingH4",
    weight: "normal",
    as: "h4",
  },
  render: Template,
};

export const HeadingH5: Story = {
  args: {
    children: "Title",
    color: "neutral",
    shade: "900",
    type: "headingH5",
    weight: "normal",
    as: "h5",
  },
  render: Template,
};

export const HeadingH6: Story = {
  args: {
    children: "Title",
    color: "neutral",
    shade: "900",
    type: "headingH6",
    weight: "normal",
    as: "h6",
  },
  render: Template,
};
