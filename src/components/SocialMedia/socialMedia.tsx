import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./socialMedia.module.css";
import {
  faFacebookSquare,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Heading from "../Heading/heading";
import classNames from "classnames";
import Margin from "../Margin/margin";

interface Props {
  showHeader?: boolean;
  inverted?: boolean;
  size?: "small" | "medium" | "large";
}

export const SocialMedia: React.FC<Props> = ({
  showHeader = true,
  inverted,
  size = "small",
}) => {
  return (
    <>
      {showHeader && (
        <>
          <Heading type="h3" color={inverted ? "white" : undefined}>
            Follow me on social media
          </Heading>
          <Margin bottom={32} />
        </>
      )}
      <div
        className={classNames([
          styles.socialMedia,
          inverted ? styles.inverted : null,
          size ? styles[size] : null,
        ])}
      >
        <a
          href="https://www.youtube.com/@squeakyadventures_se"
          rel="noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faYoutube} className={styles.icon} />
        </a>
        <a
          href="https://www.instagram.com/squeakyadventures"
          rel="noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
        </a>
        <a
          href="https://www.facebook.com/SqueakyAdventuresSE"
          rel="noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faFacebookSquare} className={styles.icon} />
        </a>
      </div>
    </>
  );
};
