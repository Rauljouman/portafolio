import "./Technologies.css";

function Technologies() {
  return (
    <section className="technologies section reveal" id="technologies">
      <div className="section-heading">
        <h2>Stack Tecnológico</h2>
        <p>~/skills/current_stack</p>
      </div>

      <div className="technologies-terminal-wrapper">
        <div className="technologies-terminal card-hover">

          <div className="technologies-terminal__header">
            <div className="technologies-terminal__controls">
              <span className="terminal-dot terminal-dot--red"></span>
              <span className="terminal-dot terminal-dot--yellow"></span>
              <span className="terminal-dot terminal-dot--green"></span>
            </div>

            <span className="technologies-terminal__title">
              raul@dev-machine: ~/tech-stack
            </span>
          </div>

          <div className="technologies-terminal__body">
            <p>
              <span className="terminal-keyword">public class</span>{" "}
              <span className="terminal-class">TechStack</span> {"{"}
            </p>

            <p className="indent-1">
              <span className="terminal-keyword">private String[]</span>{" "}
              languages = {"{"}
              <span className="terminal-string">"C#"</span>,{" "}
              <span className="terminal-string">"Java"</span>,{" "}
              <span className="terminal-string">"Python"</span>,{" "}
              <span className="terminal-string">"JavaScript"</span>,{" "}

              {"}"};
            </p>

            <p className="indent-1">
              <span className="terminal-keyword">private String[]</span>{" "}
              frameworks = {"{"}
              <span className="terminal-string">"React"</span>,{" "}
              <span className="terminal-string">".NET"</span>,{" "}
              <span className="terminal-string">"Spring Boot"</span>
              {"}"};
            </p>

            <p className="indent-1">
              <span className="terminal-keyword">private String[]</span>{" "}
              databases = {"{"}
              <span className="terminal-string">"MySQL"</span>,{" "}
              <span className="terminal-string">"PostgreSQL"</span>,{" "}
              <span className="terminal-string">"Firebase"</span>,{" "}
              <span className="terminal-string">"Supabase"</span>
              {"}"};
            </p>

            <p className="indent-1">
              <span className="terminal-keyword">private String[]</span>{" "}
              tools = {"{"}
              <span className="terminal-string">"Git"</span>,{" "}
              <span className="terminal-string">"VS Code"</span>,{" "}
              <span className="terminal-string">"Postman"</span>,{" "}
              <span className="terminal-string">"Vercel"</span>
              {"}"};
            </p>

            <br />

            <p className="indent-1">
              <span className="terminal-keyword">public void</span>{" "}
              <span className="terminal-method">keepLearning</span>() {"{"}
            </p>

            <p className="indent-2">practiceBackend();</p>
            <p className="indent-2">buildProjects();</p>
            <p className="indent-2">improveEveryDay();</p>

            <p className="indent-1">{"}"}</p>
            <p>{"}"}</p>

            <p className="terminal-cursor">
              <span className="terminal-prompt">❯</span>
              <span className="terminal-block"></span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technologies;