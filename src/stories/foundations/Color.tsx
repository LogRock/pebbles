import React, { FC, useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { colorTokens, shadeTokens } from "../../../lib/types/tokens";

const ColorBox = styled.div<{ color: colorTokens; shade: shadeTokens }>`
  width: 147px;
  height: 72px;
  background: ${({ theme, color, shade }) => {
    return theme.colors[color][shade];
  }};
  border-radius: 4px;
`;

const Values = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  width: 147px;
  text-transform: uppercase;
  float: left;
  padding: 10px;
`;

const Color: FC<{ color: colorTokens; shade: shadeTokens }> = ({
  color,
  shade,
}) => {
  const theme = useContext(ThemeContext);

  return (
    <Wrapper>
      <ColorBox color={color} shade={shade} />
      <Values>
        <div>{shade}</div>
        <div>{theme.colors[color][shade]}</div>
      </Values>
    </Wrapper>
  );
};

export default Color;
