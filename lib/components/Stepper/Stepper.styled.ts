import styled from "styled-components";

export const StepIndex = styled.div<{
  isCurStep: Boolean;
  isLastItem: Boolean;
  isFinished: Boolean;
}>`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  margin-right: ${({ theme }) => theme.spacings.md};

  border: 2px solid
    ${(props: any) =>
      props.isCurStep || props.isFinished
        ? props.theme.colors.primary[400]
        : props.theme.colors.neutral[200]};
  border-radius: 96px;

  background-color: ${(props: any) =>
    props.isFinished ? props.theme.colors.primary[500] : "transparent"};
  box-shadow: 0px 0px 0px 4px
    ${(props: any) =>
      props.isCurStep ? props.theme.colors.primary[100] : "transparent"};

  p {
    display: ${(props: any) => (props.isFinished ? "none" : "block")};

    color: ${(props: any) =>
      props.isCurStep
        ? props.theme.colors.neutral[900]
        : props.theme.colors.neutral[500]};
    font-weight: 500;
  }

  &:after {
    content: "";

    display: ${(props: any) => (props.isLastItem ? "none" : "block")};
    position: absolute;
    top: 38px;
    left: 50%;
    height: 32px;

    transform: translate(-50%, 0);

    border: 1px solid
      ${(props: any) =>
        props.isFinished
          ? props.theme.colors.primary[500]
          : props.theme.colors.neutral[200]};
  }
`;

export const StepCheckMark = styled.div<{
  isCurStep: Boolean;
  isFinished: Boolean;
}>`
  display: ${(props: any) =>
    props.isFinished && !props.isCurStep ? "block" : "none"};
  position: relative;

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

export const StepLabel = styled.div<{ isCurStep: Boolean }>`
  color: ${(props: any) =>
    props.isCurStep
      ? props.theme.colors.neutral[900]
      : props.theme.colors.neutral[500]};
  font-weight: 500;
`;

export const Step = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 34px;

  cursor: pointer;

  &:hover > ${StepLabel} {
    color: ${({ theme }) => theme.colors.neutral[900]};
  }

  &:hover > ${StepIndex} {
    border: 2px solid ${({ theme }) => theme.colors.primary[400]};

    p {
      color: ${({ theme }) => theme.colors.neutral[900]};
    }
  }
`;

export const Steps = styled.div`
  display: flex;
  flex-direction: column;

  font-family: ${({ theme }) => theme.loader.fontFamily};
`;
