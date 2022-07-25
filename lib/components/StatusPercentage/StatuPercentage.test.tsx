import React from "react";
import { render, screen } from "../../utils/test-utils";
import StatusPercentage from "./StatusPercentage";

describe("StatusPercentage tests", () => {
  it("shows main UI element", () => {
    const { container } = render(
      <StatusPercentage variant="success" percentage={50} size="medium">
        50
      </StatusPercentage>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("shows correct percentage number on the component", () => {
    render(
      <StatusPercentage variant="success" percentage={50} size="medium">
        50
      </StatusPercentage>
    );
    screen.debug();
    expect(screen.getByText("50")).toBeInTheDocument();
  });

  it("renders progress ring with correct green color", () => {
    render(
      <StatusPercentage variant="success" percentage={50} size="medium">
        50
      </StatusPercentage>
    );
    screen.debug();
    expect(screen.getByTestId("ring")).toHaveAttribute("stroke", "#D4F9E1");
  });
});
