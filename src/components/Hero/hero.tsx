import Heading from "../Heading/heading";
import styles from "./hero.module.css";
import { LatestYouTubeVideo } from "../Youtube/Player/youtubeLatest";

export const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <Heading type="h1" as="h3" color="white">
        Explore my latest adventures
      </Heading>
      <Heading type="h1" color="white">
        On Youtube
      </Heading>

      <LatestYouTubeVideo />
    </section>
  );
};
