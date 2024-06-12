import { Link } from "react-router-dom";
import { Content } from "../../../components/Content/content";
import Heading from "../../../components/Heading/heading";
import { LastUpdate } from "../../../components/LastUpdate/lastUpdate";
import { Main } from "../../../components/Main/main";
import Margin from "../../../components/Margin/margin";
import { Section } from "../../../components/Section/section";
import { Text } from "../../../components/Text/text";

const Cookies: React.FC = () => {
  return (
    <Main>
      <Section>
        <Content>
          <Margin top={64} />
          <Heading type="h1" as="h2">
            Cookie Policy
          </Heading>
          <LastUpdate date="2024-06-12" />
        </Content>
      </Section>
      <Section>
        <Content>
          <Heading type="h3">
            As of now, this site does not use cookies!!
          </Heading>
          <Margin bottom={32} />
          <Heading type="h3">
            I dont track you. I dont store any data about you... But I would
            like to get to know you!
          </Heading>
          <Margin bottom={32} />
          <Text>
            Head over to <Link to="/contact">the contact page</Link> and drop me
            a message! ❤️{" "}
          </Text>
          <Margin bottom={128} />
        </Content>
      </Section>
    </Main>
  );
};

export default Cookies;
