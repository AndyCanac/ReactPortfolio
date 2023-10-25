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
              <h3>lorem</h3>
              <button>En savoir plus</button>
          </div>
      </div>
      <div class="card">
          <div class="image">
              <img src="./assets/cssBattle.png"/>
          </div>
          <div class="overlay">
              <h3>lorem</h3>
              <button>En savoir plus</button>
          </div>
      </div>
      <div class="card">
          <div class="image">
              <img src="./assets/cssBattle.png"/>
          </div>
          <div class="overlay">
              <h3>lorem</h3>
              <button>En savoir plus</button>
          </div>
      </div>
    </div>
  </section>
  );
};

export default Slider