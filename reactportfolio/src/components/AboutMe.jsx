import React from 'react'
import 'aos/dist/aos.css';
import AOS from 'aos';
import '../styles/AboutMe.css'


const AboutMe = () => {

    AOS.init();
    const anneeDeNaissance = 2003; 
    const anneeActuelle = new Date().getFullYear();
    const age = anneeActuelle - anneeDeNaissance;

  return (
    <section id='aboutMe' className="about" data-aos="fade-up" data-aos-anchor-placement="top-bottom"  data-aos-duration="1300">
        <div className="content">
            <img src="./assets/Andy.png"/>
            <div className="text">
                <h1>A propos de moi</h1>
                <h5>Andy CANAC <span>{age} ans</span></h5>
                <p>Je suis un passionné par le développement informatique mais plus particulièrement par le développement web (front-end ou back-end.)</p>
                <form method="get" action="/assets/CV_Andy_CANAC.pdf" target="_blank">
                    <button class="learn-more">
                        <span class="circle" aria-hidden="true">
                            <span class="icon arrow"></span>
                        </span>
                        <span class="button-text">Mon CV</span>
                    </button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default AboutMe