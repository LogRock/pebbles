import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import {
  BsExclamationSquareFill,
  BsCheckCircleFill,
  BsHeart,
} from "react-icons/bs";

import Alert from "../../../../lib/components/Alert";
import { colorOptions } from "../../../constants/options";

const meta = {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    status: {
      control: {
        type: "select",
        options: colorOptions,
      },
    },
  },
} as Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: any) => <Alert {...args} />;

export const Default: Story = {
  args: {
    children: "Look, I was gonna go easy on you not to hurt your feelings",
    icon: <BsCheckCircleFill />,
    primaryButtonContents: "No Icon",
    secondaryButtonContents: "No Icon",
  },
  render: Template,
};

export const Primary: Story = {
  args: {
    children: "But I'm only going to get this one chance",
    status: "primary",
    icon: "Icon Can Be Anything Renderable",
    primaryButtonContents: "Start Icon",
    primaryButtonIconStart: <BsHeart />,
    secondaryButtonContents: "Start Icon",
    secondaryButtonIconStart: <BsHeart />,
  },
  render: Template,
};

export const Secondary: Story = {
  args: {
    children: "But I'm only going to get this one chance",
    status: "secondary",
    icon: "Icon Can Be Anything Renderable",
    primaryButtonContents: "End Icon",
    primaryButtonIconEnd: <BsHeart />,
    secondaryButtonContents: "End Icon",
    secondaryButtonIconEnd: <BsHeart />,
  },
  render: Template,
};

export const Neutral: Story = {
  args: {
    children: "Something's wrong, I can feel it",
    status: "neutral",
    icon: "😉",
    primaryButtonContents: "Dual Icons",
    primaryButtonIconStart: <BsHeart />,
    primaryButtonIconEnd: <BsHeart />,
    secondaryButtonContents: "Dual Icons",
    secondaryButtonIconStart: <BsHeart />,
    secondaryButtonIconEnd: <BsHeart />,
  },
  render: Template,
};

export const Success: Story = {
  args: {
    children: "Something's wrong, I can feel it",
    status: "success",
    icon: "😉",
    primaryButtonContents: "OK",
    secondaryButtonContents: "Nice",
  },
  render: Template,
};

export const Warning: Story = {
  args: {
    children:
      "Just a feeling I've got, like something's about to happen, but I don't know what",
    status: "warning",
    icon: <img src="https://placekitten.com/80/80" />,
    primaryButtonContents: "Damn",
    secondaryButtonContents: "Oops",
  },
  render: Template,
};

export const Destructive: Story = {
  args: {
    children:
      "If that means what I think it means, we're in trouble, big trouble",
    status: "destructive",
    icon: <BsExclamationSquareFill />,
    primaryButtonContents: "NOK",
    secondaryButtonContents: "Bad",
  },
  render: Template,
};

export const White: Story = {
  args: {
    children: "And if he is as bananas as you say, I'm not taking any chances",
    status: "white",
    icon: "🅱️",
    primaryButtonContents: "White",
    secondaryButtonContents: "White",
  },
  render: Template,
};

export const Black: Story = {
  args: {
    children: "I'm beginnin' to feel like a Rap God, Rap God",
    status: "black",
    icon: "X",
    primaryButtonContents: "Black",
    secondaryButtonContents: "Black",
  },
  render: Template,
};

export const Custom: Story = {
  args: {
    children: "You can override everything with Box props",
    icon: <BsCheckCircleFill />,
    primaryButtonContents: "Black",
    secondaryButtonContents: "Black",
    colGap: "huge",
    borderRadius: "xxxhuge",
    backgroundColor: "success",
    backgroundShade: "300",
    borderColor: "destructive",
    borderShade: "500",
    borderWidth: "xxbig",
    padding: "huge",
  },
  render: Template,
};
