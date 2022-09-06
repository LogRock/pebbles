import React from "react";
import RadioButton from "../../../../lib/components/RadioButton";

export default {
  title: "Components/RadioButton/RadioButton",
  component: RadioButton,
};

const Template = (args) => <RadioButton {...args} />;

export const Default = Template.bind();
Default.args = {
  children: "Default",
  checked: false,
};

export const Checked = Template.bind();
Checked.args = {
  children: (
    <>
      alskdmaskmd kalsmdlkasm dlaksmdlaksdm alskmd laksmdask dmalskmd as dla
      skmdlas d <br /> j askdh askjdha jskhd kasjhd <br />{" "}
      ajskdhakjshdkjashdkajshdkajshdajkshd
    </>
  ),
  checked: true,
};
