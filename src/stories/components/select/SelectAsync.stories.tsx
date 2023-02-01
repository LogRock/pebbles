import React from "react";
import SelectAsync from "../../../../lib/components/SelectAsync";
import { ComponentStory, ComponentMeta } from "@storybook/react";

const loadOptionsAsync = (inputValue: string) =>
  new Promise<{ value: string; label: string }[]>((resolve) => {
    setTimeout(() => {
      resolve(
        [
          {
            value: "1",
            label: "First Item",
          },
          {
            value: "2",
            label: "Second Item",
          },
          {
            value: "3",
            label: "Third Item",
          },
          {
            value: "4",
            label: "You guessed it",
          },
        ].filter((item) => item.label.includes(inputValue))
      );
    }, 2000);
  });

export default {
  title: "Components/Select/Async",
  component: SelectAsync,
  argTypes: { onChange: { action: "changed" } },
} as ComponentMeta<typeof SelectAsync>;

const Template: ComponentStory<typeof SelectAsync> = (args) => (
  <SelectAsync {...args} loadOptions={loadOptionsAsync} />
);

export const Default = Template.bind({});
Default.args = {};

export const Destructive = Template.bind({});
Destructive.args = {
  status: "destructive",
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: "Some label",
};

export const WithHelper = Template.bind({});
WithHelper.args = {
  helper: "Some helper, Notice the dropdown now has some margin-top around me",
};

export const Clearable = Template.bind({});
Clearable.args = {
  isClearable: true,
  label: "Select something and you can then erase it",
};

export const Searchable = Template.bind({});
Searchable.args = {
  isSearchable: true,
  label: "Type something",
};

export const Multi = Template.bind({});
Multi.args = {
  isMulti: true,
  label: "Select many",
};

export const AllInOne = Template.bind({});
AllInOne.args = {
  isClearable: true,
  isMulti: true,
  isSearchable: true,
  label: "Turn everything ON at once!",
  helper: "For all available options, see the react-select docs",
};
