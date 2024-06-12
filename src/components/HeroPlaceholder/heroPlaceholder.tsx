import Heading from "../Heading/heading";
import styles from "./HeroPlaceholder.module.css";
import { ReactComponent as HeroPlaceholderImage } from "./placeholderImage.svg";

export const HeroPlaceholder: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.imageBackground}>
        <Heading type="h1" as="h3" color="white">
          Something is about to happen
        </Heading>
        <Heading type="h1" color="white">
          Come back soon!
        </Heading>
        <HeroPlaceholderImage />
      </div>
    </section>
  );
};
