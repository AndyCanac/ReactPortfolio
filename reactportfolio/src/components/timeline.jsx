import React from 'react'
import '../styles/timeline.css'

const timeline = () => {
  return (
      <section className="timeline-section">
        <h1 className="timeline-title" data-aos="fade-up" data-aos-duration="1000">Mon parcours scolaire</h1>
        <div className="timeline-items" data-aos="fade-up" data-aos-duration="1000">
        <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">2021-2023</div>
                <div className="timeline-content">
                    <h3>BTS Systèmes Numérique option Informatique et Réseaux (SNIR)</h3>
                    <p>Lycée ORT | Lyon 8ème arrondissement 69008</p>
                </div>
            </div>
            <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">2020-2021</div>
                <div className="timeline-content">
                    <h3>baccalauréat sciences et technologies de l'industrie et du développement durable (STI2D)</h3>
                    <p>Lycée Frédéric Faÿs | Villeurbanne 69100</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default timeline