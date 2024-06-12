// src/components/Contact.tsx
import React from "react";
import { Section } from "../../components/Section/section";
import { Content } from "../../components/Content/content";
import Heading from "../../components/Heading/heading";
import Margin from "../../components/Margin/margin";
import { useForm, ValidationError } from "@formspree/react";
import styles from "./contact.module.css";
import { Helmet } from "react-helmet";
import { Main } from "../../components/Main/main";

const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm("xgeggara");

  if (state.succeeded) {
    return (
      <Main>
        <Helmet>
          <title>Thanks for reaching out!</title>
          <meta
            name="description"
            content="Thank you for your message! I'll get back to you as soon as possible. In the meantime, feel free to explore more squeaky adventures!"
          />
        </Helmet>

        <Section>
          <Content>
            <Margin top={64} />
            <Heading type="h1" as="h2">
              Thanks for reaching out!
            </Heading>
            ;
            <Heading type="h2" as="h3">
              I'll get back to you as soon as possible.
            </Heading>
            <Heading type="h3">
              In the meantime, feel free to explore more{" "}
              <span style={{ color: "purple" }}>squeaky adventures!</span>
            </Heading>
            <Margin top={64} />
          </Content>
        </Section>
      </Main>
    );
  }

  return (
    <Main>
      <Helmet>
        <title>Contact Squeaky Adventures: Lets get connected!</title>
        <meta
          name="description"
          content="Reach out to Squeaky Adventures! Whether you have questions, suggestions, or adventure stories, I'd love to hear from you. Use the contact form to get in touch and let's connect."
        />
      </Helmet>

      <Section>
        <Content>
          <Margin top={64} />
          <Heading type="h1" as="h2">
            So you want to get in touch?
          </Heading>
          <p>Last updated: 2024-06-11</p>
          <Margin bottom={64} />

          <Heading type="h3">
            Awesome! Whether you have questions, suggestions, or just want to
            share your own adventure stories, I’d love to hear from you.
          </Heading>
          <Margin bottom={16} />
          <Heading type="h3" color="purple">
            Reach out and let’s connect!
          </Heading>
        </Content>
        <Margin bottom={32} />
      </Section>

      <Section>
        <Content>
          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <label htmlFor="contact-page-email" className={styles.title}>
              Email Address
            </label>

            <div className={styles.input}>
              <input
                id="email"
                type="email"
                name="contact-page-email"
                placeholder="Enter your email address"
                className={styles.inputField}
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <Margin bottom={32} />
              <Heading type="h3" color="purple">
                Your Message
              </Heading>
              <Margin bottom={16} />
              <textarea
                id="message"
                name="message"
                className={styles.textarea}
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <Margin bottom={32} />
              <button
                type="submit"
                disabled={state.submitting}
                className={styles.submit}
              >
                Submit
              </button>
            </div>
          </form>

          <Margin bottom={128} />
        </Content>
      </Section>
    </Main>
  );
};

export default Contact;
