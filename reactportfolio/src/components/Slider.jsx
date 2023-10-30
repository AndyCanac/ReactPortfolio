import '../styles/Slider.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Slider = () => {

  AOS.init();

  return (
    <section className="package" id="package" data-aos="fade-up" data-aos-anchor-placement="top-bottom"  data-aos-duration="1300">
      <h2 className="projet-title">Mes projets</h2>
    <div className="package-content">
      <div class="card">
          <div class="image">
              <img src="./assets/cssBattle.png"/>
          </div>
          <div class="overlay">
              <h3>Css Battle </h3>
              <a href="https://github.com/AndyCanac/CssBattle">En savoir plus</a>
          </div>
      </div>
      <div class="card">
          <div class="image">
              <img src="./assets/reactPortfolio.png"/>
          </div>
          <div class="overlay">
              <h3>React Portoflio</h3>
              <a href="https://github.com/AndyCanac/ReactPortfolio">En savoir plus</a>
          </div>
      </div>
      <div class="card">
          <div class="image">
              <img src="./assets/NetflixClone.png"/>
          </div>
          <div class="overlay">
              <h3>Netflix Clone</h3>
              <a href="#">Bientôt</a>
          </div>
      </div>
    </div>
  </section>
  );
};

export default Slider