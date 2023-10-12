import React from 'react';
import { AiOutlineCodepen } from "react-icons/ai";
import '../styles/Skill.css'

function Skill() {
    return (  
        <section className='skills-section'>
            <h1 className='skills-title'>Mes competences    </h1>
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
                <h3 className='section-title'>framework :</h3>
                <div className='skills-icon'>
                    <a href="#" className='skills-icon'><img src="./assets/svg/react.svg"/></a>
                    <a href="#" className='skills-icon'><img src="./assets/svg/django.svg"/></a>
                </div>
            </div>
            <div className='global-skill'>
                <h3 className='section-title'>Database :</h3>
                <div className='skills-icon'>
                    <a href="#" className='skills-icon'><img src="./assets/svg/mysql.svg"/></a>
                    <a href="#" className='skills-icon'><img src="./assets/svg/postgresql.svg"/></a>
                </div>
            </div>
            <div className='global-skill'>
                <h3 className='section-title'>Autres :</h3>
                <div className='skills-icon'>
                    <a href="#" className='skills-icon'><img src="./assets/svg/figma.svg"/></a>
                    <a href="#" className='skills-icon'><img src="./assets/svg/notion.svg"/></a>
                </div>
            </div>
        </section>
    );
}


export default Skill;