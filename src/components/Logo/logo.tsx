import React from "react";
import icon from "../../images/icon_transparent.png";

interface LogoProps {
  size?: "small" | "medium" | "large" | number;
}

const Logo: React.FC<LogoProps> = ({ size = "medium" }) => {
  let width: number;
  let height: number;

  if (typeof size === "number") {
    width = size;
    height = size;
  } else {
    switch (size) {
      case "small":
        width = 50;
        height = 50;
        break;
      case "large":
        width = 150;
        height = 150;
        break;
      case "medium":
      default:
        width = 100;
        height = 100;
        break;
    }
  }

  return (
    <img src={icon} alt="Squeaky Adventures Icon" style={{ width, height }} />
  );
};

export default Logo;
