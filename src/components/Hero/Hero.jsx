import "./Hero.css";

function Hero() {
  return (
    <section className="hero hero--simple" id="about">
      <div className="hero__content hero-animate hero-animate--left">
        <p className="hero__eyebrow">
          <span>▸</span> Portafolio.java
        </p>

        <h1>Raül Jouman</h1>

        <h2>Desarrollador Backend</h2>

        <p className="hero__description">
          Creo aplicaciones web, APIs y soluciones de gestión con tecnologías
          con Spring Boot, .Net y React.
          Me enfoco en construir proyectos funcionales, bien estructurados y
          orientados a resolver problemas reales.
        </p>

        <div className="hero__actions">
          <a
            href="/cv-raul-jouman.pdf"
            className="hero__btn hero__btn--primary"
            download
          >
            Descargar CV
          </a>

          <a
            href="https://github.com/Rauljouman"
            className="hero__btn hero__btn--secondary"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/raul-jouman-ip/"
            className="hero__btn hero__btn--secondary"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;