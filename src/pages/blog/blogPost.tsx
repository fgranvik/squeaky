// src/components/About.tsx
import React from "react";
import { Section } from "../../components/Section/Section";
import Heading from "../../components/Heading/Heading";
import { Content } from "../../components/Content/content";
import Margin from "../../components/Margin/Margin";
// import { Helmet } from "react-helmet";
import { Main } from "../../components/Main/Main";
import { PrismicRichText, usePrismicDocumentByUID } from "@prismicio/react";
import styles from "./blog.module.css";
import { useParams } from "react-router-dom";
import { Preamble } from "../../components/Preamble/Preamble";
import { Image } from "../../components/Image/Image";
import { NavigateBack } from "../../components/Navigate/NavigateBack";
import { Loader } from "../../components/Loader/Loader";
import { Date } from "../../components/Date/Date";

const BlogPost: React.FC = () => {
  const params = useParams();
  const [document, { state }] = usePrismicDocumentByUID(
    "blogpost",
    params.uid!
  );

  // const title = `Squeaky Adventures - ${document.data.main_title[0]?.text} - Blog`;
  // const description = document.data.short_description[0]?.text;
  // const keywords =
  //   "adventure rider, motorcycle adventures, KTM 690 Enduro, gravel road riding, Sweden adventures, motorcycle camping, solo motorcycle travel, exploring caves, abandoned mines, off-road riding, adventure motorcycling, Öland, Småland, Squeaky Adventures";
  // const url = `https://squeakyadventures.com/blog/${params.uid}`;

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
            <Content>
              <Margin top={24} />
              <NavigateBack to="/blog">Back to blog</NavigateBack>
              <Margin bottom={32} />
              <Heading type="h1" as="h2">
                {document.data.main_title[0]?.text}
              </Heading>
              <Margin bottom={24} />
              <Date timestamp={document.data.date} />
              <Margin bottom={32} />
              <Image
                src={document.data.main_image.url}
                alt={document.data.main_image.alt}
              />
              {/* <Preamble>{document.data.short_description[0]?.text}</Preamble> */}
              <Margin bottom={64} />
              <div className={styles.blogPost}>
                {document && (
                  <PrismicRichText field={document.data.main_content} />
                )}
              </div>
            </Content>
          )
        )}
      </Section>
    </Main>
  );
};

export default BlogPost;
