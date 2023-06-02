import React, { useState } from "react";
import { InputBox } from "../../../../lib/components/InputBox";

import {
  BsExclamationTriangleFill,
  BsFillPersonBadgeFill,
  BsEnvelope,
  BsLock,
  BsCardList,
} from "react-icons/bs";

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
    icon: <BsFillPersonBadgeFill />,
  },
  helper: "",
  placeholder: "provide your name here",
};

export const Destructive = Template.bind({});
Destructive.args = {
  description: "Vehicle Id Number",
  hint: {
    content: "Some Hint",
    icon: <BsEnvelope />,
  },
  helper: "please provide the VIN number",
  destructive: true,
  placeholder: "VIN",
  errorIcon: <BsExclamationTriangleFill />,
};

export const HintedInputBox = Template.bind({});
HintedInputBox.args = {
  description: "",
  hint: {
    content: "e-mail",
    icon: <BsEnvelope />,
  },
  helper: "",
  placeholder: "no ads or spams.",
};

export const DisabledInputBox = Template.bind({});
DisabledInputBox.args = {
  description: "",
  hint: {
    content: "e-mail",
    icon: <BsEnvelope />,
  },
  helper: "",
  placeholder: "this input is disabled, sorry",
  disabled: true,
  value: "Some value here",
};

export const RequiredInputBox = Template.bind({});
RequiredInputBox.args = {
  required: true,
  description: "This field is required",
  placeholder: "Placeholder",
  hint: {
    content: "e-mail",
    icon: <BsEnvelope />,
  },
  helper: "please provide your email",
  helperIcon: <BsEnvelope />,
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
      icon: <BsEnvelope />,
    },
    helper: "",
    placeholder: "no ads or spams.",
  },
};

export const InteractivePasswordInput = InteractiveTemplate.bind({});
InteractivePasswordInput.args = {
  inputBoxArgs: {
    type: "password",
    description: "",
    hint: {
      content: "",
      icon: <BsLock />,
    },
    helper: "",
    placeholder: "input your password",
    isPassword: true,
  },
};
export const DisabledPasswordInput = InteractiveTemplate.bind({});
DisabledPasswordInput.args = {
  inputBoxArgs: {
    type: "password",
    description: "",
    hint: {
      content: "",
      icon: <BsLock />,
    },
    helper: "",
    placeholder: "input your password",
    isPassword: true,
    disabled: true,
  },
};

export const MaskedInput = InteractiveTemplate.bind({});
MaskedInput.args = {
  inputBoxArgs: {
    type: "text",
    mask: "999-99-9999",
    placeholder: "000-00-0000",
    description: "MaskedInpyt",
    hint: {
      content: "",
      icon: <BsCardList />,
    },
    destructive: true,
    helper: "",
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
