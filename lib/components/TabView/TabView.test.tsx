import React from "react";

import "@testing-library/jest-dom";
import { render, screen } from "../../utils/test-utils";

import TabView from "./TabView";
import TabLinks from "./TabLinks";
import TabLink from "./TabLink";
import TabContent from "./TabContent";

describe("TabView", () => {
  it("renders TabView properly", () => {
    const { container } = render(
      <TabView>
        <TabLinks>
          <TabLink active>Tab 1</TabLink>
          <TabLink>Tab 2</TabLink>
          <TabLink disabled>Tab 3</TabLink>
        </TabLinks>
        <TabContent>
          <h4>Tab Content here</h4>
        </TabContent>
      </TabView>
    );

    expect(screen.getByText("Tab 1") as HTMLAnchorElement).toBeInTheDocument();
    expect(screen.getByText("Tab Content here")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
