import React from 'react'
import '../styles/timeline.css'

const timeline = () => {
  return (
    <div id='timeline' class="timeline-container">
        <h2 className="projet-title">Mon parcours</h2>
        <div class="timeline">
            <ul>
            <li>
                <div class="timeline-content">
                    <h3 class="date">2023-2024</h3>
                    <h1>Licence Responsable de projet informatique (RPI) alternance</h1>
                    <p>Ecole Isitech | Lyon 7ème arrondissement 69007</p>
                </div>
            </li>
            <li>
                <div class="timeline-content">
                    <h3 class="date">2021-2023</h3>
                    <h1>BTS Systèmes Numérique option Informatique et Réseaux (SNIR)</h1>
                    <p>Lycée ORT | Lyon 8ème arrondissement 69008</p>
                </div>
            </li>
            <li>
                <div class="timeline-content">
                    <h3 class="date">2020-2021</h3>
                    <h1>Baccalauréat sciences et technologies de l'industrie et du développement durable (STI2D)</h1>
                    <p>Lycée Frédéric Faÿs | Villeurbanne 69100</p>
                </div>
            </li>
            </ul>
        </div>
    </div>
  )
}

export default timeline