import React, { PropsWithChildren } from "react";
import styles from "./Text.module.css";

interface Props {
  type?: "div" | "p" | "span" | "strong";
  color?: string;
}

export const Text: React.FC<PropsWithChildren<Props>> = ({
  children,
  type = "div",
  color,
}) => {
  const Tag = type;

  return (
    <Tag className={styles.text} style={{ color: color }}>
      {children}
    </Tag>
  );
};
