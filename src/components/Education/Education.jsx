import "./Education.css";

function Education() {
  return (
    <section className="education section reveal" id="education">
      <div className="section-heading">
        <h2>Formación</h2>
        <p>~/docs/education</p>
      </div>

      <article className="education-card card-hover">
        <h3>CFGS Desarrollo de Aplicaciones Multiplataforma</h3>

        <p className="education-card__center">Prat Educació</p>
        <p className="education-card__date">sept. 2023 - jun. 2025</p>

        <p className="education-card__description">
          Formación orientada al desarrollo de software, programación orientada
          a objetos, bases de datos, desarrollo web, interfaces, acceso a datos
          y despliegue de aplicaciones.
        </p>

        <div className="education-card__techs">
          <span>Java</span>
          <span>Spring Boot</span>
          <span>JavaScript</span>
          <span>Python</span>
          <span>C#</span>
          <span>.NET Framework</span>
          <span>React</span>
          <span>Node.js</span>
          <span>SQL</span>
          <span>NoSQL</span>
          <span>Flutter</span>
          <span>React Native</span>
          <span>Git</span>
        </div>
      </article>
    </section>
  );
}

export default Education;