import React, { FC, ReactNode, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { Text } from "../Typography";
import { spacingTokens } from "../../types/tokens";

import Box from "../Box/Box";

export interface PanelsItems {
  title: string | ReactNode;
  content: ReactNode;
  disabled?: boolean;
  padding?: spacingTokens;
}

export interface PanelProps {
  panelsItems: PanelsItems[];
  openedPanelIndex?: number | null;
  openedPanelIndexCb?: (index: number) => void;
  expandButtonAlign?: "left" | "right";
}

const PanelContainer = styled(Box)<{ disabled: boolean }>`
  ${({ disabled, theme }) =>
    disabled &&
    css`
      background-color: ${theme.colors.neutral[100]};
      &,
      div {
        cursor: not-allowed;
        pointer-events: none;
      }
    `}

  & + div {
    margin-top: ${({ theme }) => theme.spacings.sm};
  }
`;

const PanelTitle = styled.div<{ expandAlign: "left" | "right" }>`
  display: flex;
  align-items: center;
  justify-content: ${({ expandAlign }) =>
    expandAlign === "right" ? "space-between" : "flex-start"};
  padding: ${({ theme }) => theme.spacings.xbig};

  cursor: pointer;

  svg {
    margin: ${({ theme }) => theme.icons.panel.spacing};

    color: ${({ theme }) => theme.icons.panel.color};
  }
`;

const Panel: FC<PanelProps> = ({
  panelsItems,
  openedPanelIndex,
  openedPanelIndexCb,
  expandButtonAlign = "left",
  ...props
}) => {
  const [expanded, setExpanded] = useState<number | null>();

  const handleToggle = (index: number) => {
    openedPanelIndexCb && openedPanelIndexCb(index);
    if (expanded === index) {
      setExpanded(null);
      return;
    }

    setExpanded(index);
  };

  useEffect(() => {
    if (expanded !== openedPanelIndex) {
      setExpanded(openedPanelIndex);
    }
  }, [openedPanelIndex]);

  return (
    <>
      {panelsItems.map(
        ({ title, content, disabled = false, padding = "xbig" }, index) => (
          <PanelContainer
            display="flex"
            align="stretch"
            justify="flex-start"
            shadow="small"
            borderRadius="sm"
            borderWidth="xxxxsm"
            borderColor="neutral"
            borderShade="200"
            backgroundColor="white"
            padding="zero"
            key={index}
            disabled={disabled}
            {...props}
          >
            <PanelTitle
              expandAlign={expandButtonAlign}
              onClick={() => handleToggle(index)}
            >
              <Text type="paragraphLarge">{title}</Text>
              {expanded === index ? <BsChevronUp /> : <BsChevronDown />}
            </PanelTitle>
            {expanded === index && (
              <Box
                display="flex"
                align="stretch"
                justify="flex-start"
                padding={padding}
              >
                {content}
              </Box>
            )}
          </PanelContainer>
        )
      )}
    </>
  );
};

export default Panel;
