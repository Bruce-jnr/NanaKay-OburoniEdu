import heroImg from '../assets/heros.jpg';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-copy">
            <div className="hero-badge">
              <i></i>
              Ghana's Trusted Study‑Abroad Advisors
            </div>
            <h1>
              Your Gateway to a <span>World‑Class</span> Education
            </h1>
            <p>
              Oburoni Educational Consult guides ambitious African students through
              every step — from SAT prep and school selection to visa approvals and
              safe arrival abroad.
            </p>
            <div className="hero-actions">
              <a className="btn btn-gold" href="#contact">Start Your Journey</a>
              <a className="btn btn-outline" href="#services">Our Services</a>
            </div>
          </div>
          <div className="hero-image-wrap">
            <img src={heroImg} alt="Students celebrating their global education journey" />
          </div>
        </div>
      </div>
    </section>
  );
}
