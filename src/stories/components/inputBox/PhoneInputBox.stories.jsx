import React, { useState } from "react";
import { InputBox } from "../../../../lib/components/InputBox";

import { BsTelephoneFill } from "react-icons/bs";

export default {
  title: "Components/PhoneInput",
  component: InputBox,
  argTypes: {
    disabled: {
      defautValue: false,
      control: { type: "boolean" },
    },
  },
};

const Template = (args) => {
  const [value, setValue] = useState();
  return (
    <>
      <InputBox value={value} onChange={setValue} {...args} />
      <label>{value}</label>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  type: "tel",
  description: "Preferred Telephone Number",
  hint: {
    content: "optional",
    icon: <BsTelephoneFill />,
  },
  countryOptionsOrder: ["US", "CA", "MX", "|", "..."],
  defaultCountry: "US",
  status: "info",
};
