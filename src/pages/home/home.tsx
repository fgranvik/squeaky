// src/components/Home.tsx
import React from "react";
import { HeroPlaceholder } from "../../components/HeroPlaceholder/heroPlaceholder";
import { Helmet } from "react-helmet";
import { Main } from "../../components/Main/main";

const Home: React.FC = () => {
  return (
    <Main>
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
    </Main>
  );
};

export default Home;
