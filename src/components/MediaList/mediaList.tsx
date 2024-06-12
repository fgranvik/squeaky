import { Content } from "../Content/content";
import Heading from "../Heading/heading";
import Margin from "../Margin/margin";
import styles from "./mediaList.module.css";

interface Props {
  title: string;
}

const PlaceholderCard: React.FC = () => {
  return <div className={styles.placeholder}></div>;
};

export const MediaList: React.FC<Props> = ({ title }) => {
  return (
    <Content>
      <Heading type="h2">{title}</Heading>
      <Margin bottom={24} />
      <ul className={styles.mediaList}>
        <li>
          <PlaceholderCard />
        </li>
        <li>
          <PlaceholderCard />
        </li>
        <li>
          <PlaceholderCard />
        </li>
        <li>
          <PlaceholderCard />
        </li>
        <li>
          <PlaceholderCard />
        </li>
        <li>
          <PlaceholderCard />
        </li>
      </ul>
    </Content>
  );
};
