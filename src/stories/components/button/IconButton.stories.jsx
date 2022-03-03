import React from "react";


import Button from "../../../../lib/components/Button";

export default {
  title: "Components/Buttons/IconButtons",
  component: Button,
  argTypes: {
    content: {
      control: { type: "text" },
    },
    buttonSize: {
      options: ["xSmall", "small", "medium", "large"],
      control: { type: "radio" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    variant: {
      options: ["primary", "destructive"],
      control: { type: "radio" },
    },
    buttonStyle: {
      options: ["primary", "secondary", "tertiary", "outlined"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => (
  <Button {...args} iconOnly startIcon={args.content} />
);

export const Default = Template.bind({});
Default.args = {
  content: "A",
};

export const SizeXSmall = Template.bind({});
SizeXSmall.args = {
  buttonSize: "xSmall",
  content: "A",
};

export const SizeSmall = Template.bind({});
SizeSmall.args = {
  buttonSize: "small",
  content: "A",
};

export const SizeMedium = Template.bind({});
SizeMedium.args = {
  buttonSize: "medium",
  content: "A",
};

export const SizeLarge = Template.bind({});
SizeLarge.args = {
  buttonSize: "large",
  content: "A",
};

export const VariantPrimary = Template.bind({});
VariantPrimary.args = {
  content: "A",
  variant: "primary",
};

export const VariantDestructive = Template.bind({});
VariantDestructive.args = {
  content: "A",
  variant: "destructive",
};

export const VariantDisabled = Template.bind({});
VariantDisabled.args = {
  disabled: true,
  content: "A",
};

export const StylePrimary = Template.bind({});
StylePrimary.args = {
  content: "A",
  buttonStyle: "primary",
};

export const StyleSecondary = Template.bind({});
StyleSecondary.args = {
  content: "A",
  buttonStyle: "secondary",
};

export const StyleTertiary = Template.bind({});
StyleTertiary.args = {
  content: "A",
  buttonStyle: "tertiary",
};

export const StyleOutlined = Template.bind({});
StyleOutlined.args = {
  content: "A",
  buttonStyle: "outlined",
};
