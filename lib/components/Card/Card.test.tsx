import React from "react";
import { render } from "../../utils/test-utils";
import Card from "./Card";

describe("Card", () => {
  it("renders with default props", () => {
    const { container } = render(<Card />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders with custom props", () => {
    const { container } = render(
      <Card padding="huge" shadow="upXxLarge" radius="xxhuge" />
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
