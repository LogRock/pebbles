import React from "react";
import Box from ".";
import { render } from "../../utils/test-utils";

describe("Box", () => {
  it("renders with default style", () => {
    const { container } = render(<Box />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders with custom styles", () => {
    const { container } = render(
      <Box
        align="end"
        margin="xxbig"
        padding="xlg"
        backgroundColor="destructive"
        backgroundShade="100"
        borderRadius="lg"
        shadow="upMedium"
        direction="row"
        rowGap="lg"
        colGap="huge"
        justify="space-between"
        noWrap
      />
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
