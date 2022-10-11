/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { InputBox } from "../../../../lib/components/InputBox";
import Form from "@rjsf/core";
import { mdiCalendar } from "@mdi/js";
import { Icon } from "@mdi/react";

export default {
  title: "Components/InputBox/Date",
  component: InputBox,
  argTypes: {
    disabled: {
      defautValue: false,
      control: { type: "boolean" },
    },
  },
};

const InteractiveDateInputTemplate = (args) => {
  const [myDate, setMyDate] = useState(new Date("05-20-2023 00:00:00"));
  return (
    <InputBox
      onChange={(date) => {
        setMyDate(date);
      }}
      selected={myDate}
      {...args}
    />
  );
};
export const DateInputBox = InteractiveDateInputTemplate.bind({});
DateInputBox.args = {
  type: "date",
  description: "Valid until:",
  hint: {
    content: "",
    icon: <Icon size={0.7} path={mdiCalendar} />,
  },
  id: "my-date",
  name: "my-date",
  status: "info",
  helper: "",
  placeholder: "input date",
};

const CustomDatePicker = function (props) {
  const [myDate, setMyDate] = useState();
  return (
    <InputBox
      type="date"
      data-testid={props.id}
      name={props.id}
      description={props.schema.title}
      onChange={(date) => {
        setMyDate(date);
        props.onChange(
          `${date.toLocaleDateString("en-us", {
            year: "numeric",
          })}-${date.toLocaleDateString("en-us", {
            month: "2-digit",
          })}-${date.toLocaleDateString("en-us", { day: "2-digit" })}`
        );
      }}
      selected={myDate}
      helper={props?.rawErrors?.length ? props.rawErrors.join("; ") : undefined}
      status={props?.rawErrors?.length ? "error" : "info"}
      disabled={props?.disabled || false}
    />
  );
};

const basaltSchema = {
  type: "object",
  required: ["issue_date"],
  properties: {
    issue_date: {
      title: "Date of Completion",
      type: "string",
      format: "date",
    },
    final_date: {
      title: "Date of End",
      type: "string",
      format: "date",
    },
    violation_description: {
      title: "Violation Description",
      type: "string",
    },
  },
};

const DynamicForm = () => {
  return (
    <Form
      schema={basaltSchema}
      widgets={{
        DateWidget: CustomDatePicker,
      }}
    />
  );
};

const RegularDateInputTemplate = () => {
  return <DynamicForm />;
};
export const RegularDateInputBox = RegularDateInputTemplate.bind({});
