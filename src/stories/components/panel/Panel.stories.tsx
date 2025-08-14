import React from "react";
import { Meta, StoryObj } from "@storybook/react-vite";
import { Select2 } from "../../../../lib/main";
import Panel, { PanelsItems } from "../../../../lib/components/Panel";
import { BsAlarm, BsArrowBarUp } from "react-icons/bs";

const panelsItems: PanelsItems[] = [
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
    padding: "zero",
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

const meta = {
  title: "Components/Panel",
  component: Panel,
  parameters: {
    layout: "centered",
  },
} as Meta<typeof Panel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    panelsItems: panelsItems,
    openedPanelIndex: 0,
  },
  render: (args) => <Panel expandButtonAlign="right" {...args} />,
};

const panelTitleItems = [
  {
    title: (
      <p>
        <BsAlarm /> Title{" "}
      </p>
    ),
    content: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
        ex, sit amet blandit leo lobortis eget.
      </p>
    ),
  },
  {
    title: (
      <p>
        <BsArrowBarUp /> Second Title{" "}
      </p>
    ),
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

export const TitleComponent: Story = {
  args: {
    panelsItems: panelTitleItems,
    openedPanelIndex: 0,
  },
  render: (args) => <Panel expandButtonAlign="right" {...args} />,
};
