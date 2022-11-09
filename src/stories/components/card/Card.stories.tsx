import React, { PropsWithChildren } from "react";
import Card2 from "../../../../lib/components/Card2";
import { ComponentMeta, Story } from "@storybook/react";
import { CardProps } from "../../../../lib/components/Card2/Card";

export default {
  title: "components/Card",
  component: Card2,
} as ComponentMeta<typeof Card2>;

const Template: Story<PropsWithChildren<CardProps>> = (args) => (
  <Card2 {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "Some content",
};

export const HugePadding = Template.bind({});
HugePadding.args = {
  padding: "huge",
  children: "Some content",
};

export const UpXXLargeShadow = Template.bind({});
UpXXLargeShadow.args = {
  children: "Some content",
  shadow: "upXxLarge",
};

export const LgRadius = Template.bind({});
LgRadius.args = {
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
};

export const Image = Template.bind({});
Image.args = {
  children: <img src="https://placekitten.com/200/200" />,
};
