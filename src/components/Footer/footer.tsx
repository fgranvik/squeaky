import { Link } from "react-router-dom";
import { ContactForm } from "../ContactForm/contactForm";
import { Content } from "../Content/content";
import Logo from "../Logo/logo";
import Margin from "../Margin/margin";
import { SocialMedia } from "../SocialMedia/socialMedia";
import styles from "./footer.module.css";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Content width="full" align="center" className={styles.footerColumns}>
        <div className={styles.footerColumnLeft}>
          <Logo size={250} />
          <nav className={styles.legalNav}>
            <Link to="/sitemap" className={styles.link}>
              Sitemap
            </Link>
            <Link to="/cookies" className={styles.link}>
              Cookies
            </Link>
          </nav>
        </div>
        <div className={styles.divider}></div>
        <div>
          <ContactForm />
          <Margin bottom={64} />
          <SocialMedia inverted={true} size="large" />
        </div>
      </Content>
      <Margin bottom={32} />
      <p className={styles.copyright}>
        &copy; 2024 Squeaky Adventures. All rights reserved.
      </p>
    </footer>
  );
};
