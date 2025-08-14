import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";

import { BsExclamationDiamond } from "react-icons/bs";

import TabView from "../../../../lib/components/TabView";
import TabLinks from "../../../../lib/components/TabView/TabLinks";
import TabLink from "../../../../lib/components/TabView/TabLink";
import TabContent from "../../../../lib/components/TabView/TabContent";

const meta = {
  title: "Components/TabView",
  component: TabView,
  parameters: {
    layout: "centered",
  },
} as Meta<typeof TabView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FirstTabActive: Story = {
  args: {
    bgColor: "fafafa",
    borderRadius: 16,
  },
  render: (args) => (
    <TabView {...args}>
      <TabLinks>
        <TabLink href="" active>
          Tab 1 <br />
          Multiline!
        </TabLink>
        <TabLink href="">
          <BsExclamationDiamond /> Tab 2
        </TabLink>
        <TabLink href="" disabled>
          Tab 3
        </TabLink>
        <TabLink href="">Tab 4</TabLink>
      </TabLinks>
      <TabContent>
        <h4>Tab Content here</h4>
      </TabContent>
    </TabView>
  ),
};
