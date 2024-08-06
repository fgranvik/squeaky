import styles from "./Header.module.css";
import { SocialMedia } from "../SocialMedia/SocialMedia";
import { Link } from "react-router-dom";

export const HeaderMenu: React.FC = () => {
  return (
    <nav className={styles.headerMenu}>
      <div className={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </div>
      <div className={styles.social}>
        <Link to="/contact">Contact</Link>
        <div className={styles.hiddenMobile}>
          <SocialMedia showHeader={false} />
        </div>
      </div>
    </nav>
  );
};
