import React, { FC } from "react";
import styled from "styled-components";
import Button from "../Button";
import Icon from "@mdi/react";
import { mdiClose, mdiInformationOutline } from "@mdi/js";

export interface AlertProps {
  title?: string;
  description?: string;
  hint?: string;
  status?: "neutral" | "primary" | "success" | "warning" | "error";
}

const AlertWrapper = styled.div<Pick<AlertProps, "status">>`
  display: flex;
  position: static;
  box-sizing: border-box;
  flex-direction: row;
  align-items: flex-start;
  padding: 12px 20px;

  border: 1px solid
    ${({ theme, status }) => theme.alert[status || "neutral"].borderColor};
  border-radius: 2px;

  background: ${({ theme, status }) =>
    theme.alert[status || "neutral"].background};

  color: ${({ theme, status }) =>
    theme.alert[status || "neutral"].descriptionColor};
  font-family: ${({ theme }) => theme.alert.fontFamily};
  font-feature-settings: "salt" on;
`;

const IconPanel = styled.div<Pick<AlertProps, "status">>`
  display: flex;
  justify-content: center;

  color: ${({ theme, status }) => theme.alert[status || "neutral"].iconColor};
`;

const MainPanel = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px 10px;
`;

const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Title = styled.span<Pick<AlertProps, "status">>`
  height: 30px;
  height: ${({ theme }) => theme.alert.title.height};

  color: ${({ theme, status }) => theme.alert[status || "neutral"].titleColor};
  font-size: ${({ theme }) => theme.alert.title.fontSize};
  font-weight: ${({ theme }) => theme.alert.title.fontWeight};
  line-height: ${({ theme }) => theme.alert.title.lineWeight};
`;

const Description = styled.span<Pick<AlertProps, "status">>`
  height: 30px;

  font-size: ${({ theme }) => theme.alert.description.fontSize};
  font-weight: ${({ theme }) => theme.alert.description.fontWeight};
  line-height: ${({ theme }) => theme.alert.description.lineHeight};
`;

const Hint = styled.span`
  display: flex;
  align-items: center;
  height: 30px;
  margin: 0px 10px;

  color: #000000;
  font-size: ${({ theme }) => theme.alert.hint.fontSize};
  font-weight: ${({ theme }) => theme.alert.hint.fontWeight};
  line-height: ${({ theme }) => theme.alert.hint.lineHeight};
  text-align: center;
  text-decoration-line: underline;
`;

const AlertInline: FC<AlertProps> = (props) => {
  return (
    <AlertWrapper status={props.status}>
      <IconPanel status={props.status}>
        <Icon path={mdiInformationOutline} size={0.7} />
      </IconPanel>
      <MainPanel>
        <Title status={props.status}>{props.title}</Title>
        <Description>{props.description}</Description>
        <Actions>
          {(props.status === "neutral" || !props.status) && (
            <Button buttonStyle="outlined" variant="primary">
              {" "}
              OK{" "}
            </Button>
          )}
          {props.status === "primary" && (
            <Button buttonStyle="primary" variant="primary">
              {" "}
              OK{" "}
            </Button>
          )}
          {props.status === "success" && (
            <Button buttonStyle="primary" variant="primary">
              {" "}
              OK{" "}
            </Button>
          )}
          {props.status === "warning" && (
            <Button buttonStyle="secondary" variant="primary">
              {" "}
              OK{" "}
            </Button>
          )}
          {props.status === "error" && (
            <Button buttonStyle="primary" variant="destructive">
              {" "}
              OK{" "}
            </Button>
          )}
          <Hint> {props.hint}</Hint>
        </Actions>
      </MainPanel>
      <IconPanel status={props.status}>
        <Icon path={mdiClose} size={0.7} />
      </IconPanel>
    </AlertWrapper>
  );
};

export default AlertInline;
