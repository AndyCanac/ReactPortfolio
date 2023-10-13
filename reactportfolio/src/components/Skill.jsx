import React from 'react';
import { AiOutlineCodepen } from "react-icons/ai";
import 'aos/dist/aos.css';
import AOS from 'aos';
import '../styles/Skill.css'

function Skill() {

    AOS.init();

    return (  
        <section id='skill' className='skills-section' data-aos="fade-up" data-aos-anchor-placement="top-bottom"  data-aos-duration="1000">
            <h1 className='skills-title'>Mes compétences</h1>
            <div className='global-skill'>
                <h3 className='section-title'>langages :</h3>
                <div className='skills-icon'>
                    <a href="#" className='skills-icon'><img src="./assets/svg/html.svg"/></a>
                    <a href="#" className='skills-icon'><img src="./assets/svg/css.svg"/></a>
                    <a href="#" className='skills-icon'><img src="./assets/svg/js.svg"/></a>
                    <a href="#" className='skills-icon'><img src="./assets/svg/php.svg"/></a>   
                    <a href="#" className='skills-icon'><img src="./assets/svg/c++.svg"/></a>
                    <a href="#" className='skills-icon'><img src="./assets/svg/csharp.svg"/></a>
                    <a href="#" className='skills-icon'><img src="./assets/svg/python.svg"/></a>
                </div>
            </div>
            <div className='global-skill'>
                <h3 className='section-title'>Autres :</h3>
                <div className='skills-icon'>
                    <a href="#" className='skills-icon'><img src="./assets/svg/figma.svg"/></a>
                    <a href="#" className='skills-icon'><img src="./assets/svg/notion.svg"/></a>
                    <a href="#" className='skills-icon'><img src="./assets/svg/vitejs.svg"/></a>
                    <a href="#" className='skills-icon'><img src="./assets/svg/git.svg"/></a>
                </div>
            </div>
            <div className='skill-two'>
                <div className='global-skill gsone'>
                    <h3 className='section-title'>framework :</h3>
                    <div className='skills-icon'>
                        <a href="#" className='skills-icon'><img src="./assets/svg/react.svg"/></a>
                        <a href="#" className='skills-icon'><img src="./assets/svg/django.svg"/></a>
                    </div>
                </div>
                <div className='global-skill gstwo'>
                    <h3 className='section-title'>Database :</h3>
                    <div className='skills-icon'>
                        <a href="#" className='skills-icon'><img src="./assets/svg/mysql.svg"/></a>
                        <a href="#" className='skills-icon'><img src="./assets/svg/postgresql.svg"/></a>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Skill;