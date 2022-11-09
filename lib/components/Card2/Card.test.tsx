import React from "react";
import { render } from "../../utils/test-utils";
import Card2 from "./Card";

describe("Card", () => {
  it("renders with default props", () => {
    const { container } = render(<Card2 />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders with custom props", () => {
    const { container } = render(
      <Card2 padding="huge" shadow="upXxLarge" radius="xxhuge" />
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
