import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Footer } from "./components/Footer/Footer.tsx";
import { Header } from "./components/Header/Header.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./routes/routes.tsx";
import { PrismicProvider } from "@prismicio/react";
import { client } from "./prismic.tsx";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <PrismicProvider client={client}>
      <Router>
        <Header />
        <AppRoutes />
        <Footer />
      </Router>
    </PrismicProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
