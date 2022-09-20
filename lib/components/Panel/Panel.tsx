import React, { FC, ReactNode, useState } from "react";
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

const Panel: FC<PanelProps> = ({ panelsItems, ...props }) => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    if (expanded === index) {
      return setExpanded(null);
    }

    setExpanded(index);
  };

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
