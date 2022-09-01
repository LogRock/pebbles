import React, { FC } from "react";

const CardHeader: FC = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export default CardHeader;
