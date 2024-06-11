import React, { FC } from "react";
import styles from "./heading.module.css";

interface HeadingProps {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  color?: string;
}

const Heading: FC<HeadingProps> = ({ type, as, children, color }) => {
  const Tag = type;
  const tagType = as || type;

  return (
    <Tag className={styles[tagType]} style={{ color: color }}>
      {children}
    </Tag>
  );
};

export default Heading;
