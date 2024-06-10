import { ContactForm } from "../ContactForm/contactForm";
import { Content } from "../Content/content";
import Logo from "../Logo/logo";
import Margin from "../Margin/margin";
import { SocialMedia } from "../SocialMedia/socialMedia";
import styles from "./footer.module.css";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Content className={styles.footerColumns}>
        <div>
          <Logo size={250} />
        </div>
        <div className={styles.divider}></div>
        <div>
          <ContactForm />
          <Margin bottom={32} />
          <SocialMedia inverted={true} size="large" />
        </div>
      </Content>
      <p>&copy; 2024 Squeaky Adventures. All rights reserved.</p>
    </footer>
  );
};
