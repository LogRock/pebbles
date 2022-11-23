import React, { FC, useContext } from "react";
import { BsChevronDown, BsChevronExpand, BsChevronUp } from "react-icons/bs";
import { ThemeContext } from "styled-components";
import { OrderingEnum, OrderingProps } from "./Table.types";

const Ordering: FC<OrderingProps> = ({ currentOrder }) => {
  const theme = useContext(ThemeContext);

  if (currentOrder === OrderingEnum.ASC)
    return <BsChevronUp size={theme.spacings.md} />;

  if (currentOrder === OrderingEnum.DESC)
    return <BsChevronDown size={theme.spacings.md} />;

  return <BsChevronExpand size={theme.spacings.big} />;
};

export default Ordering;
