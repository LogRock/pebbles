import React from "react";
import { render, screen } from "../../utils/test-utils";
import RadioButton from "./RadioButton";

describe("RadioButton", () => {
  it("renders checked", () => {
    render(<RadioButton checked>Disco is dead</RadioButton>);

    expect(
      (screen.getByLabelText("Disco is dead") as HTMLInputElement).checked
    ).toBeTruthy();
  });

  it("renders unchecked", () => {
    render(<RadioButton>Disco killed the radio</RadioButton>);

    expect(
      (screen.getByLabelText("Disco killed the radio") as HTMLInputElement)
        .checked
    ).toBeFalsy();
  });
});
