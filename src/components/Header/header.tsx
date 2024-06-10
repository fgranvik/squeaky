import styles from "./header.module.css";
import { HeaderMenu } from "./headerMenu";
import { ReactComponent as Logo } from "../../images/logo_horizontal.svg";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <HeaderMenu />
    </header>
  );
};
