import Select from ".";
import React from "react";
import { render, userEvent } from "../../utils/test-utils";
import { screen, waitFor } from "@testing-library/react";

const autoCompleteItems = [
  {
    id: 1,
    name: "First Item",
  },
  {
    id: 2,
    name: "Second Item",
  },
  {
    id: 3,
    name: "Third Item",
  },
  {
    id: 4,
    name: "You guessed it",
  },
  {
    id: 5,
    name: "First Item",
  },
  {
    id: 6,
    name: "Second Item",
  },
  {
    id: 7,
    name: "Third Item",
  },
  {
    id: 8,
    name: "You guessed it",
  },
];

describe("Select", () => {
  it("shows the dropdown when clicking the icon", async () => {
    render(
      <Select
        autoCompleteItems={autoCompleteItems}
        inputProps={{
          hint: {
            icon: "drop",
            content: "",
          },
        }}
      />
    );

    expect(screen.queryAllByText("You guessed it").length).toBe(0);

    userEvent.click(
      screen.getByText("drop").closest("span") as HTMLSpanElement
    );

    await waitFor(() =>
      expect(screen.queryAllByText("You guessed it").length).toBe(2)
    );
  });
});
