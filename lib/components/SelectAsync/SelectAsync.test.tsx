import Select from ".";
import React from "react";
import { render, userEvent } from "../../utils/test-utils";
import { vi } from "vitest";
import { fireEvent, screen } from "@testing-library/react";

describe("Select2", () => {
  const mockedOptionsGetter = () =>
    new Promise<{ value: string; label: string }[]>((resolve) => {
      setTimeout(() => {
        resolve([
          { label: "Mocked option 1", value: "mocked-option-1" },
          { label: "Mocked option 2", value: "mocked-option-2" },
          { label: "Mocked option 3", value: "mocked-option-3" },
          { label: "Mocked option 4", value: "mocked-option-4" },
          { label: "Mocked option 5", value: "mocked-option-5" },
          { label: "Mocked option 6", value: "mocked-option-6" },
          { label: "Mocked option 7", value: "mocked-option-7" },
          { label: "Mocked option 8", value: "mocked-option-8" },
          { label: "Mocked option 9", value: "mocked-option-9" },
          { label: "Mocked option 10", value: "mocked-option-10" },
        ]);
      }, 200);
    });

  it("should render without errors", async () => {
    const mockedOnChange = vi.fn();
    const { getByText } = render(
      <Select
        loadOptions={mockedOptionsGetter}
        onChange={mockedOnChange}
        placeholder="Select an option"
      />
    );

    const placeholder = getByText("Select an option");

    expect(placeholder).toBeTruthy();
  });

  it("should call onChange when the first option is selected", async () => {
    const mockedOnChange = vi.fn();
    render(
      <Select
        loadOptions={mockedOptionsGetter}
        onChange={mockedOnChange}
        label="my-select-component"
      />
    );

    const mySelectComponent = screen.getByLabelText("my-select-component");

    expect(mySelectComponent).toBeDefined();
    expect(mySelectComponent).not.toBeNull();
    expect(mockedOnChange).toHaveBeenCalledTimes(0);

    userEvent.type(mySelectComponent, "mocked query");
    await screen.findByText("Mocked option 1");
    fireEvent.click(screen.getByText("Mocked option 1"));

    expect(mockedOnChange).toHaveBeenCalledTimes(1);
    expect(mockedOnChange).toHaveBeenCalledWith(
      {
        label: "Mocked option 1",
        value: "mocked-option-1",
      },
      {
        action: "select-option",
        name: undefined,
        option: undefined,
      }
    );
  });

  it("should call onChange when the first option is selected then second option then the 9th one", async () => {
    const mockedOnChange = vi.fn();
    render(
      <Select
        loadOptions={mockedOptionsGetter}
        onChange={mockedOnChange}
        label="my-select-component"
      />
    );

    const mySelectComponent = screen.getByLabelText("my-select-component");

    expect(mySelectComponent).toBeDefined();
    expect(mySelectComponent).not.toBeNull();
    expect(mockedOnChange).toHaveBeenCalledTimes(0);

    userEvent.type(mySelectComponent, "mocked query");
    fireEvent.keyDown(mySelectComponent, { key: "ArrowDown" });
    await screen.findByText("Mocked option 1");
    fireEvent.click(screen.getByText("Mocked option 1"));

    userEvent.type(mySelectComponent, "mocked query");
    fireEvent.keyDown(mySelectComponent, { key: "ArrowDown" });
    await screen.findByText("Mocked option 2");
    fireEvent.click(screen.getByText("Mocked option 2"));

    userEvent.type(mySelectComponent, "mocked query");
    fireEvent.keyDown(mySelectComponent, { key: "ArrowDown" });
    await screen.findByText("Mocked option 9");
    fireEvent.click(screen.getByText("Mocked option 9"));

    expect(mockedOnChange).toHaveBeenCalledTimes(3);
    expect(mockedOnChange).toHaveBeenCalledWith(
      {
        label: "Mocked option 9",
        value: "mocked-option-9",
      },
      {
        action: "select-option",
        name: undefined,
        option: undefined,
      }
    );
  });

  it("should call onChange when filtering by input value", async () => {
    const mockedOnChange = vi.fn();
    render(
      <Select
        loadOptions={mockedOptionsGetter}
        onChange={mockedOnChange}
        label="my-select-component"
      />
    );

    const mySelectComponent = screen.getByLabelText("my-select-component");

    userEvent.type(mySelectComponent, "mocked query");

    // select Mocked option 1
    fireEvent.keyDown(mySelectComponent, { key: "ArrowDown" });
    // select Mocked option 10
    fireEvent.keyDown(mySelectComponent, { key: "ArrowDown" });

    await screen.findByText("Mocked option 10");
    fireEvent.click(screen.getByText("Mocked option 10"));

    expect(mockedOnChange).toHaveBeenCalledTimes(1);
    expect(mockedOnChange).toHaveBeenCalledWith(
      {
        label: "Mocked option 10",
        value: "mocked-option-10",
      },
      {
        action: "select-option",
        name: undefined,
        option: undefined,
      }
    );
  });
});
