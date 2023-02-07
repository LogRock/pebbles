import { ComponentMeta, Story } from "@storybook/react";
import React, { PropsWithChildren } from "react";

import { Title, TitleProps } from "../../../../lib/components/Typography";
import {
  colorOptions,
  shadeOptions,
  weightOptions,
} from "../../../constants/options";

export default {
  title: "Foundations/Typography/Title",
  component: Title,
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
} as ComponentMeta<typeof Title>;

const Template: Story<PropsWithChildren<TitleProps>> = (args) => (
  <>
    {args.type} {args.color}-{args.shade} {args.weight}; rendered inside &lt;
    {args.as}&gt;
    <Title {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  children: "Title",
  color: "neutral",
  shade: "900",
  type: "headingH1",
  weight: "normal",
  as: "h1",
};

export const DisplayLarge = Template.bind({});
DisplayLarge.args = {
  children: "Title",
  color: "neutral",
  shade: "900",
  type: "displayLarge",
  weight: "normal",
  as: "h1",
};

export const DisplaySmall = Template.bind({});
DisplaySmall.args = {
  children: "Title",
  color: "neutral",
  shade: "900",
  type: "displaySmall",
  weight: "normal",
  as: "h1",
};

export const HeadingH1 = Template.bind({});
HeadingH1.args = {
  children: "Title",
  color: "neutral",
  shade: "900",
  type: "headingH1",
  weight: "normal",
  as: "h1",
};

export const HeadingH2 = Template.bind({});
HeadingH2.args = {
  children: "Title",
  color: "neutral",
  shade: "900",
  type: "headingH2",
  weight: "normal",
  as: "h2",
};

export const HeadingH3 = Template.bind({});
HeadingH3.args = {
  children: "Title",
  color: "neutral",
  shade: "900",
  type: "headingH3",
  weight: "normal",
  as: "h3",
};

export const HeadingH4 = Template.bind({});
HeadingH4.args = {
  children: "Title",
  color: "neutral",
  shade: "900",
  type: "headingH4",
  weight: "normal",
  as: "h4",
};

export const HeadingH5 = Template.bind({});
HeadingH5.args = {
  children: "Title",
  color: "neutral",
  shade: "900",
  type: "headingH5",
  weight: "normal",
  as: "h5",
};

export const HeadingH6 = Template.bind({});
HeadingH6.args = {
  children: "Title",
  color: "neutral",
  shade: "900",
  type: "headingH6",
  weight: "normal",
  as: "h6",
};
