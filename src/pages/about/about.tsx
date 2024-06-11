// src/components/About.tsx
import React from "react";
import { Section } from "../../components/Section/section";
import Heading from "../../components/Heading/heading";
import { Content } from "../../components/Content/content";
import Margin from "../../components/Margin/margin";
import { Text } from "../../components/Text/text";

const About: React.FC = () => {
  return (
    <Section>
      <Content>
        <Margin top={64} />
        <Heading type="h1" as="h2">
          What the h*** is Squeaky Adventures?
        </Heading>
        <p>Last updated: 2024-06-11</p>

        <Margin bottom={64} />
        <Text type="p">
          You might be wondering what this is all about, so let me explain..
        </Text>

        <Margin bottom={32} />

        <div style={{ width: "60%" }}>
          <Heading type="h3">The Rider</Heading>
          <Text type="p">
            I started riding back in 2006 (even though I took my license in
            '08—yep, you read that right!) when I bought a beat-up old Kawasaki
            KLX 650 R. It was in pretty bad shape when I got it, but with some
            hard work, I managed to get it going and enjoyed it for about five
            years. Then, I took a detour and bought a Suzuki Marauder bobber.
          </Text>

          <Text type="p">
            After a couple of years on that bobber, I realized my true passion
            was riding on gravel roads and exploring off the beaten path. So, I
            switched to my KTM 690 Enduro from 2008. For the past 16 years, I've
            almost exclusively ridden on gravel roads through the forests.
          </Text>
          <Text type="p">
            Living in the southern part of Sweden, near the beautiful island of
            Öland, I have access to some truly amazing gravel roads both on
            Öland and in the deep forests of Småland. Until now, I've kept
            pretty much to myself, but it's time to share my experiences with
            you.
          </Text>
          <Margin bottom={32} />

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
            ... oh, And you know that sound your boots do when your going on an
            adventure? <br />
            Thats the squeak..
          </Heading>
        </div>
        <Margin bottom={128} />
      </Content>
    </Section>
  );
};

export default About;
