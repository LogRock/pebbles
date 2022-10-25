import React, { useState } from "react";
import { InputBox } from "../../../../lib/components/InputBox";

import { mdiPhoneOutline } from "@mdi/js";
import { Icon } from "@mdi/react";

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
    icon: <Icon path={mdiPhoneOutline} size={0.7} />,
  },
  countryOptionsOrder: ["US", "CA", "MX", "|", "..."],
  defaultCountry: "US",
  status: "info",
  internationalFormatCountries: ["US"],
};
