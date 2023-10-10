import React from "react";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { IoLogoGitlab } from "react-icons/io5";
import HeroImg from "../HeroImg.json";
import Lottie from "lottie-react";
import "../styles/Hero.css"
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Hero = () => {

  const [text] = useTypewriter({
    words :["Lorem","Lorem","Lorem"],
    loop:{},
    typeSpeed:100,
    deleteSpeed:60,
  })

  return (
    <section className="hero section aol" id="hero">
    <div className="hero_container container grid">
      <div className="hero_content">
        <h4>Lorem,</h4>
        <h1>
          Lorem, ipsum. {' '}
          <span>{text}</span>
          <Cursor/>
        </h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, similique?</p>
        <div className="hero_social">
          <a href="https://github.com/AndyCanac"><BsGithub /></a>
          <a href="https://www.linkedin.com/in/andy-canac-040581216/"><BsLinkedin /></a>
          <a href="#"><FiMail /></a>     
          <a href="https://gitlab.com/AndyCanac"><IoLogoGitlab /></a>
        </div>
        <a href="#" className="btn">
          lorem
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