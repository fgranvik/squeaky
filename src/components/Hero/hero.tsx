import Heading from "../Heading/heading";
import styles from "./hero.module.css";

export const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <Heading type="h1" as="h3" color="white">
        Explore the latest adventures
      </Heading>
      <Heading type="h1" color="white">
        On Youtube
      </Heading>

      <img
        src="https://placehold.co/900x500?text=YouTube"
        alt="YouTube"
        style={{ position: "relative", top: 50 }}
      />

      {/* <iframe
        width="900"
        height="500"
        src="https://www.youtube.com/embed/ovLM9r0pgUk?si=Kz7e41zP4I_2YT91"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        frameBorder={0}
        style={{ position: "relative", top: 0, left: 0 }}
      ></iframe> */}
    </section>
  );
};
