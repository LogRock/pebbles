import React from "react";

import {
  BsAlarm,
  BsFileMedical,
  BsHammer,
  BsOctagon,
  BsVectorPen,
} from "react-icons/bs";

import styled from "styled-components";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Stepper from "../../../../lib/components/Stepper";
import StepperStep from "../../../../lib/components/Stepper/StepperStep";

export default {
  title: "Components/Stepper",
  component: Stepper,
} as ComponentMeta<typeof Stepper>;

const NoMarginText = styled.h4`
  margin: 0;
`;

const Template: ComponentStory<typeof Stepper> = (args) => (
  <Stepper {...args}></Stepper>
);

const handleOnClick = (stepIndex: number) => {
  alert(`clicked step is: ${stepIndex}`);
};

export const Default = Template.bind({});
Default.args = {
  showHoverEffect: true,
  children: (
    <>
      <StepperStep stepIndex={1} completed onStepClick={() => handleOnClick(1)}>
        <NoMarginText>Personal</NoMarginText>
      </StepperStep>
      <StepperStep stepIndex={2} completed onStepClick={() => handleOnClick(2)}>
        <NoMarginText>Company</NoMarginText>
      </StepperStep>
      <StepperStep stepIndex={3} current onStepClick={() => handleOnClick(3)}>
        <NoMarginText>ELD</NoMarginText>
      </StepperStep>
      <StepperStep stepIndex={4} last onStepClick={() => handleOnClick(4)}>
        <NoMarginText>Finish</NoMarginText>
      </StepperStep>
    </>
  ),
};

export const InformativeOnly = Template.bind({});
InformativeOnly.args = {
  showHoverEffect: false,
  children: (
    <>
      <StepperStep stepIndex="01" icon={<BsFileMedical />}>
        <NoMarginText>Personal</NoMarginText>
      </StepperStep>
      <StepperStep stepIndex="02" icon={<BsAlarm />}>
        <NoMarginText>Company</NoMarginText>
      </StepperStep>
      <StepperStep stepIndex="03" icon={<BsVectorPen />}>
        <NoMarginText>ELD</NoMarginText>
      </StepperStep>
      <StepperStep stepIndex="04" icon={<BsHammer />}>
        <NoMarginText>Documents</NoMarginText>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
          consequatur ab quas aperiam, eos modi voluptas sit autem tenetur ipsa
          ex reprehenderit illum voluptates iste, dolorum explicabo. Quaerat,
          laborum ab? Quos autem suscipit libero commodi reiciendis quam minima,
          molestias rerum nisi officiis itaque. Debitis expedita qui, velit
          dolorum quidem tempora aperiam et distinctio perferendis reiciendis
          hic! Reiciendis nostrum ullam incidunt vel unde at quod assumenda ea
          modi eos vero labore explicabo debitis iusto ex, temporibus illo
          repellat sequi. Facere, atque!
        </p>
      </StepperStep>
      <StepperStep stepIndex="05" last icon={<BsOctagon />}>
        <NoMarginText
          style={{
            color: "#262",
          }}
        >
          Last Step
        </NoMarginText>
        <div>
          <div
            style={{
              backgroundColor: "#afa",
              padding: "12px",
              margin: "12px 0",
              borderRadius: "5px",
              color: "#262",
            }}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, consequuntur?
            </p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            voluptatem delectus at dolorem, modi harum, omnis ea atque saepe
            architecto aperiam! Magnam obcaecati ipsa eveniet at deleniti labore
            non minus suscipit iure placeat cupiditate quas, vero facilis
            commodi accusamus nemo.
          </p>
        </div>
      </StepperStep>
    </>
  ),
};
