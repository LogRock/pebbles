import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../Button";
import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";

export interface AlertProps {
  title?: React.ReactNode;
  status?: "neutral" | "primary" | "success" | "warning" | "error";
  visible?: boolean;
  mainButtonContent?: React.ReactNode;
  auxButtonContent?: React.ReactNode;
  onMainButtonClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onAuxButtonClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  sticky?: boolean;
  icon?: React.ReactNode;
}

export interface AlertInlineProps extends AlertProps {
  onCloseRequested: (event: React.MouseEvent<HTMLDivElement>) => void;
  showCloseButton?: boolean;
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
  margin: ${({ sticky }) => (sticky ? "4px 0px" : "0px")};
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

const StyledButton = styled(Button)<Pick<AlertInlineProps, "sticky">>`
  margin: ${({ sticky }) => (sticky ? "0px 4px" : undefined)};
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

const AlertInline: FC<AlertInlineProps> = ({
  status,
  sticky,
  title,
  icon,
  children,
  mainButtonContent,
  onMainButtonClick,
  auxButtonContent,
  onAuxButtonClick,
  onCloseRequested,
  showCloseButton,
}) => {
  const btnStyle: any = mainButtonStyle[status || "primary"].buttonStyle;
  const variant: any = mainButtonStyle[status || "primary"].variant;
  const btnSize: any = sticky ? "xSmall" : "small";

  const hintBtnStyle: any = sticky ? btnStyle : "tertiary";
  const hintVariant: any = sticky ? variant : "primary";

  return (
    <AlertWrapper status={status} sticky={sticky || false}>
      {icon && (
        <IconPanel sticky={sticky || false} status={status}>
          {icon}
        </IconPanel>
      )}
      <MainPanel sticky={sticky || false}>
        {!sticky && !!title && <Title status={status}>{title}</Title>}
        {!!children && (
          <Description sticky={sticky || false}>{children}</Description>
        )}
        {(!!mainButtonContent || !!auxButtonContent) && (
          <Actions>
            <StyledButton
              onClick={(event) => {
                onMainButtonClick && onMainButtonClick(event);
              }}
              buttonStyle={btnStyle}
              variant={variant}
              buttonSize={btnSize}
              sticky={sticky}
            >
              {mainButtonContent}
            </StyledButton>
            <StyledButton
              buttonStyle={hintBtnStyle}
              variant={hintVariant}
              onClick={(event) => {
                onAuxButtonClick && onAuxButtonClick(event);
              }}
              buttonSize={btnSize}
              sticky={sticky}
            >
              {auxButtonContent}
            </StyledButton>
          </Actions>
        )}
      </MainPanel>
      {showCloseButton && (
        <IconPanel
          onClick={(event) => {
            onCloseRequested(event);
          }}
          status={status}
          sticky={sticky || false}
        >
          <Icon path={mdiClose} size={0.7} />
        </IconPanel>
      )}
    </AlertWrapper>
  );
};

const Alert: FC<AlertProps> = ({
  visible = true,
  status,
  onMainButtonClick,
  onAuxButtonClick,
  ...props
}) => {
  const [isAlertVisible, setIsAlertVisible] = useState(visible);
  const [statusState, setStatusState] = useState(status);

  useEffect(() => {
    setStatusState(statusState);
  }, [status]);

  const onButtonClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    try {
      if (onMainButtonClick) onMainButtonClick(event);
      setIsAlertVisible(false);
    } catch (e) {
      setStatusState("error");
    }
  };
  const onHintClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    try {
      if (onAuxButtonClick) onAuxButtonClick(event);
      setIsAlertVisible(false);
    } catch (e) {
      setStatusState("error");
    }
  };
  return (
    <>
      {isAlertVisible && (
        <AlertInline
          {...props}
          status={statusState}
          onCloseRequested={() => setIsAlertVisible(false)}
          onMainButtonClick={onButtonClickHandler}
          onAuxButtonClick={onHintClickHandler}
        />
      )}
    </>
  );
};

export default Alert;
