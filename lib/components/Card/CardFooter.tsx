import React, { FC } from "react";

import { CardProps } from "./Card.types";

const CardFooter: FC<CardProps> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export default CardFooter;
