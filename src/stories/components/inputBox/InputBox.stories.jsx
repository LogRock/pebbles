import React, { useState } from "react";
import { InputBox } from "../../../../lib/components/InputBox";
import { mdiCardAccountDetailsOutline, mdiEmailOutline } from "@mdi/js";

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
    icon: mdiCardAccountDetailsOutline,
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
};

export const HintedInputBox = Template.bind({});
HintedInputBox.args = {
  description: "",
  hint: {
    content: "e-mail",
    icon: mdiEmailOutline,
  },
  status: "info",
  helper: "",
  placeholder: "no ads or spams.",
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
      icon: mdiEmailOutline,
    },
    status: "info",
    helper: "",
    placeholder: "no ads or spams.",
  },
};
