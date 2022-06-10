import React, { FC } from "react";

import { CardProps } from "./Card.types";

const CardContent: FC<CardProps> = ({ children, ...rest }) => {
  return <div {...rest}>{children}</div>;
};

export default CardContent;
