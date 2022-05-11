import React, { useState } from "react";
import { InputBox } from "../../../../lib/components/InputBox";
import {
  mdiAlert,
  mdiCalendar,
  mdiCardAccountDetailsOutline,
  mdiEmailOutline,
} from "@mdi/js";
import { Icon } from "@mdi/react";

export default {
  title: "Components/InputBox",
  component: InputBox,
  argTypes: {
    disabled: {
      defautValue: false,
      control: { type: "boolean" },
    },
  },
};

const Template = (args) => <InputBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  description: "Profile information",
  hint: {
    content: "username",
    icon: <Icon size={0.7} path={mdiCardAccountDetailsOutline} />,
  },
  status: "info",
  helper: "",
  placeholder: "provide your name here",
};

export const InputBoxError = Template.bind({});
InputBoxError.args = {
  description: "Vehicle Id Number",
  hint: {
    content: "",
    icon: null,
  },
  helper: "please provide the VIN number",
  status: "error",
  placeholder: "VIN",
  errorIcon: <Icon size={0.7} path={mdiAlert} />,
};

export const HintedInputBox = Template.bind({});
HintedInputBox.args = {
  description: "",
  hint: {
    content: "e-mail",
    icon: <Icon size={0.7} path={mdiEmailOutline} />,
  },
  status: "info",
  helper: "",
  placeholder: "no ads or spams.",
};

export const DisabledInputBox = Template.bind({});
DisabledInputBox.args = {
  description: "",
  hint: {
    content: "e-mail",
    icon: <Icon size={0.7} path={mdiEmailOutline} />,
  },
  status: "info",
  helper: "",
  placeholder: "this input is disabled, sorry",
  disabled: true,
  value: "Some value here",
};

export const DateInputBox = Template.bind({});
DateInputBox.args = {
  type: "date",
  description: "Valid until:",
  hint: {
    content: "",
    icon: <Icon size={0.7} path={mdiCalendar} />,
  },
  status: "info",
  helper: "",
  placeholder: "input date",
  onChange: (evt) => alert(evt),
  selected: new Date("05-20-2023 00:00:00"),
};

const InteractiveTemplate = (args) => {
  const [labelContent, setLabelContent] = useState("");
  const onChangeInputBox = (event) => {
    setLabelContent(event.target.value);
  };

  return (
    <div>
      <InputBox onChange={onChangeInputBox} {...args.inputBoxArgs} />
      <span>{labelContent}</span>
    </div>
  );
};

export const InteractiveInputBox = InteractiveTemplate.bind({});
InteractiveInputBox.args = {
  inputBoxArgs: {
    description: "",
    hint: {
      content: "e-mail",
      icon: <Icon size={0.7} path={mdiEmailOutline} />,
    },
    status: "info",
    helper: "",
    placeholder: "no ads or spams.",
  },
};

const MultiTemplate = (args) => (
  <>
    <InputBox {...args} />
    <InputBox {...args} />
    <InputBox {...args} />
    <InputBox {...args} />
  </>
);

export const Spaced = MultiTemplate.bind({});
Spaced.args = {
  spaced: true,
  description: "These have some extra head space",
};
