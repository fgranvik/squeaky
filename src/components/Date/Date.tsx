import dayjs from "dayjs";
import styles from "./Date.module.css";

import { ReactComponent as CalendarIcon } from "../../images/icons/calendar.svg";

interface Props {
  timestamp: string;
}

export const Date: React.FC<Props> = ({ timestamp }) => {
  return (
    <div className={styles.date}>
      <CalendarIcon />
      {dayjs(timestamp).format("YYYY-MM-DD")}
    </div>
  );
};
