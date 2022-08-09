import React from "react";
import { render, screen } from "../../utils/test-utils";
import ProgressRing from "./ProgressRing";

describe("ProgressRing tests", () => {
  it("matches the component snapshot", () => {
    const { container } = render(
      <ProgressRing
        percentage={75}
        radius={30}
        stroke={4}
        label="75%"
      ></ProgressRing>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("shows the number percentage", () => {
    render(
      <ProgressRing
        percentage={75}
        radius={30}
        stroke={4}
        label="75%"
      ></ProgressRing>
    );

    expect(screen.getByText("75%")).toBeInTheDocument();
  });
});
