import React, { FC } from "react";

const CardFooter: FC = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export default CardFooter;
