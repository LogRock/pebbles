import React from "react";

import Icon from "@mdi/react";
import { mdiAlert } from "@mdi/js";

import TabView from "../../../../lib/components/TabView";
import TabLinks from "../../../../lib/components/TabView/TabLinks";
import TabLink from "../../../../lib/components/TabView/TabLink";

export default {
  title: "Components/TabView",
  component: TabView,
};

const Template = (args) => <TabView {...args}></TabView>;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  children: "Primary Color Tab View",
};

export const WithChildren = Template.bind({});
WithChildren.args = {
  variant: "primary",
  children: (
    <TabLinks bgColor="#f1f1f1">
      <TabLink isActive>Link 1</TabLink>
      <TabLink>
        <Icon size={0.95} path={mdiAlert} /> Link 2
      </TabLink>
      <TabLink>Link 3</TabLink>
      <TabLink>Link 4</TabLink>
    </TabLinks>
  ),
};
