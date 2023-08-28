import React from "react";
import { render } from "../../utils/test-utils";
import DateInput from "./DateInput";

describe("DateInput", () => {
  it("should render a date input", () => {
    const { container } = render(<DateInput />);
    expect(container.querySelector('input[type="date"]')).toBeInTheDocument();
  });
});
