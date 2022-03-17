import {
  mdiAlert,
  mdiAlertBox,
  mdiBrain,
  mdiCheckCircle,
  mdiHeart,
  mdiInformationOutline,
} from "@mdi/js";
import Icon from "@mdi/react";
import React, { useState } from "react";
import styled from "styled-components";
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
  icon: <Icon path={mdiInformationOutline} size={0.7} />,
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
  icon: <Icon path={mdiInformationOutline} size={0.7} />,
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
  icon: <Icon path={mdiCheckCircle} size={0.7} />,
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
  icon: <Icon path={mdiAlertBox} size={0.7} />,
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
  icon: <Icon path={mdiAlert} size={0.7} />,
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
  icon: <Icon path={mdiHeart} size={0.7} />,
  showCloseButton: true,
};

const InteractiveTemplate = (args) => {
  const [eventTriggered, setEventTriggered] = useState("");

  return (
    <div>
      <Alert
        {...args}
        onButtonClick={() => setEventTriggered("mainButton got triggered")}
        onHintClick={() => setEventTriggered("auxButton got triggered")}
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
  icon: <Icon path={mdiAlert} size={0.7} />,
  showCloseButton: true,
};

export const TextOnly = Template.bind({});
TextOnly.args = {
  children: "Text only",
};

const StyledAlert = styled(Alert)`
  margin: 200px;
  background: red;
`;
const CustomTemplate = (args) => <StyledAlert {...args} />;
export const CustomizedWithStyled = CustomTemplate.bind({});
CustomizedWithStyled.args = {
  children: "This is a styled(Alert) with some wacky styles added",
  icon: <Icon path={mdiBrain} size={0.7} />,
  showCloseButton: true,
};
