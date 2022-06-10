import React from "react";

import StatusTag from "../../../../lib/components/StatusTag";
import { ParagraphLarge } from "../../../../lib/components/Typography/Typography.styled";

export default {
  title: "Components/StatusTag/StatusNotification",
  component: StatusTag,
};

const Template = (args) => (
  <>
    <div style={{ display: "flex" }}>
      <ParagraphLarge> Sample Title </ParagraphLarge>
      <StatusTag variant="error" {...args} />
    </div>
    <div style={{ display: "flex" }}>
      <ParagraphLarge> Sample Title </ParagraphLarge>
      <StatusTag variant="warning" {...args} />
    </div>
    <div style={{ display: "flex" }}>
      <ParagraphLarge> Sample Title </ParagraphLarge>
      <StatusTag variant="success" {...args} />
    </div>
  </>
);

export const StatusNotification = Template.bind({});
StatusNotification.args = {
  size: "micro",
  collapsed: true,
  children: "",
};

export const StatusNotificationLabeled = Template.bind({});
StatusNotificationLabeled.args = {
  size: "micro",
  collapsed: true,
  children: "7",
};
