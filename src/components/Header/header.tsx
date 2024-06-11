import styles from "./header.module.css";
import { HeaderMenu } from "./headerMenu";
import { ReactComponent as Logo } from "../../images/logo_horizontal.svg";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <Logo className={styles.logo} />
      </Link>
      <HeaderMenu />
    </header>
  );
};
