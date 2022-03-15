import React, { FC, useState } from "react";
import styled from "styled-components";
import Button from "../Button";
import Icon from "@mdi/react";
import { mdiClose, mdiInformationOutline } from "@mdi/js";

export interface AlertProps {
  title?: string;
  description?: string;
  hint?: string;
  status?: "neutral" | "primary" | "success" | "warning" | "error";
  visible?: boolean;
  labelButton?: string;
  onButtonClick?: () => void;
  onHintClick?: () => void;
}

export interface AlertInlineProps extends AlertProps {
  onCloseRequested: () => void;
}

const AlertWrapper = styled.div<Pick<AlertInlineProps, "status">>`
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

const IconPanel = styled.div<Pick<AlertInlineProps, "status">>`
  display: flex;
  justify-content: center;

  color: ${({ theme, status }) => theme.alert[status || "neutral"].iconColor};
  > * {
    cursor: pointer;
  }
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

const Title = styled.span<Pick<AlertInlineProps, "status">>`
  height: ${({ theme }) => theme.alert.title.height};

  color: ${({ theme, status }) => theme.alert[status || "neutral"].titleColor};
  font-size: ${({ theme }) => theme.alert.title.fontSize};
  font-weight: ${({ theme }) => theme.alert.title.fontWeight};
  line-height: ${({ theme }) => theme.alert.title.lineWeight};
`;

const Description = styled.span<Pick<AlertInlineProps, "status">>`
  margin: 8px 0px;

  font-size: ${({ theme }) => theme.alert.description.fontSize};
  font-weight: ${({ theme }) => theme.alert.description.fontWeight};
  line-height: ${({ theme }) => theme.alert.description.lineHeight};
`;

const AlertInline: FC<AlertInlineProps> = (props) => {
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
            <Button
              onClick={() => {
                props.onButtonClick && props.onButtonClick();
              }}
              buttonStyle="outlined"
              variant="primary"
            >
              {props.labelButton}
            </Button>
          )}
          {props.status === "primary" && (
            <Button
              onClick={() => {
                props.onButtonClick && props.onButtonClick();
              }}
              buttonStyle="primary"
              variant="primary"
            >
              {props.labelButton}
            </Button>
          )}
          {props.status === "success" && (
            <Button
              onClick={() => {
                props.onButtonClick && props.onButtonClick();
              }}
              buttonStyle="primary"
              variant="primary"
            >
              {props.labelButton}
            </Button>
          )}
          {props.status === "warning" && (
            <Button
              onClick={() => {
                props.onButtonClick && props.onButtonClick();
              }}
              buttonStyle="secondary"
              variant="primary"
            >
              {props.labelButton}
            </Button>
          )}
          {props.status === "error" && (
            <Button
              onClick={() => {
                props.onButtonClick && props.onButtonClick();
              }}
              buttonStyle="primary"
              variant="destructive"
            >
              {props.labelButton}
            </Button>
          )}
          <Button
            buttonStyle="tertiary"
            onClick={() => {
              props.onHintClick && props.onHintClick();
            }}
          >
            {props.hint}
          </Button>
        </Actions>
      </MainPanel>
      <IconPanel
        onClick={() => {
          props.onCloseRequested();
        }}
        status={props.status}
      >
        <Icon path={mdiClose} size={0.7} />
      </IconPanel>
    </AlertWrapper>
  );
};

const Alert: FC<AlertProps> = ({ visible = true, ...props }) => {
  const [isAlertVisible, setIsAlertVisible] = useState(visible);

  const onButtonClickHandler = () => {
    try {
      props.onButtonClick && props.onButtonClick();
      setIsAlertVisible(false);
    } catch (e) {
      props.status = "error";
    }
  };
  const onHintClickHandler = () => {
    try {
      props.onHintClick && props.onHintClick();
      setIsAlertVisible(false);
    } catch (e) {
      props.status = "error";
    }
  };
  return (
    <>
      {isAlertVisible && (
        <AlertInline
          {...props}
          onCloseRequested={() => setIsAlertVisible(false)}
          onButtonClick={() => {
            onButtonClickHandler();
          }}
          onHintClick={() => {
            onHintClickHandler();
          }}
        />
      )}
    </>
  );
};

export default Alert;
