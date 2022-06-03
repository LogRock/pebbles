import React, { FC } from "react";

import { CardProps } from "./Card.types";

const CardContent: FC<CardProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default CardContent;
