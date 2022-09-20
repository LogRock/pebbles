import React, { FC, ReactNode, useState } from "react";
import styled from "styled-components";
import Icon from "@mdi/react";
import { mdiChevronDown, mdiChevronUp } from "@mdi/js";
import { ParagraphLarge } from "../Typography/Typography.styled";
import Card from "../Card";

interface PanelsItems {
  title: string;
  content: ReactNode;
};

interface PanelProps {
  panelsItems: PanelsItems[];
}

const PanelContainer = styled(Card)`
  & + div {
    margin-top: ${({theme}) => theme.spacings.sm};
  }
`;

const PanelTitle = styled.div`
  display: flex;
  justify-content: flex-start;

  cursor: pointer;

  svg {
    margin-left: 18px;

    color: ${({theme}) => theme.colors.primary[500]};
  }
`;

const Panel: FC<PanelProps> = ({ panelsItems, ...props }) => {
  const [selected, setSelected] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    if (selected === index) {
      return setSelected(null)
    };

    setSelected(index)
  }

  return (
    <>
      {panelsItems.map(({ title, content }, index) => (
        <PanelContainer key={index} {...props}>
          <PanelTitle onClick={() => handleToggle(index)}>
            <ParagraphLarge weight="bolder">{title}</ParagraphLarge>
            <Icon path={selected === index ? mdiChevronUp : mdiChevronDown} size={1} />
          </PanelTitle>
            {selected === index && content}
        </PanelContainer>
      ))}
    </>
  );
}

export default Panel;
