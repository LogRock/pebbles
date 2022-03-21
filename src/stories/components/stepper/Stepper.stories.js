import React from "react";
import Stepper from "../../../../lib/components/Stepper";

export default {
  title: "Components/Stepper",
  component: Stepper,
};

const Template = (args) => <Stepper {...args}>{args.label}</Stepper>;

export const Default = Template.bind({});

Default.args = {
  labels: ["Personal", "Company", "ELD", "Documents", "Finish"],
  finishedSteps: [1, 2, 3],
  curStep: 4,
};
