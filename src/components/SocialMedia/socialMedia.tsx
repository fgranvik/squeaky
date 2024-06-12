import React from "react";
import styles from "./socialMedia.module.css";
import Heading from "../Heading/heading";
import classNames from "classnames";
import Margin from "../Margin/margin";

import { ReactComponent as YoutubeIcon } from "../../images/icons/youtube.svg";
import { ReactComponent as InstagramIcon } from "../../images/icons/instagram.svg";
import { ReactComponent as FacebookIcon } from "../../images/icons/facebook.svg";

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
          <Heading type="h2" as="h3" color={inverted ? "white" : undefined}>
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
          aria-label="Follow my adventures on Youtube"
        >
          <YoutubeIcon className={styles.icon} />
        </a>
        <a
          href="https://www.instagram.com/squeakyadventures"
          rel="noreferrer"
          target="_blank"
          aria-label="Follow my adventures on Instagram"
        >
          <InstagramIcon className={styles.icon} />
        </a>
        <a
          href="https://www.facebook.com/SqueakyAdventuresSE"
          rel="noreferrer"
          target="_blank"
          aria-label="Follow my adventures on Facebook"
        >
          <FacebookIcon className={styles.icon} />
        </a>
      </div>
    </>
  );
};
