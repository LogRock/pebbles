import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Select2 } from "../../../../lib/main";
import Panel from "../../../../lib/components/Panel";

const panelsItems = [
  {
    title: "Panel 1",
    content: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
        ex, sit amet blandit leo lobortis eget.
      </p>
    ),
    startsOpened: true,
  },
  {
    title: "Panel 2",
    content: (
      <div style={{ display: "flex", padding: "20px 0" }}>
        <div style={{ flexBasis: "auto", width: "100%" }}>
          <Select2 />
        </div>
        <div style={{ flexBasis: "auto", width: "100%" }}>
          <Select2 />
        </div>
      </div>
    ),
  },
];

export default {
  title: "Components/Panel",
  component: Panel,
} as ComponentMeta<typeof Panel>;

const Template: ComponentStory<typeof Panel> = (args) => <Panel {...args} />;

export const Default = Template.bind({});
Default.args = {
  panelsItems: panelsItems,
};
