import { PropsWithChildren } from "react";
import { ReactComponent as ArrowLeftIcon } from "../../images/icons/arrow-left.svg";
import styles from "./Navigate.module.css";
import { Link } from "react-router-dom";

interface Props {
  to: string;
}

export const NavigateBack: React.FC<PropsWithChildren<Props>> = ({
  to,
  children,
}) => {
  return (
    <Link to={to} className={styles.navigateBack}>
      <ArrowLeftIcon className={styles.icon} />
      {children}
    </Link>
  );
};
