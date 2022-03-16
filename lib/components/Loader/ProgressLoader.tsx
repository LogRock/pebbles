import styled from "styled-components";
import React, { FC } from "react";

import { ProgressLoaderProps } from "./Loader.types";

function percentageToDegree(percentage: number): number {
  if (percentage > 100) return 180;
  if (percentage < 0) return 0;

  return (percentage * 180) / 100;
}

const ProgressLoaderWrapper = styled.div`
  width: ${({ theme }) => theme.loader.size};
  height: ${({ theme }) => theme.loader.size};

  border-radius: 50%;

  background: ${({ theme }) => theme.loader.loaderColor.background};
`;

const Circle = styled.div`
  position: absolute;
  width: ${({ theme }) => theme.loader.size};
  height: ${({ theme }) => theme.loader.size};

  border-radius: 50%;
`;

const MaskFull = styled(Circle)<Pick<ProgressLoaderProps, "percentage">>`
  clip: rect(
    0px,
    ${({ theme }) => theme.loader.size},
    ${({ theme }) => theme.loader.size},
    calc(${({ theme }) => theme.loader.size} / 2)
  );

  transform: rotate(
    ${({ percentage }) => percentageToDegree(percentage) + "deg"}
  );
`;

const MaskHalf = styled(Circle)`
  clip: rect(
    0px,
    ${({ theme }) => theme.loader.size},
    ${({ theme }) => theme.loader.size},
    calc(${({ theme }) => theme.loader.size} / 2)
  );
`;

const Fill = styled(Circle)<Pick<ProgressLoaderProps, "percentage">>`
  clip: rect(
    0px,
    calc(${({ theme }) => theme.loader.size} / 2),
    ${({ theme }) => theme.loader.size},
    0px
  );

  transform: rotate(
    ${({ percentage }) => percentageToDegree(percentage) + "deg"}
  );

  background-color: ${({ theme }) => theme.loader.loaderColor.loaderBar};
`;

const InsideCircle = styled.div`
  position: absolute;
  width: calc(${({ theme }) => theme.loader.size} * 0.8);
  height: calc(${({ theme }) => theme.loader.size} * 0.8);
  margin-top: calc((${({ theme }) => theme.loader.size} * 0.2) / 2);
  margin-left: calc((${({ theme }) => theme.loader.size} * 0.2) / 2);

  border-radius: 50%;

  background: ${({ theme }) => theme.loader.background};
`;

const ProgressLoader: FC<ProgressLoaderProps> = (props) => {
  return (
    <ProgressLoaderWrapper>
      <Circle>
        <MaskFull percentage={props.percentage}>
          <Fill percentage={props.percentage} />
        </MaskFull>
        <MaskHalf>
          <Fill percentage={props.percentage} />
        </MaskHalf>
        <InsideCircle />
      </Circle>
    </ProgressLoaderWrapper>
  );
};

export default ProgressLoader;
