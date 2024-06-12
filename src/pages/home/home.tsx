// src/components/Home.tsx
import React from "react";
import { HeroPlaceholder } from "../../components/HeroPlaceholder/heroPlaceholder";
import { Helmet } from "react-helmet";
import { Main } from "../../components/Main/main";

const Home: React.FC = () => {
  const title =
    "Motorcycle adventures, solo camping and occational spelunking - Squeaky Adventures";
  const deescription =
    "Discover your next adventure at SqueakyAdventures.com. Find hidden gems, travel tips, and connect with fellow explorers. Start your journey now!";
  const url = "https://squeakyadventures.com";

  return (
    <Main>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={deescription} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={deescription} />
        <meta property="og:url" content={url} />
      </Helmet>

      <HeroPlaceholder />
    </Main>
  );
};

export default Home;
