import React from "react";
import { TextArea } from "../../../../lib/components/InputBox";

import { BsEnvelope } from "react-icons/bs";

export default {
  title: "Components/TextArea",
  component: TextArea,
  argTypes: {
    disabled: {
      defautValue: false,
    },
  },
};

const Template = (args) => <TextArea {...args} />;

export const Default = Template.bind({});
Default.args = {
  description: "Write your poem",
  hint: {
    icon: <BsEnvelope />,
  },
  status: "info",
  helper: "Testestestes sa es es es s",
  placeholder: "provide your lyrics",
  rows: 10,
  id: "textarea-plus",
};
