import React from "react";
import { render } from "../../utils/test-utils";
import { STATUS_TAG_VARIANTS } from "../StatusTag";
import NotificationDot from "./NotificationDot";

describe("NotificationDot", () => {
  it("renders", () => {
    const { container } = render(
      <NotificationDot variant={STATUS_TAG_VARIANTS.NEUTRAL}>
        Foo
      </NotificationDot>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
