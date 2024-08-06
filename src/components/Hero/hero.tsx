import Heading from "../Heading/Heading";
import { LatestYouTubeVideo } from "../Youtube/Player/LatestYouTubeVideo";
import styles from "./Hero.module.css";

export const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.imageBackground}>
        <div className={styles.headline}>
          <Heading type="h1" as="h3" color="white">
            Explore my latest adventures
          </Heading>
        </div>
        <LatestYouTubeVideo />
      </div>
    </section>
  );
};
