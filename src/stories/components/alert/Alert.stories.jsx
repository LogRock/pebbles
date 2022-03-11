import React from "react";
import AlertInline from "../../../../lib/components/Alert";

export default {
  title: "Components/Alert",
  component: AlertInline,
};

const Template = (args) => <AlertInline {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Title here",
  description: "Description here",
  hint: "Hint here",
  status: "neutral",
};

export const Primary = Template.bind({});
Primary.args = {
  title: "Title here",
  description: "Description here",
  hint: "Hint here",
  status: "primary",
};

export const Success = Template.bind({});
Success.args = {
  title: "Title here",
  description: "Description here",
  hint: "Hint here",
  status: "success",
};

export const Warning = Template.bind({});
Warning.args = {
  title: "Title here",
  description: "Description here",
  hint: "Hint here",
  status: "warning",
};

export const Error = Template.bind({});
Error.args = {
  title: "Title here",
  description: "Description here",
  hint: "Hint here",
  status: "error",
};
