import React, { FC } from "react";

import {
  StatusTagProps,
  STATUS_TAG_SIZES,
  STATUS_TAG_VARIANTS,
} from "./StatusTag.types";
import { StatusTagContainer } from "./StatusTag.styled";

const StatusTag: FC<StatusTagProps> = ({
  size = STATUS_TAG_SIZES.MEDIUM,
  variant = STATUS_TAG_VARIANTS.NEUTRAL_ALT,
  ...props
}) => {
  return <StatusTagContainer size={size} variant={variant} {...props} />;
};

export default StatusTag;
