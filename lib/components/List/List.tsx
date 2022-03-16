import React, { FC } from "react";
import { ListWrapper } from "./List.styled";
import { ListProps } from "./List.types";

const List: FC<ListProps> = ({ ...props }) => {
  return <ListWrapper {...props} />;
};

export default List;
