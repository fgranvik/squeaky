import React, { FC } from "react";
import styles from "./heading.module.css";

interface HeadingProps {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  color?: string;
}

const Heading: FC<HeadingProps> = ({ type, as, children, color }) => {
  const Tag = as ?? type; // Use as if provided, otherwise fallback to type

  return (
    <Tag className={styles[Tag]} style={{ color: color }}>
      {children}
    </Tag>
  );
};

export default Heading;
