import Heading from "../Heading/heading";
import { LatestYouTubeVideo } from "../Youtube/Player/youtubeLatest";
import styles from "./hero.module.css";

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
