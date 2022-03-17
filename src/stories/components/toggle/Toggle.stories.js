import React from "react";
import Toggle from "../../../../lib/components/Toggle";
import { ParagraphMedium } from "../../../../lib/components/Typography/Typography.styled";

export default {
  title: "Components/Toggle",
  component: Toggle,
};

const Template = (args) => <Toggle {...args}>{args.label}</Toggle>;

export const Default = Template.bind({});
Default.args = {
  label: "This goes as children, render anything you want",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: "This is currently disabled. Come back later",
};

export const Controlled = Template.bind({});
Controlled.args = {
  checked: true,
  label: (
    <a href="https://www.youtube.com/watch?v=otCpCn0l4Wo">
      Can&apos;t touch this (well, the link you can, but not the checkbox)
    </a>
  ),
};

export const MultipleChildren = Template.bind({});
MultipleChildren.args = {
  label: (
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
  ),
};

export const MultipleChildrenDoneWrong = Template.bind({});
MultipleChildrenDoneWrong.args = {
  label: (
    <>
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
    </>
  ),
};

const MultiTemplate = (args) => (
  <>
    <Toggle {...args}>{args.label}</Toggle>
    <Toggle {...args}>{args.label}</Toggle>
    <Toggle {...args}>{args.label}</Toggle>
    <Toggle {...args}>{args.label}</Toggle>
  </>
);

export const Spaced = MultiTemplate.bind({});
Spaced.args = {
  spaced: true,
  label: "These have some extra head space",
};
