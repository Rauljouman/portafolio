import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar__content">
        <a href="#about" className="navbar__logo">
          Raül.dev
        </a>

        <div className="navbar__links">
          <a href="#about">Sobre mí</a>
          <a href="#technologies">Tecnologías</a>
          <a href="#projects">Proyecto</a>
          <a href="#experience">Experiencia</a>
          <a href="#education">Formación</a>
          <a href="#contact">Contacto</a>
        </div>

        <a href="/cv-raul-jouman.pdf" className="navbar__cv" download>
          Descargar CV
        </a>
      </nav>
    </header>
  );
}

export default Navbar;