import "./Technologies.css";

const technologyGroups = [
  {
    title: "Frontend",
    icon: "⌘",
    items: ["React", "JavaScript", "CSS"],
  },
  {
    title: "Backend",
    icon: "{}",
    items: ["C#", ".NET", "Java", "Spring Boot", "Node.js"],
  },
  {
    title: "Bases de datos y servicios",
    icon: "DB",
    items: ["MySQL", "Firebase", "Supabase"],
  },
  {
    title: "Herramientas",
    icon: "⚙",
    items: ["Git", "GitHub", "Visual Studio Code", "Vercel", "Postman"],
  },
];

function Technologies() {
  return (
    <section className="technologies section reveal" id="technologies">
      <div className="section-heading">
        <h2>Stack Tecnológico</h2>
        <p>~/skills/current_stack</p>
      </div>

      <div className="technologies__grid">
        {technologyGroups.map((group) => (
          <article className="technology-card card-hover" key={group.title}>
            <div className="technology-card__header">
              <span className="technology-card__icon">{group.icon}</span>
              <h3>{group.title}</h3>
            </div>

            <div className="technology-card__chips">
              {group.items.map((item) => (
                <span className="tech-chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Technologies;