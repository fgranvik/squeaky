import styles from "./Header.module.css";
import { HeaderMenu } from "./HeaderMenu";
import { ReactComponent as Logo } from "../../images/logo_horizontal.svg";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Link to="/" aria-label="Go to the startpage of squeakyadventures.com">
        <Logo className={styles.logo} />
      </Link>
      <HeaderMenu />
    </header>
  );
};
