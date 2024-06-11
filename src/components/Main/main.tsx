// import { Hero } from "../Hero/hero";
import { PropsWithChildren } from "react";
import { HeroPlaceholder } from "../HeroPlaceholder/heroPlaceholder";
import Margin from "../Margin/margin";
// import { MediaList } from "../MediaList/mediaList";
// import { Section } from "../Section/section";
import styles from "./main.module.css";

export const Main: React.FC<PropsWithChildren> = ({ children }) => {
  return <>{children}</>;
};
