import React from "react";
// import AnimatedCursor from "react-animated-cursor";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Timeline from "../components/timeline";
import Skills from  "../components/Skill";
import Slider from "../components/Slider";
import Footer from "../components/Footer";

const index = () => {
  return (
    <>
      <Nav />
      <Hero />
      <AboutMe />
      <Timeline />
      <Skills />
      <Slider />
      <Footer />
    </>
  );
};

export default index;
