import React from "react";
import { Section } from "../../components/Section/section";
import { Content } from "../../components/Content/content";
import { Helmet } from "react-helmet";
import Heading from "../../components/Heading/heading";
import Margin from "../../components/Margin/margin";

const NotFound: React.FC = () => {
  return (
    <Section>
      <Content width="narrow" position="center">
        <Helmet>
          <title>
            Discover Squeaky Adventures: Motorcycle Journeys Through Swedish
            Wilderness and Beyond.
          </title>
          <meta
            name="description"
            content="Explore the thrilling motorcycle adventures of Squeaky Adventures. From gravel roads in southern Sweden to mysterious caves and abandoned mines, join the ride and uncover hidden gems with a passionate rider who loves the unbeaten path."
          />
        </Helmet>

        <div style={{ textAlign: "center" }}>
          <Margin bottom={48} />
          <Heading type="h1">404</Heading>
          <Heading type="h2">Page not found</Heading>
          <Margin bottom={128} />
        </div>
      </Content>
    </Section>
  );
};

export default NotFound;
