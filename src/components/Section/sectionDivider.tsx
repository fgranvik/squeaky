import { PropsWithChildren } from "react";
import styles from "./section.module.css";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Prop {
  icon?: IconProp;
}

export const SectionDivider: React.FC<PropsWithChildren<Prop>> = ({
  children,
  icon,
}) => {
  return (
    <div className={styles.sectionDivider}>
      {icon && (
        <FontAwesomeIcon icon={icon} className={styles.sectionDividerIcon} />
      )}
    </div>
  );
};
