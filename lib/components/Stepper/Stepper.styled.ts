import styled, { css } from "styled-components";
import { StepperProps, StepperStepProps } from "./Stepper.types";

export const StepIndicatorContainer = styled.div`
  display: grid;
  position: relative;
  grid-template-rows: auto 1fr;
  margin-right: ${({ theme }) => theme.spacings.md};
  justify-self: max-content;
  justify-items: center;
`;

export const StepIndicator = styled.div<StepperStepProps>`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 36px;
  min-width: 36px;
  height: 36px;
  min-height: 36px;

  border: 2px solid
    ${(props: any) =>
      props.current || props.completed
        ? props.theme.colors.primary[400]
        : props.theme.colors.neutral[200]};
  border-radius: 96px;

  background-color: ${(props: any) =>
    props.completed ? props.theme.colors.primary[500] : "transparent"};
  box-shadow: 0px 0px 0px 4px
    ${(props: any) =>
      props.current ? props.theme.colors.primary[100] : "transparent"};

  p {
    display: ${(props: any) => (props.completed ? "none" : "block")};

    color: ${(props: any) =>
      props.current
        ? props.theme.colors.neutral[900]
        : props.theme.colors.neutral[500]};
    font-weight: 500;
  }
`;

export const StepLine = styled.div<StepperStepProps>`
  width: 2px;
  height: 100%;

  background-color: ${(props: any) =>
    props.completed
      ? props.theme.colors.primary[500]
      : props.theme.colors.neutral[200]};
`;

export const StepCheckMark = styled.div<StepperStepProps>`
  display: ${(props: any) => (props.completed ? "block" : "none")};
  position: absolute;

  transform: translate(0, 0) rotate(45deg);

  &:after {
    content: "";

    position: absolute;
    width: 3px;
    height: 15px;

    transform: translate(0, -10px);

    border-radius: 8px;

    background-color: ${({ theme }) => theme.colors.neutral[900]};
  }

  &:before {
    content: "";

    position: absolute;
    width: 3px;
    height: 9px;

    transform: translate(-3px, 0) rotate(90deg);

    border-radius: 8px;

    background-color: ${({ theme }) => theme.colors.neutral[900]};
  }
`;

export const StepContent = styled.div<StepperStepProps>`
  min-height: 48px;
  margin-top: 12px;

  color: ${(props: any) =>
    props.current
      ? props.theme.colors.neutral[900]
      : props.theme.colors.neutral[500]};
  font-weight: 500;
`;

export const Step = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
`;

export const Steps = styled.div<StepperProps>`
  display: flex;
  flex-direction: column;

  font-family: ${({ theme }) => theme.loader.fontFamily};

  & > ${Step} {
    ${({ showHoverEffect }) =>
      showHoverEffect &&
      css`
        cursor: pointer;

        &:hover ${StepIndicator} {
          border: 2px solid ${({ theme }) => theme.colors.primary[100]};

          p {
            color: ${({ theme }) => theme.colors.neutral[900]};
          }
        }
      `}
  }
`;
