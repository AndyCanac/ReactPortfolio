import React from "react";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { IoLogoGitlab } from "react-icons/io5";
import HeroImg from "../HeroImg.json";
import Lottie from "lottie-react";
import "../styles/Hero.css"
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { AiOutlineCodepen } from "react-icons/ai";

const Hero = () => {

  const [text] = useTypewriter({
    words :["Andy CANAC","étudiant","passionné"],
    loop:{},
    typeSpeed:100,
    deleteSpeed:60,
  })

  return (
    <section className="hero section aol" id="hero">
    <div className="hero_container container grid">
      <div className="hero_content">
        <h4>Hey,</h4>
        <h1>Je suis {' '}
          <span>{text}</span>
          <Cursor/>
        </h1>
        <p>Passionné par le développement informatique je souhaite évoluer dans ce domaine.</p>
        <div className="hero_social">
          <a href="https://github.com/AndyCanac" target="_blank"><BsGithub /></a>
          <a href="https://www.linkedin.com/in/andy-canac-040581216/" target="_blank"><BsLinkedin /></a>
          <a href="https://codepen.io/andy-canac" target="_blank"><AiOutlineCodepen /></a>     
          <a href="https://gitlab.com/AndyCanac" target="_blank"><IoLogoGitlab /></a>
        </div>
        <a href="#aboutMe" className="btn">
          Contact
        </a>
      </div>
      <div className="hero_img">
        <Lottie animationData={HeroImg}/>
      </div>
    </div>  
  </section>
  )
}

export default Hero