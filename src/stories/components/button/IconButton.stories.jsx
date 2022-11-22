import React from "react";

import Button from "../../../../lib/components/Button";

import { BsBricks } from "react-icons/bs";

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
  content: <BsBricks />,
};

export const SizeXSmall = Template.bind({});
SizeXSmall.args = {
  buttonSize: "xSmall",
  content: <BsBricks />,
};

export const SizeSmall = Template.bind({});
SizeSmall.args = {
  buttonSize: "small",
  content: <BsBricks />,
};

export const SizeMedium = Template.bind({});
SizeMedium.args = {
  buttonSize: "medium",
  content: <BsBricks />,
};

export const SizeLarge = Template.bind({});
SizeLarge.args = {
  buttonSize: "large",
  content: <BsBricks />,
};

export const VariantPrimary = Template.bind({});
VariantPrimary.args = {
  content: <BsBricks />,
  variant: "primary",
};

export const VariantDestructive = Template.bind({});
VariantDestructive.args = {
  content: <BsBricks />,
  variant: "destructive",
};

export const VariantDisabled = Template.bind({});
VariantDisabled.args = {
  disabled: true,
  content: <BsBricks />,
};

export const StylePrimary = Template.bind({});
StylePrimary.args = {
  content: <BsBricks />,
  buttonStyle: "primary",
};

export const StyleSecondary = Template.bind({});
StyleSecondary.args = {
  content: <BsBricks />,
  buttonStyle: "secondary",
};

export const StyleTertiary = Template.bind({});
StyleTertiary.args = {
  content: <BsBricks />,
  buttonStyle: "tertiary",
};

export const StyleOutlined = Template.bind({});
StyleOutlined.args = {
  content: <BsBricks />,
  buttonStyle: "outlined",
};
