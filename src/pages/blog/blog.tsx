// src/components/About.tsx
import React from "react";
import { Section } from "../../components/Section/Section";
import Heading from "../../components/Heading/Heading";
import { Content } from "../../components/Content/content";
import Margin from "../../components/Margin/Margin";
// import { Helmet } from "react-helmet";
import { Main } from "../../components/Main/Main";
import { usePrismicDocumentsByType } from "@prismicio/react";
import { LinkBlock } from "../../components/LinkBlock/LinkBlock";
import styles from "./blog.module.css";
import { Loader } from "../../components/Loader/Loader";

const Blog: React.FC = () => {
  const [document, { state }] = usePrismicDocumentsByType("blogpost");

  // const title =
  //   "Squeaky Adventures - Motorcycle adventures, solo camping and occational spelunking - Blog";
  // const description =
  //   "Discover your next adventure at SqueakyAdventures.com. Find hidden gems, travel tips, and connect with fellow explorers. Start your journey now!";
  // const keywords =
  //   "adventure rider, motorcycle adventures, KTM 690 Enduro, gravel road riding, Sweden adventures, motorcycle camping, solo motorcycle travel, exploring caves, abandoned mines, off-road riding, adventure motorcycling, Öland, Småland, Squeaky Adventures";
  // const url = "https://squeakyadventures.com/blog";

  return (
    <Main>
      {/* <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
        <meta property="og:url" content={url} />
      </Helmet> */}

      <Section>
        {state === "loading" ? (
          <Loader />
        ) : (
          document && (
            <Content width="full">
              <Margin top={24} />
              <Heading type="h1" as="h2">
                Blog
              </Heading>

              <Margin bottom={64} />
              <div className={styles.blogPosts}>
                {document.results.map((doc) => (
                  <LinkBlock key={doc.id} document={doc} />
                ))}
              </div>
            </Content>
          )
        )}
      </Section>
    </Main>
  );
};

export default Blog;
