import React, { FC } from "react";

import { CardProps } from "./Card.types";

const CardHeader: FC<CardProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default CardHeader;
