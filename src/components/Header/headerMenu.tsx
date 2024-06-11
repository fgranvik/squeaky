import styles from "./header.module.css";
import { SocialMedia } from "../SocialMedia/socialMedia";
import { Link } from "react-router-dom";

export const HeaderMenu: React.FC = () => {
  return (
    <nav className={styles.headerMenu}>
      <div className={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <div className={styles.social}>
        <Link to="/contact">Contact</Link>
        <SocialMedia showHeader={false} />
      </div>
    </nav>
  );
};
