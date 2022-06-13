import React from "react";

import StatusTag from "../../../../lib/components/StatusTag";
import { ParagraphLarge } from "../../../../lib/components/Typography/Typography.styled";

export default {
  title: "Components/StatusTag/StatusNotification",
  component: StatusTag,
};

const Template = (args) => (
  <>
    <div style={{ height: "60px", display: "flex", alignItems: "center" }}>
      <ParagraphLarge> Sample Title </ParagraphLarge>
      <StatusTag variant="error" {...args} />
    </div>
    <div style={{ height: "60px", display: "flex", alignItems: "center" }}>
      <ParagraphLarge> Sample Title </ParagraphLarge>
      <StatusTag variant="warning" {...args} />
    </div>
    <div style={{ height: "60px", display: "flex", alignItems: "center" }}>
      <ParagraphLarge> Sample Title </ParagraphLarge>
      <StatusTag variant="success" {...args} />
    </div>
  </>
);

export const StatusNotification = Template.bind({});
StatusNotification.args = {
  size: "small",
  collapsed: true,
  children: "",
};

export const StatusNotificationLabeled = Template.bind({});
StatusNotificationLabeled.args = {
  size: "small",
  collapsed: true,
  children: "7",
  role: "notification",
};
