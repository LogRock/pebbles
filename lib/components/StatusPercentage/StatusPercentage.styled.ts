import styled from "styled-components";

export const StatusPctWrapper = styled.div<{ fontSize: string }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  font-family: Archivo, sans-serif;
  font-size: ${(props: any) => (props.fontSize ? props.fontSize : "28px")};
  font-weight: 500;
  text-align: center;
`;
