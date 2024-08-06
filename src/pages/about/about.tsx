// src/components/About.tsx
import React from "react";
import { Section } from "../../components/Section/Section";
import Heading from "../../components/Heading/Heading";
import { Content } from "../../components/Content/content";
import Margin from "../../components/Margin/Margin";
import { Text } from "../../components/Text/Text";
import { Helmet } from "react-helmet";
import { Main } from "../../components/Main/Main";
import { LastUpdate } from "../../components/LastUpdate/LastUpdate";

const About: React.FC = () => {
  const title =
    "Discover Squeaky Adventures: Motorcycle Journeys Through Swedish Wilderness and Beyond.";
  const description =
    "Explore the thrilling motorcycle adventures of Squeaky Adventures. From gravel roads in southern Sweden to mysterious caves and abandoned mines, join the ride and uncover hidden gems with a passionate rider who loves the unbeaten path.";
  const keywords =
    "adventure rider bio, KTM 690 Enduro rider, gravel road adventures, motorcycle travel story, Swedish wilderness exploration, solo motorcycle adventures, exploring caves and mines, Southern Sweden riding, Umeå to Kalmar rider, Squeaky Adventures about";
  const url = "https://squeakyadventures.com/about";

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

      <Section>
        <Content>
          <Margin top={24} />
          <Heading type="h1" as="h2">
            What the h*** is Squeaky Adventures?
          </Heading>
          <LastUpdate date="2024-06-12" />

          <Margin bottom={64} />
          <Heading type="h3" color="purple">
            You might be wondering what this is all about, so let me explain..
          </Heading>
        </Content>
      </Section>

      <Section>
        <Content>
          <Heading type="h3">The Rider</Heading>
          <Text type="p">
            I started riding back in 2006 (even though I took my license in
            '08—yep, you read that right!) when I bought a beat-up old Kawasaki
            KLX 650 R. It was in pretty bad shape when I got it, but with some
            hard work, I managed to get it going and enjoyed it for about five
            years. Then, I took a detour and bought a Suzuki Marauder bobber.
          </Text>

          <Text type="p">
            After a couple of years on that stupid bobber, I realized my true
            passion was riding on gravel roads and exploring the mre remote and
            less traveled areas. So, I switched to my KTM 690 Enduro from 2008.
            For the past 16 years, I've almost exclusively ridden on gravel
            roads through the forests.
          </Text>

          <Text type="p">
            Born in Umeå, in the northern part of Sweden, I moved to the Kalmar
            region in the south, in 2001. Moving from the north to the south was
            an adventure in itself, with new places to explore and different
            landscapes to get used to. Living in the southern part of Sweden,
            near the beautiful island of Öland, I have access to some truly
            amazing scenery both on Öland and in the deep forests of Småland.
          </Text>

          <Text type="p">
            Until now, I've kept pretty much to myself, but it's time to share
            my experiences with you. I want to show that adventure is accessible
            to everyone and that the thrill of discovery can be found just
            around the corner. Whether you're riding a motorcycle, hiking, or
            simply exploring your local area, there's always something new to
            find and enjoy. Let’s make every journey one to remember.
          </Text>
          <Margin bottom={32} />
        </Content>
      </Section>

      <Section>
        <Content>
          <Heading type="h3">The Adventures</Heading>
          <Text type="p">
            I've always had an adventurous spirit and a passion for exploring
            new places. I can spend hours poring over maps, dreaming about
            visiting remote locations. Born in Umeå in the northern part of
            Sweden, I’ve been living around Kalmar since 2001.
          </Text>
          <Text type="p">
            Squeaky Adventures is my way of sharing the thrill and excitement of
            exploring the Swedish wilderness on two wheels. I love visiting
            mysterious caves, abandoned mines, and long-forgotten places that
            each have a story of their own.
          </Text>
          <Text type="p">
            Most of my travels are solo, driven by the unique satisfaction that
            comes from being completely self-reliant. However, I also cherish
            the company of fellow adventurers. There’s something special about
            striking a balance between solo exploration and sharing these
            incredible experiences with others.
          </Text>
        </Content>
      </Section>

      <Section>
        <Content>
          <Margin bottom={32} />

          <Heading type="h3" color="purple">
            Join Me!
          </Heading>
          <Text type="p">
            So, if you’re as crazy about motorcycles and adventure as I am, or
            if you just love a good story, join me on Squeaky Adventures. Let’s
            explore the unbeaten paths, discover hidden gems, and make every
            journey one to remember. Life is too short to stay on the paved
            roads. Come along for the ride and let’s make every moment an
            adventure worth squeaking about!
          </Text>
          <Margin bottom={64} />
          <Heading type="h3">
            ... oh, and you know that sound your boots make when you're getting
            ready for an adventure? That distinct squeak as you walk across the
            gravel to your motorcycle, ready to hit the open road? Thats the
            squeak..
          </Heading>
          <Margin bottom={128} />
        </Content>
      </Section>
    </Main>
  );
};

export default About;
