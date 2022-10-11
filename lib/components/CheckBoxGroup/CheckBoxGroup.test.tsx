import React from "react";

import { vi } from "vitest";

import "@testing-library/jest-dom";
// we should also import screen, userEvent, etc from this file.
import { render, screen, fireEvent } from "../../utils/test-utils";
// import { render } from "@testing-library/react"

import CheckBoxGroup from "./CheckBoxGroup";

describe("CheckBoxGroup Component", () => {
  it("should match snapshot", () => {
    const checkBoxGroup = render(
      <CheckBoxGroup possibleValues={["A", "B", "C"]} values={["A", "C"]} />
    );

    expect(checkBoxGroup).toMatchSnapshot();
  });
  it("should show a helper message snapshot", () => {
    render(
      <CheckBoxGroup
        description="test"
        helper="you should provide a value"
        possibleValues={["A", "B", "C"]}
        values={["A", "C"]}
      />
    );
    expect(screen.getByText(/you should provide a value/)).toBeInTheDocument();
  });
  it("should select options to trigger change event", () => {
    const onChange = () => null;
    const onChangeMock = vi.fn().mockImplementation(onChange);

    render(
      <CheckBoxGroup
        description="test"
        helper="you should provide a value"
        possibleValues={["A-test", "B-test", "C-test"]}
        values={["C-test"]}
        onChange={onChangeMock}
      />
    );
    fireEvent.click(screen.getByLabelText("A-test"));
    expect(onChangeMock).toHaveBeenCalledWith(["C-test", "A-test"]);
  });
});
