import "./Project.css";
import valosportImage from "../../assets/valosportfoto.png";

function Project() {
  return (
    <section className="project section" id="projects">
      <div className="section-heading">
        <h2>Proyecto Destacado</h2>
        <p>~/projects/valosport-crm</p>
      </div>

      <article className="project-card">
        <div className="project-card__visual">
          <img
            src={valosportImage}
            alt="Captura de pantalla de Valosport CRM"
            className="project-card__image"
          />
        </div>

        <div className="project-card__info">
          <div>
            <p className="project-card__version">v1.0.0-production</p>

            <h3>Valosport CRM</h3>

            <p className="project-card__description">
              Valosport CRM es una aplicación web de gestión desarrollada con
              React y Supabase. El proyecto está orientado a facilitar la
              organización interna de usuarios, grupos y datos desde una
              interfaz clara, sencilla y responsive.
            </p>

            <ul className="project-card__features">
              <li>Autenticación e inicio de sesión.</li>
              <li>Gestión de usuarios y grupos.</li>
              <li>Conexión con Supabase como backend.</li>
              <li>Control básico de acceso.</li>
              <li>Interfaz responsive adaptada a diferentes dispositivos.</li>
              <li>Despliegue del proyecto en Vercel.</li>
            </ul>

            <div className="project-card__techs">
              <span>React</span>
              <span>JavaScript</span>
              <span>Tailwind</span>
              <span>Supabase</span>
              <span>Java</span>
              <span>Vercel</span>
              <span>Render</span>
            </div>
          </div>

          <div className="project-card__actions">
            <a
              href="https://valosport-crm.vercel.app/"
              className="project-card__btn project-card__btn--primary"
              target="_blank"
              rel="noreferrer"
            >
              Ver proyecto
            </a>

            <a
              href="https://github.com/Rauljouman/Valosport-CRM"
              className="project-card__btn project-card__btn--secondary"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Project;