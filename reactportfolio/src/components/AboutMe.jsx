import React from 'react'
import '../styles/AboutMe.css'


const AboutMe = () => {

  return (
    <section className="about">
        <div className="content">
            <img src="./assets/Andy.png"/>
            <div className="text">
                <h1>A propos de moi</h1>
                <h5>Andy CANAC <span>20 ans</span></h5>
                <p>Je suis un passionné par le développement informatique mais plus particulièrement par le déveleppement web que sa soit front-end ou back-end.</p>
                <form method="get" action="/assets/CvAndy.pdf" target="_blank">
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