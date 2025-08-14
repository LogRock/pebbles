import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Toggle from "../../../../lib/components/Toggle";
import { ParagraphMedium } from "../../../../lib/components/Typography/Typography.styled";

const meta = {
  title: "Components/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    checked: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    spaced: {
      control: { type: "boolean" },
    },
  },
} as Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: any) => <Toggle {...args}>{args.label}</Toggle>;

export const Default: Story = {
  args: {
    label: "This goes as children, render anything you want",
  },
  render: Template,
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: "This is currently disabled. Come back later",
  },
  render: Template,
};

export const Controlled: Story = {
  args: {
    checked: true,
  },
  render: (args) => (
    <Toggle {...args}>
      <a href="https://www.youtube.com/watch?v=otCpCn0l4Wo">
        Can&apos;t touch this (well, the link you can, but not the checkbox)
      </a>
    </Toggle>
  ),
};

export const MultipleChildren: Story = {
  render: (args) => (
    <Toggle {...args}>
      <div>
        <ParagraphMedium weight="bolder">Ideally</ParagraphMedium>
        <ParagraphMedium>
          ParagraphMedium fits well here, and you can use multiple
        </ParagraphMedium>
        <ParagraphMedium weight="bold">
          But all of these paragraphs need to be inside a div.
        </ParagraphMedium>
        <ParagraphMedium>
          Because the checkbox uses flex row reverse
        </ParagraphMedium>
        <ParagraphMedium>Check next story to see what I mean</ParagraphMedium>
      </div>
    </Toggle>
  ),
};

export const MultipleChildrenDoneWrong: Story = {
  render: (args) => (
    <Toggle {...args}>
      <ParagraphMedium weight="bolder">This looks weird</ParagraphMedium>
      <ParagraphMedium>
        The component is styled with flex row reverse
      </ParagraphMedium>
      <ParagraphMedium weight="bolder">
        Flex row reverse is needed to make the custom checkbox work
      </ParagraphMedium>
      <ParagraphMedium>
        So all these children show in the reverse order they appear in the
        document
      </ParagraphMedium>
      <ParagraphMedium weight="bolder">
        And are all in the same row
      </ParagraphMedium>
    </Toggle>
  ),
};

export const Spaced: Story = {
  args: {
    spaced: true,
    label: "These have some extra head space",
  },
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <Toggle {...args}>{args.label}</Toggle>
      <Toggle {...args}>{args.label}</Toggle>
      <Toggle {...args}>{args.label}</Toggle>
      <Toggle {...args}>{args.label}</Toggle>
    </div>
  ),
};
