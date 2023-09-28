import '../styles/Slider.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Slider = () => {

  AOS.init();

  return (
    <section className="package" id="package" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
    <div className="title">
      <h2 className="projet-title">
        Lorem, ipsum.
      </h2>
    </div>

    <div className="package-content" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
      <div className="box">
        <div className="thum">
          <img src="./assets/github.png" />
        </div>
      </div>
      <div className="box">
        <div className="thum">
          <img src="./assets/github.png" />
        </div>
      </div>
      <div className="box">
        <div className="thum">
          <img src="./assets/github.png" />
        </div>
      </div>
    </div>
  </section>
  );
};

export default Slider