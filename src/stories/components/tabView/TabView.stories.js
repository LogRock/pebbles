import React from "react";

import Icon from "@mdi/react";
import { mdiAlert } from "@mdi/js";

import TabView from "../../../../lib/components/TabView";
import TabLinks from "../../../../lib/components/TabView/TabLinks";
import TabLink from "../../../../lib/components/TabView/TabLink";
import TabContent from "../../../../lib/components/TabView/TabContent";

export default {
  title: "Components/TabView",
  component: TabView,
};

const Template = (args) => <TabView {...args}></TabView>;

export const FirstTabActive = Template.bind({});
FirstTabActive.args = {
  bgColor: "fafafa",
  borderRadius: 16,
  children: (
    <>
      <TabLinks>
        <TabLink href="" active>
          Tab 1 <br />
          Multiline!
        </TabLink>
        <TabLink href="">
          <Icon size={0.95} path={mdiAlert} /> Tab 2
        </TabLink>
        <TabLink href="" disabled>
          Tab 3
        </TabLink>
        <TabLink href="">Tab 4</TabLink>
      </TabLinks>
      <TabContent>
        <h4>Tab Content here</h4>
      </TabContent>
    </>
  ),
};
