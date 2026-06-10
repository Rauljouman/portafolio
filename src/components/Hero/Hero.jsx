import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="about">
      <div className="hero__content hero-animate hero-animate--left">
        <p className="navbar__logo">
          <span>▸</span> Portafolio.java
        </p>

        <h1>Raül Jouman</h1>

        <h2>Desarrollador Backend / Full Stack Junior</h2>

        <p className="hero__description">
          Creo aplicaciones web, APIs y soluciones de gestión con tecnologías
          como React, C#, .NET, Java, Spring Boot y bases de
          datos SQL/NoSQL. Me enfoco en construir proyectos funcionales, bien
          estructurados y orientados a resolver problemas reales.
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

      <div className="hero-terminal fade-up fade-delay-2">
        <div className="hero-terminal__header">
          <div className="hero-terminal__controls">
            <span className="hero-terminal__dot hero-terminal__dot--red"></span>
            <span className="hero-terminal__dot hero-terminal__dot--yellow"></span>
            <span className="hero-terminal__dot hero-terminal__dot--blue"></span>
          </div>

          <span className="hero-terminal__title">raul@dev-machine:~</span>
        </div>

        <div className="hero-terminal__body">
          <p>
            <span className="hero-terminal__keyword">public class</span>{" "}
            <span className="hero-terminal__class">Developer</span> {"{"}
          </p>

          <p className="hero-terminal__indent-1">
            <span className="hero-terminal__keyword">private String</span> role ={" "}
            <span className="hero-terminal__string">
              "Backend / Full Stack Junior"
            </span>
            ;
          </p>

          <p className="hero-terminal__indent-1">
            <span className="hero-terminal__keyword">private String[]</span> stack ={" "}
            {"{"}
            <span className="hero-terminal__string">"React"</span>,{" "}
            <span className="hero-terminal__string">"C#"</span>,{" "}
            <span className="hero-terminal__string">".NET"</span>,{" "}
            <span className="hero-terminal__string">"Java"</span>,{" "}
            <span className="hero-terminal__string">"Spring Boot"</span>
            {"}"};
          </p>

          <br />

          <p className="hero-terminal__indent-1">
            <span className="hero-terminal__keyword">public void</span>{" "}
            <span className="hero-terminal__method">build</span>() {"{"}
          </p>

          <p className="hero-terminal__indent-2">createApplications();</p>
          <p className="hero-terminal__indent-2">connectDatabases();</p>
          <p className="hero-terminal__indent-2">improveCode();</p>

          <p className="hero-terminal__indent-1">{"}"}</p>
          <p>{"}"}</p>

          <br />

          <p className="hero-terminal__cursor">
            <span className="hero-terminal__prompt">❯</span>
            <span className="hero-terminal__block"></span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;