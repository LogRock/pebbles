import React, { FC, ReactNode, useEffect, useState } from "react";
import styled from "styled-components";
import Icon from "@mdi/react";
import { mdiChevronDown, mdiChevronUp } from "@mdi/js";
import { ParagraphLarge } from "../Typography";
import Card from "../Card";

export interface PanelsItems {
  title: string;
  content: ReactNode;
}

export interface PanelProps {
  panelsItems: PanelsItems[];
  openedPanelIndex?: number;
  openedPanelIndexCb?: (index: number) => void;
}

const PanelContainer = styled(Card)`
  & + div {
    margin-top: ${({ theme }) => theme.spacings.sm};
  }
`;

const PanelTitle = styled.div`
  display: flex;
  justify-content: flex-start;

  cursor: pointer;

  svg {
    margin-left: 18px;

    color: ${({ theme }) => theme.colors.primary[500]};
  }
`;

const Panel: FC<PanelProps> = ({
  panelsItems,
  openedPanelIndex,
  openedPanelIndexCb,
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
      {panelsItems.map(({ title, content }, index) => (
        <PanelContainer key={index} {...props}>
          <PanelTitle onClick={() => handleToggle(index)}>
            <ParagraphLarge weight="bolder">{title}</ParagraphLarge>
            <Icon
              path={expanded === index ? mdiChevronUp : mdiChevronDown}
              size={1}
            />
          </PanelTitle>
          {expanded === index && content}
        </PanelContainer>
      ))}
    </>
  );
};

export default Panel;
