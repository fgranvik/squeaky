import { Link } from "react-router-dom";
import { Content } from "../../../components/Content/content";
import Heading from "../../../components/Heading/heading";
import { Main } from "../../../components/Main/main";
import Margin from "../../../components/Margin/margin";
import { Section } from "../../../components/Section/section";
import { Text } from "../../../components/Text/text";
import { LastUpdate } from "../../../components/LastUpdate/lastUpdate";

const Sitemap: React.FC = () => {
  return (
    <Main>
      <Section>
        <Content>
          <Margin top={64} />
          <Heading type="h1" as="h2">
            Sitemap
          </Heading>
          <LastUpdate date="2024-06-12" />
          <Margin bottom={32} />

          <Text>
            <ul className="">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/cookies">Cookies</Link>
              </li>
            </ul>
          </Text>
          <Margin bottom={128} />
        </Content>
      </Section>
    </Main>
  );
};

export default Sitemap;
