import { ComponentMeta, Story } from "@storybook/react";
import React, { PropsWithChildren } from "react";

import { Text, TextProps } from "../../../../lib/components/Typography";
import {
  colorOptions,
  shadeOptions,
  weightOptions,
} from "../../../constants/options";

export default {
  title: "Foundations/Typography/Text",
  component: Text,
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
  children:
    "Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass.",
  color: "neutral",
  shade: "900",
  type: "paragraphMedium",
  weight: "normal",
  as: "p",
};

export const OverlineLarge = Template.bind({});
OverlineLarge.args = {
  children:
    "Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass.",
  color: "neutral",
  shade: "900",
  type: "overlineLarge",
  weight: "normal",
  as: "p",
};

export const OverlineMedium = Template.bind({});
OverlineMedium.args = {
  children:
    "Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass.",
  color: "neutral",
  shade: "900",
  type: "overlineMedium",
  weight: "normal",
  as: "p",
};

export const OverlineXSmall = Template.bind({});
OverlineXSmall.args = {
  children:
    "Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass.",
  color: "neutral",
  shade: "900",
  type: "overlineXSmall",
  weight: "normal",
  as: "p",
};

export const ParagraphLarge = Template.bind({});
ParagraphLarge.args = {
  children:
    "Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass.",
  color: "neutral",
  shade: "900",
  type: "paragraphLarge",
  weight: "normal",
  as: "p",
};

export const ParagraphMedium = Template.bind({});
ParagraphMedium.args = {
  children:
    "Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass.",
  color: "neutral",
  shade: "900",
  type: "paragraphMedium",
  weight: "normal",
  as: "p",
};

export const ParagraphSmall = Template.bind({});
ParagraphSmall.args = {
  children:
    "Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass.",
  color: "neutral",
  shade: "900",
  type: "paragraphSmall",
  weight: "normal",
  as: "p",
};

export const ParagraphXSmall = Template.bind({});
ParagraphXSmall.args = {
  children:
    "Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass.",
  color: "neutral",
  shade: "900",
  type: "paragraphXSmall",
  weight: "normal",
  as: "p",
};
