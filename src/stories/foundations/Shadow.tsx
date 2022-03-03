import React, { FC } from "react";
import styled from "styled-components";

const ShadowBox = styled.div<{ variant: string }>`
  width: 176px;
  height: 176px;
  background: white;
  border-radius: 50%;
  box-shadow: ${({ theme, variant }) => theme.shadows[variant]};
`;

const Values = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  margin-top: 10px;
`;

const Wrapper = styled.div`
  width: 176px;
  float: left;
  padding: 10px;
`;

const Shadow: FC<{ variant: string }> = ({ variant }) => {
  return (
    <Wrapper>
      <ShadowBox variant={variant} />
      <Values>
        <div>{variant}</div>
      </Values>
    </Wrapper>
  );
};

export default Shadow;
