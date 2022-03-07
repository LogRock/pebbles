import styled from "styled-components";
import React, { FC } from "react";

const StyledLoader = styled.div`
  width: ${({ theme }) => theme.loader.size};
  height: ${({ theme }) => theme.loader.size};

  animation: spin 1.6s linear infinite;

  border: 4px solid ${({ theme }) => theme.loader.loaderColor.background};
  border-radius: 50%;
  border-top-color: ${({ theme }) => theme.loader.loaderColor.loaderBar};
  border-right-color: ${({ theme }) => theme.loader.loaderColor.loaderBar};
  stroke-linecap: round;

  @keyframes spin {
    to {
      transform: rotate(1turn);
    }
  }
`;

const StyledDiv = styled.div`
  display: flex;
  flex-flow: column;
  align-content: center;
  align-items: center;
`;

const Label = styled.span`
  margin: 4px 0px;

  font-family: ${({ theme }) => theme.loader.fontFamily};
`;

export type LoaderProps = {
  message: string;
};

const Loader: FC<LoaderProps> = (props) => {
  return (
    <StyledDiv>
      <StyledLoader />
      <Label>{props.message}</Label>
    </StyledDiv>
  );
};

export default Loader;
