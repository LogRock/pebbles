import React from "react";
import ProgressLoader from "../../../../lib/components/Loader/ProgressLoader";

export default {
  title: "Components/ProgressLoader/Default",
  component: ProgressLoader,
};

const Template = (args) => <ProgressLoader {...args} />;

export const Default = Template.bind();
Default.args = {
  percentage: 33,
};
