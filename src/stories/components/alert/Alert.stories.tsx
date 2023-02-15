import React, { ComponentProps } from "react";
import { ComponentMeta, Story } from "@storybook/react";
import {
  BsExclamationSquareFill,
  BsCheckCircleFill,
  BsHeart,
} from "react-icons/bs";

import Alert from "../../../../lib/components/Alert";
import { colorOptions } from "../../../constants/options";

export default {
  title: "Components/Alert",
  component: Alert,
  argTypes: {
    status: {
      control: {
        type: "select",
        options: colorOptions,
      },
    },
  },
} as ComponentMeta<typeof Alert>;

const Template: Story<ComponentProps<typeof Alert>> = (args) => (
  <Alert {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "Look, I was gonna go easy on you not to hurt your feelings",
  icon: <BsCheckCircleFill />,
  primaryButtonContents: "No Icon",
  secondaryButtonContents: "No Icon",
};

export const Primary = Template.bind({});
Primary.args = {
  children: "But I'm only going to get this one chance",
  status: "primary",
  icon: "Icon Can Be Anything Renderable",
  primaryButtonContents: "Start Icon",
  primaryButtonIconStart: <BsHeart />,
  secondaryButtonContents: "Start Icon",
  secondaryButtonIconStart: <BsHeart />,
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "But I'm only going to get this one chance",
  status: "secondary",
  icon: "Icon Can Be Anything Renderable",
  primaryButtonContents: "End Icon",
  primaryButtonIconEnd: <BsHeart />,
  secondaryButtonContents: "End Icon",
  secondaryButtonIconEnd: <BsHeart />,
};

export const Neutral = Template.bind({});
Neutral.args = {
  children: "Something's wrong, I can feel it",
  status: "neutral",
  icon: "😉",
  primaryButtonContents: "Dual Icons",
  primaryButtonIconStart: <BsHeart />,
  primaryButtonIconEnd: <BsHeart />,
  secondaryButtonContents: "Dual Icons",
  secondaryButtonIconStart: <BsHeart />,
  secondaryButtonIconEnd: <BsHeart />,
};

export const Success = Template.bind({});
Success.args = {
  children: "Something's wrong, I can feel it",
  status: "success",
  icon: "😉",
  primaryButtonContents: "OK",
  secondaryButtonContents: "Nice",
};

export const Warning = Template.bind({});
Warning.args = {
  children:
    "Just a feeling I've got, like something's about to happen, but I don't know what",
  status: "warning",
  icon: <img src="https://placekitten.com/80/80" />,
  primaryButtonContents: "Damn",
  secondaryButtonContents: "Oops",
};

export const Destructive = Template.bind({});
Destructive.args = {
  children:
    "If that means what I think it means, we're in trouble, big trouble",
  status: "destructive",
  icon: <BsExclamationSquareFill />,
  primaryButtonContents: "NOK",
  secondaryButtonContents: "Bad",
};

export const White = Template.bind({});
White.args = {
  children: "And if he is as bananas as you say, I'm not taking any chances",
  status: "white",
  icon: "🅱️",
  primaryButtonContents: "White",
  secondaryButtonContents: "White",
};

export const Black = Template.bind({});
Black.args = {
  children: "I'm beginnin' to feel like a Rap God, Rap God",
  status: "black",
  icon: "X",
  primaryButtonContents: "Black",
  secondaryButtonContents: "Black",
};
