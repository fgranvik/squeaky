import { PropsWithChildren } from "react";
import styles from "./Main.module.css";

interface Props {
  style?: React.CSSProperties;
}

export const Main: React.FC<PropsWithChildren<Props>> = ({
  children,
  style,
}) => {
  return (
    <main className={styles.main} style={style}>
      {children}
    </main>
  );
};
