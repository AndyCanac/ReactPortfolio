import React from 'react'
import '../styles/AboutMe.css'


const AboutMe = () => {

  return (
    <section className="about">
        <div className="content">
            <img src="./assets/Andy.png"/>
            <div className="text">
                <h1>Lorem ipsum dolor sit.</h1>
                <h5>Andy CANAC <span>20ans</span></h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt id accusantium, quis non officia doloremque ullam voluptatem dicta, at similique deserunt repellat esse? Dolor dignissimos doloremque provident deleniti eaque quis officia, nulla architecto molestias aliquam ratione maxime nam. Tempore qui quisquam totam quod. Ut incidunt iusto deserunt natus laboriosam dicta!</p>
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