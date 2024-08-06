import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import styles from "./ContactForm.module.css";
import Margin from "../Margin/Margin";
import Heading from "../Heading/Heading";

export const ContactForm: React.FC = () => {
  const [state, handleSubmit] = useForm("mqkrreqb");

  if (state.succeeded) {
    return (
      <Heading type="h2" color="white">
        Welcome to the squeaky crew!
      </Heading>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.contactForm}>
      <label htmlFor="email" className={styles.title}>
        Enter your email and subscribe to the newsletter
      </label>
      <p className={styles.newsletterDescription}>
        Subscribe to the newsletter and get information about what's going on,
        planned adventures and more!
      </p>

      <Margin bottom={16} />

      <div className={styles.input}>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Enter your email"
          className={styles.inputField}
        />
        <button
          type="submit"
          disabled={state.submitting}
          className={styles.submit}
        >
          Submit
        </button>
      </div>

      <ValidationError prefix="Email" field="email" errors={state.errors} />
    </form>
  );
};
