import React from "react";
import { Route, Routes } from "react-router";
import About from "../Page/About";
import Contact from "../Page/Contact";
import Facilities from "../Page/Facilities";
import Home from "../Page/Home";
import Services from "../Page/Services";

const Content = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/about-us" exact element={<About />} />
      <Route path="/facilities" exact element={<Facilities />} />
      <Route path="/services" exact element={<Services />} />
      <Route path="/contact-us" exact element={<Contact />} />
    </Routes>
  );
};

export default Content;
