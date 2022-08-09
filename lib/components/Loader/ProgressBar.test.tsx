import React from "react";
import { render } from "../../utils/test-utils";
import ProgressBar from "./ProgressBar";

describe("ProgressBar tests", () => {
  it("matches the component snapshot", () => {
    const { container } = render(
      <ProgressBar percentage={75} size="medium"></ProgressBar>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
