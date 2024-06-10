import { PropsWithChildren } from "react";
import styles from "./content.module.css";
import classNames from "classnames";

interface Props {
  className?: string;
}

export const Content: React.FC<PropsWithChildren<Props>> = ({
  className,
  children,
}) => {
  return (
    <div className={classNames(styles.content, className)}>{children}</div>
  );
};
