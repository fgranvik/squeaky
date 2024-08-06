import { Link } from "react-router-dom";
import { Content } from "../../../components/Content/content";
import Heading from "../../../components/Heading/Heading";
import { Main } from "../../../components/Main/Main";
import Margin from "../../../components/Margin/Margin";
import { Section } from "../../../components/Section/Section";
import { Text } from "../../../components/Text/Text";
import { LastUpdate } from "../../../components/LastUpdate/LastUpdate";

const Sitemap: React.FC = () => {
  return (
    <Main>
      <Section>
        <Content>
          <Margin top={24} />
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
