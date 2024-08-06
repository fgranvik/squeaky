// src/Routes.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/home";
import About from "../pages/about/about";
import Contact from "../pages/contact/contact";
import NotFound from "../pages/notfound/notfound";
import Cookies from "../pages/general/cookies/cookies";
import Sitemap from "../pages/general/sitemap/sitemap";
import Blog from "../pages/blog/blog";
import BlogPost from "../pages/blog/blogPost";

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cookies" element={<Cookies />} />
      <Route path="/sitemap" element={<Sitemap />} />

      {/* blog posts */}
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:uid" element={<BlogPost />} />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
