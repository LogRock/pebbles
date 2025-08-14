import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import CheckBox from "../../../../lib/components/CheckBox";
import { ParagraphMedium } from "../../../../lib/components/Typography/Typography.styled";

const meta = {
  title: "Components/CheckBox",
  component: CheckBox,
  parameters: {
    layout: "centered",
  },
} as Meta<typeof CheckBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "This goes as children, render anything you want",
  },
  render: (args) => (
    <CheckBox {...args}>{args.children}</CheckBox>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "This checkbox is disabled",
  },
  render: (args) => (
    <CheckBox {...args}>{args.children}</CheckBox>
  ),
};

export const Controlled: Story = {
  args: {
    checked: true,
    children: (
      <a href="https://www.youtube.com/watch?v=otCpCn0l4Wo">
        Can&apos;t touch this (well, the link you can, but not the checkbox)
      </a>
    ),
  },
  render: (args) => (
    <CheckBox {...args}>{args.children}</CheckBox>
  ),
};

export const MultipleChildren: Story = {
  args: {
    children: (
      <div>
        <ParagraphMedium weight="bolder">Ideally</ParagraphMedium>
        <ParagraphMedium>
          ParagraphMedium fits well here, and you can use multiple
        </ParagraphMedium>
        <ParagraphMedium weight="bold">Maybe also an image?</ParagraphMedium>
        <ParagraphMedium>
          <img src="https://placekitten.com/200/200" />
        </ParagraphMedium>
        <ParagraphMedium>I think that looks great.</ParagraphMedium>
      </div>
    ),
  },
  render: (args) => (
    <CheckBox {...args}>{args.children}</CheckBox>
  ),
};

export const Spaced: Story = {
  args: {
    spaced: true,
    children: "These have some extra head space",
  },
  render: (args) => (
    <div style={{ boxSizing: "border-box" }}>
      <CheckBox {...args}>{args.children}</CheckBox>
      <CheckBox {...args}>{args.children}</CheckBox>
      <CheckBox {...args}>{args.children}</CheckBox>
      <CheckBox {...args}>{args.children}</CheckBox>
    </div>
  ),
};
