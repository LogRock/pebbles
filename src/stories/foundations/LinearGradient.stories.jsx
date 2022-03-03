import React from "react";

import LinearGradient from "./LinearGradient";

export default {
  title: "Foundations/Colors/Linear Gradients",
  component: LinearGradient,
  argTypes: {
    name: {
      options: [
        "sunburst",
        "darkWineSea",
        "cherryCola",
        "coldSky",
        "oliveGarden",
        "morningSakura",
        "blueMoon",
        "synthwave",
        "teaLeaves",
        "blueberryWine",
      ],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <LinearGradient {...args} />;

export const Sunburst = Template.bind({});
Sunburst.args = {
  name: "sunburst",
};

export const DarkWineSea = Template.bind({});
DarkWineSea.args = {
  name: "darkWineSea",
};

export const CherryCola = Template.bind({});
CherryCola.args = {
  name: "cherryCola",
};

export const ColdSky = Template.bind({});
ColdSky.args = {
  name: "coldSky",
};

export const OliveGarden = Template.bind({});
OliveGarden.args = {
  name: "oliveGarden",
};

export const MorningSakura = Template.bind({});
MorningSakura.args = {
  name: "morningSakura",
};

export const BlueMoon = Template.bind({});
BlueMoon.args = {
  name: "blueMoon",
};

export const Synthwave = Template.bind({});
Synthwave.args = {
  name: "synthwave",
};

export const TeaLeaves = Template.bind({});
TeaLeaves.args = {
  name: "teaLeaves",
};

export const BlueberryWine = Template.bind({});
BlueberryWine.args = {
  name: "blueberryWine",
};
