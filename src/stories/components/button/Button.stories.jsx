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
      options: ["primary", "destructive", "rounded"],
      control: { type: "radio" },
    },
    buttonStyle: {
      options: ["primary", "secondary", "tertiary", "outlined"],
      control: { type: "radio" },
    },
  },
};
const TwoButtonsTemplate = (args) => (
  <>
    <Button {...args}>{args.content}</Button>
    <div style={{ height: "30px" }}></div>
    <Button variant="rounded" {...args}>
      {args.content}
    </Button>
  </>
);

const Template = (args) => <Button {...args}>{args.content}</Button>;

export const Default = TwoButtonsTemplate.bind({});
Default.args = {
  content: "Default Button",
};

export const SizeXSmall = TwoButtonsTemplate.bind({});
SizeXSmall.args = {
  buttonSize: "xSmall",
  content: "X Small Button",
};

export const SizeSmall = TwoButtonsTemplate.bind({});
SizeSmall.args = {
  buttonSize: "small",
  content: "Small Button",
};

export const SizeMedium = TwoButtonsTemplate.bind({});
SizeMedium.args = {
  buttonSize: "medium",
  content: "Medium Button",
};

export const SizeLarge = TwoButtonsTemplate.bind({});
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

export const VariantRounded = Template.bind({});
VariantRounded.args = {
  content: "Rounded Button",
  variant: "rounded",
};

export const VariantDisabled = Template.bind({});
VariantDisabled.args = {
  disabled: true,
  content: "Disabled Button",
};

export const StylePrimary = TwoButtonsTemplate.bind({});
StylePrimary.args = {
  content: "Primary Button",
  buttonStyle: "primary",
};

export const StyleSecondary = TwoButtonsTemplate.bind({});
StyleSecondary.args = {
  content: "Secondary Button",
  buttonStyle: "secondary",
};

export const StyleTertiary = TwoButtonsTemplate.bind({});
StyleTertiary.args = {
  content: "Tertiary Button",
  buttonStyle: "tertiary",
};

export const StyleOutlined = TwoButtonsTemplate.bind({});
StyleOutlined.args = {
  content: "Outlined Button",
  buttonStyle: "outlined",
};

export const CustomColors = TwoButtonsTemplate.bind({});
CustomColors.args = {
  content: "Custom Colors",
  color: "neutral",
  shade: "200",
  textColor: "success",
  textShade: "900",
};
