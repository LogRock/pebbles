import React from "react";
import { render } from "../../utils/test-utils";

import Stepper from "./Stepper";
import StepperStep from "./StepperStep";

describe("Stepper test", () => {
  it("renders stepper with some content", () => {
    expect(
      render(
        <Stepper>
          <StepperStep stepIndex="01">
            <h4>Personal</h4>
          </StepperStep>
          <StepperStep stepIndex="02">
            <h4>Company</h4>
          </StepperStep>
          <StepperStep stepIndex="03">
            <h4>ELD</h4>
          </StepperStep>
        </Stepper>
      ).container.firstChild
    ).toMatchSnapshot();
  });

  it("renders in display only mode", () => {
    expect(
      render(
        <Stepper showHoverEffect>
          <StepperStep stepIndex="01">
            <h4>Personal</h4>
          </StepperStep>
          <StepperStep stepIndex="02">
            <h4>Company</h4>
          </StepperStep>
          <StepperStep stepIndex="03">
            <h4>ELD</h4>
          </StepperStep>
        </Stepper>
      ).container.firstChild
    ).toMatchSnapshot();
  });
});
