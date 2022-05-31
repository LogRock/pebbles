import React from "react";

import "@testing-library/jest-dom";
// we should also import screen, userEvent, etc from this file.
import { render } from "../../utils/test-utils";
// import { render } from "@testing-library/react"
import { InputBox } from ".";

describe("InputBox", () => {
  it("renders InputBox properly", () => {
    const { container } = render(<InputBox />);

    expect(container).toMatchSnapshot();
  });
  it("renders Date InputBox properly", () => {
    const { container } = render(<InputBox type="date" />);

    expect(container).toMatchSnapshot();
  });
  it("renders Number InputBox properly", () => {
    const { container } = render(<InputBox type="number" />);

    expect(container).toMatchSnapshot();
  });
  it("renders Phone InputBox properly", () => {
    const { container } = render(<InputBox type="tel" />);

    expect(container).toMatchSnapshot();
  });
});
