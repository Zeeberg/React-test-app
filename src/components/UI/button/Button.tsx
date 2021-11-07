import React, { FC } from "react";
import { TypeVariant } from "../../../types/types";
import { CommonButton } from "./style";

interface ButtonProps {
  type?: TypeVariant;
}

const Button: FC<ButtonProps> = ({ children, type }) => {
  return <CommonButton type={type}>{children}</CommonButton>;
};

export default Button;
