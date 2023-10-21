import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { IoLogoGitlab } from "react-icons/io5";
import { AiOutlineCodepen } from "react-icons/ai";
import '../styles/Footer.css'

const Footer = () =>{
    return (
      <footer>
      <div class="footer-links">
        <a class="footer-link" href="#">Accueil</a>
        <a class="footer-link" href="#">À propos</a>
        <a class="footer-link" href="#">Services</a>
        <a class="footer-link" href="#">Contact</a>
      </div>
    </footer>
    );
}

export default Footer