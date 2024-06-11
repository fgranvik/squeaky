import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Header } from "./components/Header/header";
import { Main } from "./components/Main/main";
import { Footer } from "./components/Footer/footer";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./routes/routes";
// import CookieNotification from "./components/CookieNotification/cookieNotification";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Main>
        <AppRoutes />
      </Main>
      <Footer />
      {/* <CookieNotification /> */}
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
