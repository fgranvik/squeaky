// src/components/Home.tsx
import React from "react";
import { HeroPlaceholder } from "../../components/HeroPlaceholder/heroPlaceholder";
import Margin from "../../components/Margin/margin";
import styles from "./home.module.css";
import { Helmet } from "react-helmet";

const Home: React.FC = () => {
  return (
    <main className={styles.main}>
      <Helmet>
        <title>
          Motorcycle adventures, solo camping and occational spelunking -
          Squeaky Adventures
        </title>
        <meta
          name="description"
          content="Discover your next adventure at SqueakyAdventures.com. Find hidden gems, travel tips, and connect with fellow explorers. Start your journey now!"
        />
      </Helmet>
      <HeroPlaceholder />
      <Margin bottom={128} />
    </main>
  );
};

export default Home;
