import "./Hero.css"; 

function Hero() {
  return (
    <section className="hero" id="about">

      <div className="hero__content hero-animate hero-animate--left">
        <p className="hero__eyebrow">
          <span>▸</span> Portafolio.java
        </p>

        <h1>Raül Jouman</h1>

        <h2>Desarrollador Backend</h2>

        <p className="hero__description">
          Creo aplicaciones web, APIs y soluciones de gestión con tecnologías
          como Spring Boot, .NET y React. Me enfoco en construir proyectos
          funcionales, bien estructurados y orientados a resolver problemas
          reales.
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

      <div className="hero__photo-wrapper hero-animate hero-animate--right">
        <img
          src="/fotoYo.png"
          alt="Raül Jouman"
          className="hero__photo"
        />
      </div>

    </section>
  );
}

export default Hero;