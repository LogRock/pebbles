import React, { PropsWithChildren } from "react";
import Card from "../../../../lib/components/Card";
import { ComponentMeta, Story } from "@storybook/react";
import { CardProps } from "../../../../lib/components/Card/Card";

export default {
  title: "components/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: Story<PropsWithChildren<CardProps>> = (args) => (
  <Card {...args} />
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
