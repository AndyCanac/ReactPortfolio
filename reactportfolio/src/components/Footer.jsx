import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { IoLogoGitlab } from "react-icons/io5";
import { AiOutlineCodepen } from "react-icons/ai";
import '../styles/Footer.css'

const Footer = () =>{
    return (
<section>
    <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <div className="icon-links">
            <a href="https://github.com/AndyCanac" target="_blank">
                <BsGithub/>
            </a>
            <a href="https://www.linkedin.com/in/andy-canac-040581216/" target="_blank">
                <BsLinkedin/>
            </a>
            <a href="https://codepen.io/andy-canac">
                <AiOutlineCodepen/>
            </a>
            <a href="https://gitlab.com/AndyCanac" target="_blank">
                <IoLogoGitlab/>
            </a>
        </div>
        <p className="copy">
          © 2023 Andy CANAC
        </p>
    </div>
</section>
    );
}

export default Footer