import React, { FC } from "react";

import { CardProps } from "./Card.types";

const CardContent: FC<CardProps> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export default CardContent;
