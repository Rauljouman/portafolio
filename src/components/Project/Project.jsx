import "./Project.css";

function Project() {
  return (
    <section className="project section reveal" id="projects">
      <div className="section-heading">
        <h2>Proyecto Destacado</h2>
        <p>~/projects/valosport-crm</p>
      </div>

      <div className="project__grid">
        <article className="project-card card-hover">
          <div className="project-card__visual">
            <img
              src="/valosportfoto.png"
              alt="Captura de pantalla de Valosport CRM"
              className="project-card__image"
            />
          </div>

          <div className="project-card__info">
            <div>
              <h3>Valosport CRM</h3>

              <p className="project-card__description">
                Valosport CRM es una aplicación web de gestión desarrollada con
                React y Supabase. El proyecto está orientado a facilitar la
                organización interna de usuarios, grupos y datos desde una
                interfaz clara, sencilla y responsive.
              </p>

              <div className="project-card__techs">
                <span>React</span>
                <span>JavaScript</span>
                <span>CSS</span>
                <span>Supabase</span>
                <span>Vercel</span>
              </div>
            </div>

            <div className="project-card__actions">
              <a
                href="https://valosport-crm.vercel.app/login"
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
      </div>
    </section>
  );
}

export default Project;