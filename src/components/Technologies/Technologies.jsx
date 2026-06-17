import "./Technologies.css";

function Technologies() {
  return (
    <section className="technologies section reveal" id="technologies">
      <div className="section-heading">
        <h2>Stack Tecnológico</h2>
        <p>~/skills/current_stack</p>
      </div>

      <div className="technologies-terminal-wrapper">
        <div className="hero-terminal technologies-terminal card-hover">
          <div className="hero-terminal__header">
            <div className="hero-terminal__controls">
              <span className="hero-terminal__dot hero-terminal__dot--red"></span>
              <span className="hero-terminal__dot hero-terminal__dot--yellow"></span>
              <span className="hero-terminal__dot hero-terminal__dot--blue"></span>
            </div>

            <span className="hero-terminal__title">
              raul@dev-machine:~/tech-stack
            </span>
          </div>

          <div className="hero-terminal__body">
            <p>
              <span className="hero-terminal__keyword">public class</span>{" "}
              <span className="hero-terminal__class">TechStack</span> {"{"}
            </p>

            <p className="hero-terminal__indent-1">
              <span className="hero-terminal__keyword">private String[]</span>{" "}
              languages = {"{"}
              <span className="hero-terminal__string">"JavaScript"</span>,{" "}
              <span className="hero-terminal__string">"C#"</span>,{" "}
              <span className="hero-terminal__string">"Java"</span>,{" "}
              <span className="hero-terminal__string">"Python"</span>,{" "}
              <span className="hero-terminal__string">"SQL"</span>
              {"}"};
            </p>

            <p className="hero-terminal__indent-1">
              <span className="hero-terminal__keyword">private String[]</span>{" "}
              frameworks = {"{"}
              <span className="hero-terminal__string">"React"</span>,{" "}
              <span className="hero-terminal__string">".NET"</span>,{" "}
              <span className="hero-terminal__string">"Spring Boot"</span>,{" "}
              <span className="hero-terminal__string">"Node.js"</span>
              {"}"};
            </p>

            <p className="hero-terminal__indent-1">
              <span className="hero-terminal__keyword">private String[]</span>{" "}
              databases = {"{"}
              <span className="hero-terminal__string">"MySQL"</span>,{" "}
              <span className="hero-terminal__string">"PostgreSQL"</span>,{" "}
              <span className="hero-terminal__string">"Firebase"</span>,{" "}
              <span className="hero-terminal__string">"Supabase"</span>
              {"}"};
            </p>

            <p className="hero-terminal__indent-1">
              <span className="hero-terminal__keyword">private String[]</span>{" "}
              tools = {"{"}
              <span className="hero-terminal__string">"Git"</span>,{" "}
              <span className="hero-terminal__string">"GitHub"</span>,{" "}
              <span className="hero-terminal__string">"VS Code"</span>,{" "}
              <span className="hero-terminal__string">"Postman"</span>,{" "}
              <span className="hero-terminal__string">"Vercel"</span>
              {"}"};
            </p>

            <br />

            <p className="hero-terminal__indent-1">
              <span className="hero-terminal__keyword">public void</span>{" "}
              <span className="hero-terminal__method">keepLearning</span>() {"{"}
            </p>

            <p className="hero-terminal__indent-2">practiceBackend();</p>
            <p className="hero-terminal__indent-2">buildProjects();</p>
            <p className="hero-terminal__indent-2">improveEveryDay();</p>

            <p className="hero-terminal__indent-1">{"}"}</p>
            <p>{"}"}</p>

            <p className="hero-terminal__cursor">
              <span className="hero-terminal__prompt">❯</span>
              <span className="hero-terminal__block"></span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technologies;