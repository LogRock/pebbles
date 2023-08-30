import React from "react";
import DateInput from "../../../../lib/components/DateInput/DateInput";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { BsAlarm } from "react-icons/bs";

export default {
  title: "Components/DateInput",
  component: DateInput,
} as ComponentMeta<typeof DateInput>;

const Template: ComponentStory<typeof DateInput> = (args) => (
  <LocalizationProvider dateAdapter={AdapterDateFns}>
    <DateInput {...args} />
  </LocalizationProvider>
);

export const Default = Template.bind({});
Default.args = {};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: "Date",
};

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  helper: "Helper text",
};

export const WithHelperIcon = Template.bind({});
WithHelperIcon.args = {
  helperIcon: <BsAlarm />,
  label: "email",
  helper: "something",
};

export const WithError = Template.bind({});
WithError.args = {
  label: "email",
  helper: "something",
  destructive: true,
};
