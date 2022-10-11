import React from "react";

import "@testing-library/jest-dom";
import { render } from "../../utils/test-utils";
import StatusTag from ".";
import { STATUS_TAG_SIZES, STATUS_TAG_VARIANTS } from "./StatusTag.types";

describe("StatusTag", () => {
  it("renders properly", () => {
    const { container } = render(
      <StatusTag
        size={STATUS_TAG_SIZES.MEDIUM}
        variant={STATUS_TAG_VARIANTS.DESTRUCTIVE}
      >
        High Risk
      </StatusTag>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
