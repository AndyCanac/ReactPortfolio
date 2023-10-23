import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { IoLogoGitlab } from "react-icons/io5";
import { AiOutlineCodepen } from "react-icons/ai";
import '../styles/Footer.css'

const Footer = () =>{
    return (
<section class="footer" data-aos="fade-up" data-aos-anchor-placement="top-bottom"  data-aos-duration="1300">
  <div class="footer-content">
    <div class="top">
      <a href="#hero">
        <img class="website-logo" src="./assets/logo.svg"/>
      </a>
      <div class="social-links">
        <a href="https://github.com/AndyCanac" target="_blank"><BsGithub /></a>
        <a href="https://www.linkedin.com/in/andy-canac-040581216/" target="_blank"><BsLinkedin /></a>
        <a href="https://codepen.io/andy-canac" target="_blank"><AiOutlineCodepen /></a>     
        <a href="https://gitlab.com/AndyCanac" target="_blank"><IoLogoGitlab /></a>
      </div>
    </div>
    <hr />
    <div class="bottom">
      <div class="legal">
        <span>©opyright Andy CANAC 2023</span>
      </div>
    </div>
  </div>
</section>



    );
}

export default Footer