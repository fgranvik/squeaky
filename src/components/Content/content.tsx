import { PropsWithChildren } from "react";
import styles from "./content.module.css";
import classNames from "classnames";

interface Props {
  className?: string;
  width?: "narrow" | "wide" | "full";
  position?: "center" | "left" | "right";
}

export const Content: React.FC<PropsWithChildren<Props>> = ({
  className,
  children,
  width = "narrow",
  position = "left",
}) => {
  return (
    <div className={classNames(styles.contentWrapper, styles[position])}>
      <div className={classNames(styles.content, className, width)}>
        {children}
      </div>
    </div>
  );
};
