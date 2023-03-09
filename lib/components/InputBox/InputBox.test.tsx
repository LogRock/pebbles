/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";

import "@testing-library/jest-dom";
// we should also import screen, userEvent, etc from this file.
import { render, screen, userEvent } from "../../utils/test-utils";
import { InputBox, TextArea } from ".";

describe("InputBox", () => {
  it("renders InputBox properly", () => {
    const { container } = render(<InputBox />);

    expect(container).toMatchSnapshot();
  });
  it("get InputBox by label text", async () => {
    const { container } = render(
      <div>
        <InputBox
          type="text"
          id="textId"
          description="User Name"
          onChange={() => null}
        />
      </div>
    );
    const textInput = screen.getByLabelText("User Name");
    await userEvent.type(textInput, "Mascarenhas");
    // @ts-ignore
    expect(textInput.value).toBe("Mascarenhas");
    expect(container).toMatchSnapshot();
    expect(textInput).not.toBeNull();
  });

  it("get TextArea value", async () => {
    render(
      <div>
        <TextArea id="textAreaId" description="Story" />
      </div>
    );
    const textInput = screen.getByLabelText("Story");
    await userEvent.type(
      textInput,
      "larari larila larari larila larari larila"
    );
    // @ts-ignore
    expect(textInput.value).toBe("larari larila larari larila larari larila");
    expect(textInput).not.toBeNull();
  });

  it.skip("renders Date InputBox properly", () => {
    const { container } = render(<InputBox type="date" />);

    expect(container).toMatchSnapshot();
  });

  it("renders Number InputBox properly", () => {
    const { container } = render(<InputBox type="number" />);

    expect(container).toMatchSnapshot();
  });
  it("renders Phone InputBox properly", () => {
    const { container } = render(
      <InputBox
        type="tel"
        // @ts-ignore
        defaultCountry="US"
        onChange={() => null}
      />
    );

    expect(container).toMatchSnapshot();
  });
  it("get Phone InputBox by label text", async () => {
    const { container } = render(
      <div>
        <InputBox
          type="tel"
          id="phoneId"
          description="Phone Info"
          // @ts-ignore
          defaultCountry="US"
          onChange={() => null}
        />
      </div>
    );
    const phoneInput = screen.getByLabelText("Phone Info");
    await userEvent.type(phoneInput, "4158604422");
    // @ts-ignore
    expect(phoneInput.value).toBe("(415) 860-4422");
    expect(container).toMatchSnapshot();
    expect(phoneInput).not.toBeNull();
  });
});
