import React from "react";
import Heading from "../Heading/Heading";
import Margin from "../Margin/Margin";
import styles from "./MediaList.module.css";
import Carousel from "../Carousel/Carousel";
import { Link } from "react-router-dom";

export interface ListItem {
  name?: string;
  url?: string;
}
interface Props {
  title: string;
  items: ListItem[];
}

const PlaceholderCard: React.FC = () => {
  return <div className={styles.placeholder}></div>;
};

export const MediaList: React.FC<Props> = ({ title, items }) => {
  const createItems = (items: ListItem[]) => {
    return items.map((item, index) => (
      <div>
        <Link to={item.url ?? ""} target="_blank" rel="noreferrer">
          <PlaceholderCard key={index} />
          <div className={styles.placeholderText}>{item.name}</div>
        </Link>
      </div>
    ));
  };

  return (
    <>
      <Heading type="h3">{title}</Heading>
      <Margin bottom={24} />
      <Carousel carouselItems={createItems(items)} showMagnify={false} />
    </>
  );
};
