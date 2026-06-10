import "./Experience.css";

const experiences = [
  {
    status: "Actualidad",
    title: "Helpdesk Agent",
    company: "IRIUM",
    date: "ago. 2025 - actualidad",
    description:
      "Responsable de la gestión de incidencias y soporte técnico a profesores, equipos directivos y personal administrativo del Departamento de Educación.",
    tasks: [
      "Gestión, seguimiento y resolución de incidencias mediante herramientas Helpdesk.",
      "Creación y actualización de tickets en BMC Remedy Helix y Microsoft Dynamics CRM.",
      "Atención a usuarios por teléfono, correo electrónico y plataformas de soporte.",
      "Soporte técnico presencial y remoto.",
      "Uso de aplicaciones corporativas como INDIC, RALC, ESFER@, SAGA y GEDAC.",
    ],
    tools:
      "BMC Remedy Helix · Microsoft Dynamics CRM · Soporte remoto · Gestión de incidencias · Atención al usuario",
  },
  {
    status: "Prácticas",
    title: "Desarrollador Web",
    company: "Alice Solutions",
    date: "ene. 2025 - may. 2025",
    description:
      "Participé en el desarrollo y mantenimiento de sitios web mediante un CMS propio, realizando tareas de optimización, testeo y mejora de la experiencia de usuario.",
    tasks: [
      "Desarrollo y mantenimiento de páginas web.",
      "Maquetación y ajustes visuales con HTML, CSS y JavaScript.",
      "Participación en tareas de optimización de rendimiento.",
      "Testeo de funcionalidades y revisión de errores.",
      "Uso de Git para control de versiones.",
    ],
    tools: "HTML · CSS · JavaScript · PHP · Git · Bases de datos",
  },
];

function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="section-heading reveal">
        <h2>Experiencia</h2>
        <p>~/logs/work_history</p>
      </div>

      <div className="timeline reveal">
        {experiences.map((experience) => (
          <article className="timeline-item" key={experience.title}>
            <span className="timeline-item__dot"></span>

            <p className="timeline-item__status">{experience.status}</p>
            <h3>{experience.title}</h3>
            <p className="timeline-item__company">{experience.company}</p>
            <p className="timeline-item__date">{experience.date}</p>

            <p className="timeline-item__description">
              {experience.description}
            </p>

            <ul className="timeline-item__tasks">
              {experience.tasks.map((task) => (
                <li key={task}>{task}</li>
              ))}
            </ul>

            <p className="timeline-item__tools">{experience.tools}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;