// import { Hero } from "../Hero/hero";
import { HeroPlaceholder } from "../HeroPlaceholder/heroPlaceholder";
import Margin from "../Margin/margin";
// import { MediaList } from "../MediaList/mediaList";
import { Section } from "../Section/section";
import styles from "./main.module.css";

export const Main: React.FC = () => {
  return (
    <main className={styles.main}>
      <HeroPlaceholder />
      {/* <Hero /> */}
      {/* <Section>
        <MediaList title="Latest from Youtube" />
      </Section>
      <Section>
        <MediaList title="Latest from Instagram" />
      </Section> */}
      <Margin bottom={128} />
    </main>
  );
};
