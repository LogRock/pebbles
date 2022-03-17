import React, { FC } from "react";
import {
  ListItemContentEnd,
  ListItemContentStart,
  ListItemDescription,
  ListItemLabel,
  ListItemMainContent,
  ListItemWrapper,
} from "./ListItem.styled";
import { ListItemProps } from "./ListItem.types";

const ListItem: FC<ListItemProps> = ({
  alignment = "start",
  contentEnd,
  contentStart,
  description,
  label,
  size = "medium",
  ...props
}) => {
  return (
    <ListItemWrapper size={size} {...props}>
      {contentStart && (
        <ListItemContentStart>{contentStart}</ListItemContentStart>
      )}
      <ListItemMainContent alignment={alignment}>
        {description && (
          <ListItemDescription>{description}</ListItemDescription>
        )}
        {label && <ListItemLabel>{label}</ListItemLabel>}
      </ListItemMainContent>
      {contentEnd && <ListItemContentEnd>{contentEnd}</ListItemContentEnd>}
    </ListItemWrapper>
  );
};

export default ListItem;
