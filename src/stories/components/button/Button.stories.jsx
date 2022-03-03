import React from "react";
import Button from "../../../../lib/components/Button";

export default {
  title: "Components/Buttons/Regular",
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

const Template = (args) => <Button {...args}>{args.content}</Button>;

export const Default = Template.bind({});
Default.args = {
  content: "Default Button",
};

export const SizeXSmall = Template.bind({});
SizeXSmall.args = {
  buttonSize: "xSmall",
  content: "X Small Button",
};

export const SizeSmall = Template.bind({});
SizeSmall.args = {
  buttonSize: "small",
  content: "Small Button",
};

export const SizeMedium = Template.bind({});
SizeMedium.args = {
  buttonSize: "medium",
  content: "Medium Button",
};

export const SizeLarge = Template.bind({});
SizeLarge.args = {
  buttonSize: "large",
  content: "Large Button",
};

export const VariantPrimary = Template.bind({});
VariantPrimary.args = {
  content: "Primary Button",
  variant: "primary",
};

export const VariantDestructive = Template.bind({});
VariantDestructive.args = {
  content: "Destructive Button",
  variant: "destructive",
};

export const VariantDisabled = Template.bind({});
VariantDisabled.args = {
  disabled: true,
  content: "Disabled Button",
};

export const StylePrimary = Template.bind({});
StylePrimary.args = {
  content: "Primary Button",
  buttonStyle: "primary",
};

export const StyleSecondary = Template.bind({});
StyleSecondary.args = {
  content: "Secondary Button",
  buttonStyle: "secondary",
};

export const StyleTertiary = Template.bind({});
StyleTertiary.args = {
  content: "Tertiary Button",
  buttonStyle: "tertiary",
};

export const StyleOutlined = Template.bind({});
StyleOutlined.args = {
  content: "Outlined Button",
  buttonStyle: "outlined",
};
