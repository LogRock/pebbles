import React, { FC } from "react";

/**
 * @deprecated in favor of Card2
 */
const CardContent: FC = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

/**
 * @deprecated in favor of Card2
 */
export default CardContent;
