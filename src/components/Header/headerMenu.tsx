import styles from "./header.module.css";
import { SocialMedia } from "../SocialMedia/socialMedia";

export const HeaderMenu: React.FC = () => {
  return (
    <nav className={styles.headerMenu}>
      <div className={styles.links}>
        <a href="/">Home</a>
        <a href="/about">About</a>
      </div>
      <div className={styles.social}>
        <a href="/contact">Contact</a>
        <SocialMedia showHeader={false} />
      </div>
    </nav>
  );
};
