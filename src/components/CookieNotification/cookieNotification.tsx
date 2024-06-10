import React, { useState, useEffect } from "react";
import styles from "./cookieNotification.module.css";

const CookieNotification: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieAccepted = document.cookie
      .split(";")
      .some((item) => item.trim().startsWith("cookieAccepted="));
    if (!cookieAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    document.cookie = "cookieAccepted=true; max-age=" + 60 * 60 * 24 * 365; // 1 year
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className={styles.cookieNotification}>
      <p>
        We use cookies to ensure you get the best experience on our website. By
        continuing, you agree to our use of cookies.
      </p>
      <button onClick={handleAccept}>Accept</button>
    </div>
  );
};

export default CookieNotification;
