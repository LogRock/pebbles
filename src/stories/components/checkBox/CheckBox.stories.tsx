import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import CheckBox from "../../../../lib/components/CheckBox";
import { ParagraphMedium } from "../../../../lib/components/Typography/Typography.styled";

export default {
  title: "Components/CheckBox",
  component: CheckBox,
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => (
  <CheckBox {...args}>{args.children}</CheckBox>
);

export const Default = Template.bind({});
Default.args = {
  children: "This goes as children, render anything you want",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: "This checkbox is disabled",
};

export const Controlled = Template.bind({});
Controlled.args = {
  checked: true,
  children: (
    <a href="https://www.youtube.com/watch?v=otCpCn0l4Wo">
      Can&apos;t touch this (well, the link you can, but not the checkbox)
    </a>
  ),
};

export const MultipleChildren = Template.bind({});
MultipleChildren.args = {
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
};

const MultiTemplate: ComponentStory<typeof CheckBox> = (args) => (
  <div style={{ boxSizing: "border-box" }}>
    <CheckBox {...args}>{args.children}</CheckBox>
    <CheckBox {...args}>{args.children}</CheckBox>
    <CheckBox {...args}>{args.children}</CheckBox>
    <CheckBox {...args}>{args.children}</CheckBox>
  </div>
);

export const Spaced = MultiTemplate.bind({});
Spaced.args = {
  spaced: true,
  children: "These have some extra head space",
};
