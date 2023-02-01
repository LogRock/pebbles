import { ComponentMeta, Story } from "@storybook/react";
import React, { PropsWithChildren } from "react";

import { Text, TextProps } from "../../../../lib/components/Typography";

export default {
  title: "Foundations/Typography/Text",
  component: Text,
  argTypes: {
    color: {
      options: [
        "neutral",
        "primary",
        "secondary",
        "success",
        "warning",
        "destructive",
      ],
      control: {
        type: "select",
      },
    },
    shade: {
      options: [
        "50",
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700",
        "800",
        "900",
      ],
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
      options: ["normal", "bold", "bolder", "boldest"],
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
} as ComponentMeta<typeof Text>;

const Template: Story<PropsWithChildren<TextProps>> = (args) => (
  <>
    {args.type} {args.color}-{args.shade} {args.weight}; rendered inside &lt;
    {args.as}&gt;
    <Text {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  children: "Title",
  color: "neutral",
  shade: "900",
  type: "paragraphMedium",
  weight: "normal",
  as: "p",
};
