import { PropsWithChildren } from "react";
import styles from "./content.module.css";
import classNames from "classnames";

interface Props {
  className?: string;
  width?: "default" | "narrow" | "full";
  align?: "center" | "left" | "right";
}

export const Content: React.FC<PropsWithChildren<Props>> = ({
  className,
  children,
  width = "default",
  align = "left",
}) => {
  return (
    <div className={classNames(styles.contentWrapper, styles[align])}>
      <div className={classNames(styles[width], className)}>{children}</div>
    </div>
  );
};
