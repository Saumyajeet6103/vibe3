import React from "react";
import PropTypes from "prop-types";

const shapes = {
  icbCircleBorder15: "rounded-radius15",
  icbCircleBorder25: "rounded-radius25",
  icbRoundedBorder8: "rounded-radius8",
  icbCircleBorder18: "rounded-radius18",
  icbCircleBorder21: "rounded-radius21",
  CircleBorder14: "rounded-radius14",
  RoundedBorder10: "rounded-radius10",
  CircleBorder18: "rounded-radius18",
};
const variants = {
  icbOutline: "bg-gray_900_26",
  icbOutlineGray5003f: "bg-white_A700 shadow-bs",
  icbOutlineGray100: "outline outline-[0.75px] outline-gray_100",
  icbFillGray50: "bg-gray_50",
  icbFillWhiteA700: "bg-white_A700",
  icbFillGray90067: "bg-gray_900_67",
  Outline: "bg-gray_900_26 text-white_A700",
  FillWhiteA700: "bg-white_A700 text-gray_900",
  OutlineGray100: "outline outline-[0.75px] outline-gray_100 text-black_900",
  OutlineWhiteA700:
    "outline outline-[0.75px] outline-white_A700 text-white_A700",
  FillGray900: "bg-gray_900 text-white_A700",
  Outline_1: "bg-gray_900 text-white_A700",
  FillGray100: "bg-gray_100 text-gray_500",
  FillGreen600: "bg-green_600 text-white_A700",
  OutlineGray900: "outline outline-[0.5px] outline-gray_900 text-gray_900",
  FillGray50: "bg-gray_50 text-black_900",
  FillBlack900: "bg-black_900 text-white_A700",
};
const sizes = {
  smIcn: "p-[6px]",
  mdIcn: "p-[10px]",
  lgIcn: "p-[13px]",
  sm: "p-[7px]",
  md: "pr-[9px] py-[9px]",
  lg: "p-[11px]",
  xl: "pr-[15px] py-[15px]",
  "2xl": "p-[16px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "icbCircleBorder15",
    "icbCircleBorder25",
    "icbRoundedBorder8",
    "icbCircleBorder18",
    "icbCircleBorder21",
    "CircleBorder14",
    "RoundedBorder10",
    "CircleBorder18",
  ]),
  variant: PropTypes.oneOf([
    "icbOutline",
    "icbOutlineGray5003f",
    "icbOutlineGray100",
    "icbFillGray50",
    "icbFillWhiteA700",
    "icbFillGray90067",
    "Outline",
    "FillWhiteA700",
    "OutlineGray100",
    "OutlineWhiteA700",
    "FillGray900",
    "Outline_1",
    "FillGray100",
    "FillGreen600",
    "OutlineGray900",
    "FillGray50",
    "FillBlack900",
  ]),
  size: PropTypes.oneOf([
    "smIcn",
    "mdIcn",
    "lgIcn",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
  ]),
};
Button.defaultProps = { className: "", shape: "", variant: "", size: "" };

export { Button };
