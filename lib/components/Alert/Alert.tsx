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
  sticky?: boolean;
}

export interface AlertInlineProps extends AlertProps {
  onCloseRequested: () => void;
}

const AlertWrapper = styled.div<Pick<AlertInlineProps, "status" | "sticky">>`
  display: flex;
  position: static;
  box-sizing: border-box;
  flex-direction: row;
  align-items: flex-start;
  padding: ${({ sticky }) => (sticky ? "6px 10px" : "12px 20px")};
  margin: 8px;

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

const IconPanel = styled.div<Pick<AlertInlineProps, "status" | "sticky">>`
  display: flex;
  justify-content: center;
  margin: ${({ sticky }) => (sticky ? "4px 0px" : "2px 0px")};
  color: ${({ theme, status }) => theme.alert[status || "neutral"].iconColor};
  > * {
    cursor: pointer;
  }
`;

const MainPanel = styled.div<Pick<AlertInlineProps, "sticky">>`
  display: flex;
  flex-direction: ${({ sticky }) => (sticky ? "row" : "column")};
  width: 100%;
  padding: 0px 10px;
  justify-content: space-between;
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

const Description = styled.span<Pick<AlertInlineProps, "status" | "sticky">>`
  margin: ${({ sticky }) => (sticky ? "4px 0px" : "8px 0px")};

  font-size: ${({ theme }) => theme.alert.description.fontSize};
  font-weight: ${({ theme }) => theme.alert.description.fontWeight};
  line-height: ${({ theme }) => theme.alert.description.lineHeight};
`;

const StyledButton = styled(Button)`
  margin: 0px 4px;
`;

const mainButtonStyle = {
  neutral: {
    buttonStyle: "outlined",
    variant: "primary",
  },
  primary: {
    buttonStyle: "primary",
    variant: "primary",
  },
  success: {
    buttonStyle: "primary",
    variant: "primary",
  },
  warning: {
    buttonStyle: "secondary",
    variant: "primary",
  },
  error: {
    buttonStyle: "primary",
    variant: "destructive",
  },
};

const AlertInline: FC<AlertInlineProps> = (props) => {
  const btnStyle: any = mainButtonStyle[props.status || "primary"].buttonStyle;
  const variant: any = mainButtonStyle[props.status || "primary"].variant;
  const btnSize: any = props.sticky ? "xSmall" : "small";

  const hintBtnStyle: any = props.sticky ? btnStyle : "tertiary";
  const hintVariant: any = props.sticky ? variant : "primary";

  return (
    <AlertWrapper status={props.status} sticky={props.sticky || false}>
      <IconPanel sticky={props.sticky || false} status={props.status}>
        <Icon path={mdiInformationOutline} size={0.7} />
      </IconPanel>
      <MainPanel sticky={props.sticky || false}>
        {!props?.sticky && <Title status={props.status}>{props.title}</Title>}
        <Description sticky={props.sticky || false}>
          {props.description}
        </Description>
        <Actions>
          <StyledButton
            onClick={() => {
              props.onButtonClick && props.onButtonClick();
            }}
            buttonStyle={btnStyle}
            variant={variant}
            buttonSize={btnSize}
          >
            {props.labelButton}
          </StyledButton>
          <StyledButton
            buttonStyle={hintBtnStyle}
            variant={hintVariant}
            onClick={() => {
              props.onHintClick && props.onHintClick();
            }}
            buttonSize={btnSize}
          >
            {props.hint}
          </StyledButton>
        </Actions>
      </MainPanel>
      <IconPanel
        onClick={() => {
          props.onCloseRequested();
        }}
        status={props.status}
        sticky={props.sticky || false}
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
