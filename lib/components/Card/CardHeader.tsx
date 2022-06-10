import React, { FC } from "react";

import { CardProps } from "./Card.types";

const CardHeader: FC<CardProps> = ({ children, ...rest }) => {
  return <div {...rest}>{children}</div>;
};

export default CardHeader;
