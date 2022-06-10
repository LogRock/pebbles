import React, { FC } from "react";

import { CardProps } from "./Card.types";

const CardHeader: FC<CardProps> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export default CardHeader;
