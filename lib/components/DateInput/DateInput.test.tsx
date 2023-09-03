import React from "react";
import { render } from "../../utils/test-utils";
import DateInput from "./DateInput";

describe("DateInput", () => {
  it("should render", () => {
    const { getByPlaceholderText } = render(<DateInput />);

    expect(getByPlaceholderText("MM/DD/YYYY")).toBeInTheDocument();
  });

  it("should render with label", () => {
    const { getByText } = render(<DateInput label="Date" />);

    expect(getByText("Date")).toBeInTheDocument();
  });

  it("should render with helper text", () => {
    const { getByText } = render(<DateInput helper="Helper text" />);

    expect(getByText("Helper text")).toBeInTheDocument();
  });

  it("should render with helper icon", () => {
    const { getByText } = render(<DateInput helper="Foo" helperIcon="A" />);

    expect(getByText("A")).toBeInTheDocument();
  });

  it("should render with error", () => {
    const { getByText, getByLabelText } = render(
      <DateInput helper="Foo" destructive />
    );

    expect(getByText("Foo")).toBeInTheDocument();
    expect(getByText("Foo")).toHaveStyle("color: rgb(248, 113, 113)");
    expect(getByLabelText("error icon")).toBeInTheDocument();
  });
});
