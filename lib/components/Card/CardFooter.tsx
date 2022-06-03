import React, { FC } from "react";

import { CardProps } from "./Card.types";

const CardFooter: FC<CardProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default CardFooter;
