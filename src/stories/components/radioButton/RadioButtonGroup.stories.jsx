import React, { useState } from "react";
import RadioButton, {
  RadioButtonGroup,
} from "../../../../lib/components/RadioButton";

export default {
  title: "Components/RadioButton/RadioButtonGroup",
  component: RadioButtonGroup,
};

const Template = (args) => (
  <RadioButtonGroup {...args}>
    <RadioButton>First option</RadioButton>
    <RadioButton>Option B</RadioButton>
    <RadioButton>#3</RadioButton>
    <RadioButton>Last one</RadioButton>
    <RadioButton>Option the V</RadioButton>
  </RadioButtonGroup>
);

export const Default = Template.bind();
Default.args = {};

export const WithTitle = Template.bind();
WithTitle.args = {
  groupTitle: "Pick at least 3 options",
};

const TemplateFrequencyOptions = (args) => {
  const frequencyOptions = ["daily", "weekly", "monthly", "never"];
  const [frequency, setFrequency] = useState(frequencyOptions[0]);

  return (
    <RadioButtonGroup
      groupTitle={"What frequency would you like to check logbooks?"}
    >
      {frequencyOptions.map((option) => (
        <RadioButton
          key={option}
          id={option}
          checked={option === frequency}
          onChange={(event) => {
            setFrequency(event.target.id);
          }}
        >
          {option}
        </RadioButton>
      ))}
    </RadioButtonGroup>
  );
};

export const Frequency = TemplateFrequencyOptions.bind();
Frequency.args = {
  groupTitle: "How frequently do you wanna receive our e-mails?",
};
