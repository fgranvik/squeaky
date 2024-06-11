// src/components/Home.tsx
import React from "react";
import { HeroPlaceholder } from "../../components/HeroPlaceholder/heroPlaceholder";
import Margin from "../../components/Margin/margin";
import styles from "./home.module.css";

const Home: React.FC = () => {
  return (
    <main className={styles.main}>
      <HeroPlaceholder />
      <Margin bottom={128} />
    </main>
  );
};

export default Home;
