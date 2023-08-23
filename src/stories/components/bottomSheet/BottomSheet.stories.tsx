import React, { ComponentProps } from "react";
import { ComponentMeta, Story } from "@storybook/react";

import BottomSheet from "../../../../lib/components/BottomSheet/BottomSheet";

export default {
  title: "Components/BottomSheet",
  component: BottomSheet,
} as ComponentMeta<typeof BottomSheet>;

const Template: Story<ComponentProps<typeof BottomSheet>> = (args) => (
  <BottomSheet {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "I am a bottom sheet",
};
