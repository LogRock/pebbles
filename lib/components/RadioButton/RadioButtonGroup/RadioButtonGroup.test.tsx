import React from "react";
import RadioButtonGroup from ".";
import RadioButton from "../";
import { render, screen } from "../../../utils/test-utils";

describe("RadioButtonGroup", () => {
  it("render properly", () => {
    const { container } = render(
      <RadioButtonGroup groupTitle="Pick at least 6 options">
        <RadioButton>First option</RadioButton>
        <RadioButton>Option B</RadioButton>
        <RadioButton>#3</RadioButton>
        <RadioButton>Last one</RadioButton>
        <RadioButton>Option the V</RadioButton>
      </RadioButtonGroup>
    );

    expect(screen.getByText("Pick at least 6 options")).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
