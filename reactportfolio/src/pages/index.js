import React from "react";
import Nav from "../components/Nav";
import Timeline from "../components/timeline";
import Hero from "../components/Hero";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import AboutMe from "../components/AboutMe";

const index = () => {
  return (
    <>
      <Nav />
      <Hero />
      <AboutMe />
      <Timeline />
      <Slider />
      <Footer />
    </>
  );
};

export default index;
