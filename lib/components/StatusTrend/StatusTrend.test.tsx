import React from "react";

import "@testing-library/jest-dom";
import { render, screen } from "../../utils/test-utils";
import StatusTrend from ".";

describe("StatusTrend", () => {
  it("renders properly", () => {
    const { container } = render(
      <StatusTrend direction="down" variant="negative">
        +10.3%
      </StatusTrend>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it("shows the status indicator", () => {
    render(
      <StatusTrend direction="down" variant="negative">
        +10.3%
      </StatusTrend>
    );
    screen.debug();
    expect(screen.getByText("+10.3%")).toBeInTheDocument();
  });

  it("shows the down svg arrow", () => {
    render(
      <StatusTrend direction="down" variant="negative">
        +10.3%
      </StatusTrend>
    );

    expect(screen.getByTestId("down-arrow")).toBeInTheDocument();
  });

  it("shows the up svg arrow", () => {
    render(
      <StatusTrend direction="up" variant="negative">
        +10.3%
      </StatusTrend>
    );

    expect(screen.getByTestId("up-arrow")).toBeInTheDocument();
  });
});
