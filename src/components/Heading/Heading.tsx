import React, { FC } from "react";
import styles from "./Heading.module.css";

interface HeadingProps {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  color?: string;
}

const Heading: FC<HeadingProps> = ({ type, as, children, color }) => {
  const Tag = type;
  const tagType = as || type;

  const text = typeof children === "string" ? children : "";
  const parts = text.split(/:(.*)/);

  return (
    <Tag className={styles[tagType]} style={{ color: color }}>
      {parts.length > 1 ? (
        <>
          {parts[0]}:<span className={styles.purple}>{parts[1]}</span>
        </>
      ) : (
        children
      )}
    </Tag>
  );
};

export default Heading;
