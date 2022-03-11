import React from "react";
import Alert from "../../../../lib/components/Alert";

export default {
  title: "Components/Alert",
  component: Alert,
};

const Template = (args) => <Alert {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Title here",
  description: "Description here",
  hint: "Hint here",
  status: "neutral",
  visible: true,
};

export const Primary = Template.bind({});
Primary.args = {
  title: "Title here",
  description: "Description here",
  hint: "Hint here",
  status: "primary",
  visible: true,
};

export const Success = Template.bind({});
Success.args = {
  title: "Title here",
  description: "Description here",
  hint: "Hint here",
  status: "success",
  visible: true,
};

export const Warning = Template.bind({});
Warning.args = {
  title: "Title here",
  description: "Description here",
  hint: "Hint here",
  status: "warning",
  visible: true,
};

export const Error = Template.bind({});
Error.args = {
  title: "Title here",
  description: "Description here",
  hint: "Hint here",
  status: "error",
  visible: true,
};
