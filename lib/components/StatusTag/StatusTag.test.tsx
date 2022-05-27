import React from "react";

import "@testing-library/jest-dom";
import { render } from "../../utils/test-utils";
import StatusTag from ".";

describe("StatusTag", () => {
  it("renders properly", () => {
    const { container } = render(
      <StatusTag label="High Risk" size="medium" variant="error" />
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
