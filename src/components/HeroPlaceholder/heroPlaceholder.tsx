import Heading from "../Heading/heading";
import { LatestYouTubeVideo } from "../Youtube/Player/youtubeLatest";
import styles from "./HeroPlaceholder.module.css";

export const HeroPlaceholder: React.FC = () => {
  return (
    <section className={styles.hero}>
      <Heading type="h1" as="h3" color="white">
        Something is about to happen
      </Heading>
      <Heading type="h1" color="white">
        Come back soon!
      </Heading>

      <img
        src="https://placehold.co/900x500?text=?"
        alt="Something is about to happen..."
        style={{ position: "relative", top: 50 }}
      />
    </section>
  );
};
