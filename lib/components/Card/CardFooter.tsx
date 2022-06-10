import React, { FC } from "react";

import { CardProps } from "./Card.types";

const CardFooter: FC<CardProps> = ({ children, ...rest }) => {
  return <div {...rest}>{children}</div>;
};

export default CardFooter;
