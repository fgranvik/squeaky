import React, { useState } from "react";
import styles from "./Image.module.css";

interface Props {
  src: string | undefined;
  alt: string;
}

export const Image: React.FC<Props> = ({ src, alt }) => {
  const [imageSrc, setImageSrc] = useState(src);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setImageSrc(undefined);
  };

  if (!imageSrc) {
    return <div>no image</div>;
  } else {
    return (
      <div className={styles.image}>
        <img src={src} alt={alt} onError={handleError} />
      </div>
    );
  }
};
