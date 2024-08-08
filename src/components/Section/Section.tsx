import { PropsWithChildren } from "react";
import styles from "./Section.module.css";

interface Prop {}

export const Section: React.FC<PropsWithChildren<Prop>> = ({ children }) => {
  return <section className={styles.section}>{children}</section>;
};
