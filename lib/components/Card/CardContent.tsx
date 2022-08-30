import React, { FC } from "react";

const CardContent: FC = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export default CardContent;
