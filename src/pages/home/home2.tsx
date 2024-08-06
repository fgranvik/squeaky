// src/components/Home.tsx
import React from "react";
import { Hero } from "../../components/Hero/Hero";
import { Helmet } from "react-helmet";
import { Main } from "../../components/Main/Main";
import { Section } from "../../components/Section/Section";
import { Content } from "../../components/Content/content";
import { MediaList } from "../../components/MediaList/MediaList";
import Margin from "../../components/Margin/Margin";
import InstagramPosts from "../../components/Instagram/InstagramPosts";

const Home: React.FC = () => {
  const title =
    "Motorcycle adventures, solo camping and occational spelunking - Squeaky Adventures";
  const description =
    "Discover your next adventure at SqueakyAdventures.com. Find hidden gems, travel tips, and connect with fellow explorers. Start your journey now!";
  const keywords =
    "adventure rider, motorcycle adventures, KTM 690 Enduro, gravel road riding, Sweden adventures, motorcycle camping, solo motorcycle travel, exploring caves, abandoned mines, off-road riding, adventure motorcycling, Öland, Småland, Squeaky Adventures";
  const url = "https://squeakyadventures.com";

  const mediaItems = [
    {
      name: "Squeaky Adventures - Episode 1",
      url: "https://www.youtube.com/watch?v=5qap5aO4i9A",
    },
    {
      name: "Squeaky Adventures - Episode 2",
      url: "https://www.youtube.com/watch?v=5qap5aO4i9A",
    },
    {
      name: "Squeaky Adventures - Episode 3",
      url: "https://www.youtube.com/watch?v=5qap5aO4i9A",
    },
    {
      name: "Squeaky Adventures - Episode 4",
      url: "https://www.youtube.com/watch?v=5qap5aO4i9A",
    },
    {
      name: "Squeaky Adventures - Episode 5",
      url: "https://www.youtube.com/watch?v=5qap5aO4i9A",
    },
  ];

  return (
    <Main>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
        <meta property="og:url" content={url} />
      </Helmet>

      <Hero />
      <Margin bottom={64} />

      <Section>
        <Content width="full">
          <MediaList title="Youtube" items={mediaItems} />
          <Margin bottom={64} />
          <InstagramPosts />
        </Content>
      </Section>
    </Main>
  );
};

export default Home;
