import React from "react";
import Loader from "../../../../lib/components/Loader/Loader";

export default {
  title: "Components/Loader/Default",
  component: Loader,
};

const Template = (args) => <Loader {...args} />;

export const Default = Template.bind();
Default.args = {
  message: "Loading",
};
