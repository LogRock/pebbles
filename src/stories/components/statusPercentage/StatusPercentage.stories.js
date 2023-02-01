import React from "react";

import StatusPercentage from "../../../../lib/components/StatusPercentage";

export default {
  title: "Components/StatusPercentage",
  component: StatusPercentage,
};

const Template = (args) => <StatusPercentage {...args}></StatusPercentage>;

export const Basic = Template.bind({});
Basic.args = {
  percentage: 80,
  children: "80%",
};

export const Small = Template.bind({});
Small.args = {
  percentage: 50,
  size: "small",
  children: "1/2",
};

export const Medium = Template.bind({});
Medium.args = {
  percentage: 80,
  size: "medium",
  children: "80%",
};

export const Large = Template.bind({});
Large.args = {
  percentage: 67,
  size: "large",
  children: "2 of 3",
};

export const Success = Template.bind({});
Success.args = {
  percentage: 67,
  size: "large",
  children: "67%",
  variant: "success",
};

export const Destructive = Template.bind({});
Destructive.args = {
  percentage: 67,
  size: "large",
  children: "67%",
  variant: "destructive",
};

export const Primary = Template.bind({});
Primary.args = {
  percentage: 67,
  size: "large",
  children: "67%",
  variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  percentage: 67,
  size: "large",
  children: "67%",
  variant: "secondary",
};

export const UseChildren = Template.bind({});
UseChildren.args = {
  percentage: 20,
  size: "large",
  children: (
    <div style={{ display: "flex", alignItems: "center" }}>
      <h4>1</h4>
      <h6 style={{ padding: "0 4px" }}>/</h6>
      <h4>5</h4>
    </div>
  ),
};
