// src/components/Home.tsx
import React from "react";
import { HeroPlaceholder } from "../../components/HeroPlaceholder/HeroPlaceholder";
import { Helmet } from "react-helmet";
import { Main } from "../../components/Main/Main";

const Home: React.FC = () => {
  const title =
    "Motorcycle adventures, solo camping and occational spelunking - Squeaky Adventures";
  const description =
    "Discover your next adventure at SqueakyAdventures.com. Find hidden gems, travel tips, and connect with fellow explorers. Start your journey now!";
  const keywords =
    "adventure rider, motorcycle adventures, KTM 690 Enduro, gravel road riding, Sweden adventures, motorcycle camping, solo motorcycle travel, exploring caves, abandoned mines, off-road riding, adventure motorcycling, Öland, Småland, Squeaky Adventures";
  const url = "https://squeakyadventures.com";

  const mainPlaceholderStyle = {
    backgroundColor: "transparent",
    paddingBottom: "0",
  };

  return (
    <Main style={mainPlaceholderStyle}>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
        <meta property="og:url" content={url} />
      </Helmet>

      <HeroPlaceholder />
    </Main>
  );
};

export default Home;
