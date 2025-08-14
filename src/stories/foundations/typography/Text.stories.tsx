import { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";

import { Text } from "../../../../lib/components/Typography";
import {
  colorOptions,
  shadeOptions,
  weightOptions,
} from "../../../constants/options";

const meta = {
  title: "Foundations/Typography/Text",
  component: Text,
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
        "paragraphLarge",
        "paragraphMedium",
        "paragraphSmall",
        "paragraphXSmall",
        "overlineLarge",
        "overlineMedium",
        "overlineXSmall",
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
      options: ["p", "span", "div"],
      control: {
        type: "select",
      },
    },
  },
} as Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children:
      "Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass.",
    color: "neutral",
    shade: "900",
    type: "paragraphMedium",
    weight: "normal",
    as: "p",
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render: (args: any) => (
    <>
      {args.type} {args.color}-{args.shade} {args.weight}; rendered inside &lt;
      {args.as}&gt;
      <Text {...args} />
    </>
  ),
};

export const OverlineLarge: Story = {
  args: {
    children:
      "Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass.",
    color: "neutral",
    shade: "900",
    type: "overlineLarge",
    weight: "normal",
    as: "p",
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render: (args: any) => (
    <>
      {args.type} {args.color}-{args.shade} {args.weight}; rendered inside &lt;
      {args.as}&gt;
      <Text {...args} />
    </>
  ),
};

export const OverlineMedium: Story = {
  args: {
    children:
      "Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass.",
    color: "neutral",
    shade: "900",
    type: "overlineMedium",
    weight: "normal",
    as: "p",
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render: (args: any) => (
    <>
      {args.type} {args.color}-{args.shade} {args.weight}; rendered inside &lt;
      {args.as}&gt;
      <Text {...args} />
    </>
  ),
};

export const OverlineXSmall: Story = {
  args: {
    children:
      "Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass.",
    color: "neutral",
    shade: "900",
    type: "overlineXSmall",
    weight: "normal",
    as: "p",
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render: (args: any) => (
    <>
      {args.type} {args.color}-{args.shade} {args.weight}; rendered inside &lt;
      {args.as}&gt;
      <Text {...args} />
    </>
  ),
};

export const ParagraphLarge: Story = {
  args: {
    children:
      "Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass.",
    color: "neutral",
    shade: "900",
    type: "paragraphLarge",
    weight: "normal",
    as: "p",
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render: (args: any) => (
    <>
      {args.type} {args.color}-{args.shade} {args.weight}; rendered inside &lt;
      {args.as}&gt;
      <Text {...args} />
    </>
  ),
};

export const ParagraphMedium: Story = {
  args: {
    children:
      "Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass.",
    color: "neutral",
    shade: "900",
    type: "paragraphMedium",
    weight: "normal",
    as: "p",
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render: (args: any) => (
    <>
      {args.type} {args.color}-{args.shade} {args.weight}; rendered inside &lt;
      {args.as}&gt;
      <Text {...args} />
    </>
  ),
};

export const ParagraphSmall: Story = {
  args: {
    children:
      "Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass.",
    color: "neutral",
    shade: "900",
    type: "paragraphSmall",
    weight: "normal",
    as: "p",
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render: (args: any) => (
    <>
      {args.type} {args.color}-{args.shade} {args.weight}; rendered inside &lt;
      {args.as}&gt;
      <Text {...args} />
    </>
  ),
};

export const ParagraphXSmall: Story = {
  args: {
    children:
      "Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass.",
    color: "neutral",
    shade: "900",
    type: "paragraphXSmall",
    weight: "normal",
    as: "p",
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render: (args: any) => (
    <>
      {args.type} {args.color}-{args.shade} {args.weight}; rendered inside &lt;
      {args.as}&gt;
      <Text {...args} />
    </>
  ),
};
