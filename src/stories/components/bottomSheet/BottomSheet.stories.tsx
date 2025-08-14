import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";

import BottomSheet from "../../../../lib/components/BottomSheet/BottomSheet";

const meta = {
  title: "Components/BottomSheet",
  component: BottomSheet,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    open: {
      control: { type: "boolean" },
      description: "Toggle to open/close the bottom sheet",
    },
  },
} as Meta<typeof BottomSheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true,
    children: "I am a bottom sheet",
  },
  render: (args) => {
    const [open, setOpen] = useState(args.open);

    return (
      <div>
        <button onClick={() => setOpen(!open)}>
          {open ? "Close" : "Open"} Bottom Sheet
        </button>
        <BottomSheet {...args} open={open} onDismiss={() => setOpen(false)}>
          {args.children}
        </BottomSheet>
      </div>
    );
  },
};

export const WithHeader: Story = {
  args: {
    open: true,
    header: "Bottom Sheet Header",
    children: (
      <div style={{ padding: "20px" }}>
        <p>This is the bottom sheet content with a header.</p>
        <p>You can add any content here.</p>
      </div>
    ),
  },
  render: (args) => {
    const [open, setOpen] = useState(args.open);

    return (
      <div>
        <button onClick={() => setOpen(!open)}>
          {open ? "Close" : "Open"} Bottom Sheet
        </button>
        <BottomSheet {...args} open={open} onDismiss={() => setOpen(false)}>
          {args.children}
        </BottomSheet>
      </div>
    );
  },
};
