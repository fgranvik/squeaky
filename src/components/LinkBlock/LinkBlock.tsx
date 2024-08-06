import { Link } from "react-router-dom";
import Heading from "../Heading/Heading";
import Margin from "../Margin/Margin";
import styles from "./LinkBlock.module.css";
import { PrismicDocument } from "@prismicio/client/*";
import { Image } from "../Image/Image";
import { Date } from "../Date/Date";

interface Props {
  document: PrismicDocument;
}

export const LinkBlock: React.FC<Props> = ({ document }) => {
  const { uid, data } = document;
  const { short_description, main_title, main_image } = data;

  return (
    <div className={styles.linkBlock}>
      <Link to={uid as string}>
        {main_image && (
          <div className={styles.linkBlockImage}>
            <Image src={main_image.url} alt={main_image.alt} />
          </div>
        )}
        <Heading type="h3" as="h4">
          {main_title[0].text}
        </Heading>
        <Margin bottom={24} />
        <div className={styles.preamble}>{short_description[0]?.text}</div>
        <Date timestamp={document.last_publication_date} />
      </Link>
    </div>
  );
};
