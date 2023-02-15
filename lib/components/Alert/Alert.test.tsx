import React from "react";

import "@testing-library/jest-dom";
// we should also import screen, userEvent, etc from this file.
import { render } from "../../utils/test-utils";
import Alert from ".";

describe("Alert", () => {
  it("renders properly", () => {
    const { container } = render(
      <Alert
        onCloseClicked={function (): void {
          throw new Error("Function not implemented.");
        }}
      >
        Foo
      </Alert>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
