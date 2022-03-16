import React, { useState } from "react";
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
  labelButton: "OK",
};

export const Primary = Template.bind({});
Primary.args = {
  title: "Title here",
  description: "Description here",
  hint: "Hint here",
  status: "primary",
  visible: true,
  labelButton: "OK",
};

export const Success = Template.bind({});
Success.args = {
  title: "Title here",
  description: "Description here",
  hint: "Hint here",
  status: "success",
  visible: true,
  labelButton: "OK",
};

export const Warning = Template.bind({});
Warning.args = {
  title: "Title here",
  description: "Description here",
  hint: "Hint here",
  status: "warning",
  visible: true,
  labelButton: "OK",
};

export const Error = Template.bind({});
Error.args = {
  title: "Title here",
  description: "Description here",
  hint: "Hint here",
  status: "error",
  visible: true,
  labelButton: "OK",
};

const MultiStickyTemplate = (args) => (
  <>
    <Alert status="primary" sticky {...args} />
    <Alert status="neutral" sticky {...args} />
    <Alert status="success" sticky {...args} />
    <Alert status="warning" sticky {...args} />
    <Alert status="error" sticky {...args} />
  </>
);

export const MultiSticky = MultiStickyTemplate.bind({});
MultiSticky.args = {
  description: "Description here",
  hint: "Hint",
  visible: true,
  labelButton: "OK",
};

const InteractiveTemplate = (args) => {
  const [eventTriggered, setEventTriggered] = useState("");

  return (
    <div>
      <Alert
        {...args}
        onButtonClick={() => setEventTriggered("button got triggered")}
        onHintClick={() => setEventTriggered("hint got triggered")}
      />
      <span>{eventTriggered}</span>
    </div>
  );
};

export const InteractiveAlert = InteractiveTemplate.bind({});
InteractiveAlert.args = {
  title: "Title here",
  description: "Description here",
  hint: "Hint here",
  status: "error",
  visible: true,
  labelButton: "OK",
};
