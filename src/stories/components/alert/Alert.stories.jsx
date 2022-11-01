import {
  BsExclamationTriangleFill,
  BsExclamationSquareFill,
  BsCheckCircleFill,
  BsHeart,
  BsInfoCircle,
} from "react-icons/bs";

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
  children: "Description here",
  auxButtonContent: "Hint here",
  status: "neutral",
  visible: true,
  mainButtonContent: "OK",
  icon: <BsInfoCircle />,
  showCloseButton: true,
};

export const Primary = Template.bind({});
Primary.args = {
  title: "Title here",
  children: "Description here",
  auxButtonContent: "Hint here",
  status: "primary",
  visible: true,
  mainButtonContent: "OK",
  icon: <BsInfoCircle />,
  showCloseButton: true,
};

export const Success = Template.bind({});
Success.args = {
  title: "Title here",
  children: "Description here",
  auxButtonContent: "Hint here",
  status: "success",
  visible: true,
  mainButtonContent: "OK",
  icon: <BsCheckCircleFill />,
  showCloseButton: true,
};

export const Warning = Template.bind({});
Warning.args = {
  title: "Title here",
  children: "Description here",
  auxButtonContent: "Hint here",
  status: "warning",
  visible: true,
  mainButtonContent: "OK",
  icon: <BsExclamationSquareFill />,
  showCloseButton: true,
};

export const Error = Template.bind({});
Error.args = {
  title: "Title here",
  children: "Description here",
  auxButtonContent: "Hint here",
  status: "error",
  visible: true,
  mainButtonContent: "OK",
  icon: <BsExclamationTriangleFill />,
  showCloseButton: true,
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
  children: "Description here",
  auxButtonContent: "Hint",
  visible: true,
  mainButtonContent: "OK",
  icon: <BsHeart />,
  showCloseButton: true,
};

const InteractiveTemplate = (args) => {
  const [eventTriggered, setEventTriggered] = useState("");

  return (
    <div>
      <Alert
        {...args}
        onMainButtonClick={() => setEventTriggered("mainButton got triggered")}
        onAuxButtonClick={() => setEventTriggered("auxButton got triggered")}
        onCloseRequested={() => setEventTriggered("close button got triggered")}
      />
      <span>{eventTriggered}</span>
    </div>
  );
};

export const InteractiveAlert = InteractiveTemplate.bind({});
InteractiveAlert.args = {
  title: "Title here",
  children: "Description here",
  auxButtonContent: "Hint here",
  status: "error",
  visible: true,
  mainButtonContent: "OK",
  icon: <BsExclamationTriangleFill />,
  showCloseButton: true,
};

export const TextOnly = Template.bind({});
TextOnly.args = {
  children: "Text only",
};
